"use client";

import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import React, { useEffect, useState, useTransition } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import CustomField from "@/components/CustomField";
import { Input } from "@/components/ui/input";
import {
  aspectRatioOptions,
  defaultValues,
  transformationTypes,
} from "@/constants";
import TransformedImage from "@/components/TransformedImage";
import { debounce, AspectRatioKey, deepMergeObjects } from "@/lib/utils";
import MediaUploader from "@/components/MediaUploader";
import { getCldImageUrl } from "next-cloudinary";
import Link from "next/link";

const FormSchema = z.object({
  type: z.string(),
  title: z.string(),
  publicId: z.string(),
  prompt: z.string().optional(),
  aspectRatio: z.string().optional(),
  color: z.string().optional(),
});

const TransformPage = () => {
  const { toast } = useToast();
  const [image, setImage] = useState<IImage | null>();
  const [isTransforming, setIsTransforming] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [transformationType, setTransformationType] = useState("");
  const [transformationConfig, setTransformationConfig] =
    useState<Transformations | null>(null);
  const [newTransformation, setNewTransformation] =
    useState<Transformations | null>(null);
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: defaultValues,
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsSubmitting(true);

    if (image) {
      const transformationUrl = getCldImageUrl({
        width: image?.width,
        height: image?.height,
        src: image?.publicId,
        ...transformationConfig,
      });
      console.log(transformationUrl);

      form.reset();
    }

    setIsSubmitting(false);
  }

  const onTypeSelectHandler = (
    value: string,
    onChangeField: (value: string) => void
  ) => {
    setTransformationType(value);

    return onChangeField(value);
  };

  const onSizeSelectHandler = (
    value: string,
    onChangeField: (value: string) => void
  ) => {
    const imageSize = aspectRatioOptions[value as AspectRatioKey];
    const transformation =
      transformationTypes[transformationType as TransformationTypeKey];

    setImage((prevState: any) => ({
      ...prevState,
      aspectRatio: imageSize.aspectRatio,
      width: imageSize.width,
      height: imageSize.height,
    }));

    setNewTransformation(transformation.config);

    return onChangeField(value);
  };

  const onInputChangeHandler = (
    fieldName: string,
    value: string,
    onChangeField: (value: string) => void
  ) => {
    debounce(() => {
      setNewTransformation((prev: any) => ({
        ...prev,
        [transformationType]: {
          ...prev?.[transformationType],
          [fieldName === "prompt" ? "prompt" : "to"]: value,
        },
      }));
    }, 1000)();

    return onChangeField(value);
  };

  const onTransformHandler = async () => {
    setIsTransforming(true);

    setTransformationConfig(
      deepMergeObjects(newTransformation, transformationConfig)
    );

    setNewTransformation(null);

    // startTransition(async () => {});
  };

  useEffect(() => {
    if (
      image &&
      (transformationType === "restore" ||
        transformationType === "removeBackground")
    ) {
      const transformation =
        transformationTypes[transformationType as TransformationTypeKey];
      setNewTransformation(transformation.config);
    }
  }, [image, transformationType]);

  return (
    <div className="p-10">
      <div className="w-full py-24 md:py-18 bg-gradient-to-r from-[#63a1f1] to-[#b6bbc2] rounded-xl">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Start Editing
            </h1>
            <p className="text-lg text-gray-200 md:text-xl lg:text-lg">
              Choose your transformation and get your new photo.
            </p>
          </div>
        </div>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col lg:flex-row gap-4 max-lg:space-y-12 mt-28 mb-8"
        >
          <div className="flex flex-col gap-y-8 w-full lg:w-1/4 border-2 rounded-lg border-slate-500 p-6">
            <CustomField
              control={form.control}
              name="type"
              formLabel="Choose Your Transformation"
              className="text-md font-semibold"
              render={({ field }) => (
                <Select
                  onValueChange={(value) =>
                    onTypeSelectHandler(value, field.onChange)
                  }
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your transformation" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(transformationTypes).map((key) => (
                      <SelectItem
                        key={key}
                        value={
                          transformationTypes[key as TransformationTypeKey].type
                        }
                      >
                        {
                          transformationTypes[key as TransformationTypeKey]
                            .title
                        }
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {transformationType && (
              <p className="text-sm font-bold">
                This will{" "}
                {
                  transformationTypes[
                    transformationType as TransformationTypeKey
                  ].subTitle
                }
              </p>
            )}

            <CustomField
              control={form.control}
              name="title"
              formLabel="Image title"
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Your image title"
                  onChange={(e) =>
                    onInputChangeHandler(
                      "title",
                      e.target.value,
                      field.onChange
                    )
                  }
                />
              )}
            />

            {transformationType === "recolor" && (
              <>
                <CustomField
                  control={form.control}
                  name="prompt"
                  formLabel="Object to recolor"
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder="Which color to remove"
                      onChange={(e) =>
                        onInputChangeHandler(
                          "prompt",
                          e.target.value,
                          field.onChange
                        )
                      }
                    />
                  )}
                />
                <CustomField
                  control={form.control}
                  name="color"
                  formLabel="New color"
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder="Your new color"
                      onChange={(e) =>
                        onInputChangeHandler(
                          "color",
                          e.target.value,
                          field.onChange
                        )
                      }
                    />
                  )}
                />
              </>
            )}
            {transformationType === "remove" && (
              <CustomField
                control={form.control}
                name="prompt"
                formLabel="Object to remove"
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Pick an object from the image"
                    onChange={(e) =>
                      onInputChangeHandler(
                        "prompt",
                        e.target.value,
                        field.onChange
                      )
                    }
                  />
                )}
              />
            )}
            {transformationType === "fill" && (
              <>
                <CustomField
                  control={form.control}
                  name="aspectRatio"
                  formLabel="Choose new aspect ratio"
                  render={({ field }) => (
                    <Select
                      defaultValue={field.value}
                      onValueChange={(value) =>
                        onSizeSelectHandler(value, field.onChange)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select aspect ratio" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.keys(aspectRatioOptions).map((key) => (
                          <SelectItem key={key} value={key}>
                            {aspectRatioOptions[key as AspectRatioKey].label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </>
            )}

            <div className="pt-4 flex gap-x-2 justify-center">
              <Button
                variant="main"
                type="button"
                onClick={onTransformHandler}
                disabled={isTransforming || newTransformation === null}
              >
                {isTransforming ? "Transforming..." : "Transform"}
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Save"}
              </Button>
            </div>
          </div>
          <div className="flex justify-around flex-grow">
            <CustomField
              control={form.control}
              name="publicId"
              className="flex items-start"
              render={({ field }) => (
                <MediaUploader
                  onValueChange={field.onChange}
                  setImage={setImage}
                  image={image}
                  publicId={field.value}
                  type={transformationType}
                />
              )}
            />
            <TransformedImage
              image={image}
              type={transformationType}
              title={form.getValues().title}
              transforamtionConfig={transformationConfig}
              isTransforming={isTransforming}
              setIsTransforming={setIsTransforming}
            />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default TransformPage;
