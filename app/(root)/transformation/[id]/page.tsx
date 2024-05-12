import TransformedImage from "@/components/TransformedImage";
import { getImage } from "@/lib/actions/images.actions";
import { getImageSize } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

const TransformationPage = async ({ params: { id } }: SearchParamProps) => {
  const { userId } = auth();
  const image = await getImage(id);
  if (image.creator.clerkId !== userId) redirect("/");

  return (
    <div className="p-10 mb-8">
      <div className="w-full py-24 md:py-18 bg-gradient-to-r from-[#63a1f1] to-[#b6bbc2] rounded-xl">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-3xl sm:text-5xl font-bold text-white">
              Transformation Page
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row pt-8 gap-4 max-lg:space-y-12 mb-8">
        <div className="flex flex-col gap-y-4 sm:max-h-[24rem] w-full lg:w-1/4 border-2 rounded-lg border-slate-500 p-6 lg:mt-20">
          <h1 className="text-xl text-center font-bold pb-5">
            Your transformation
          </h1>
          <div className="p-14-medium md:p-16-medium flex gap-2">
            <p className="font-semibold">Image name:</p>
            <p className="font-semibold capitalize text-blue-500">
              {image.title}
            </p>
          </div>

          <div className="p-14-medium md:p-16-medium flex gap-2">
            <p className="font-semibold">Transformation:</p>
            <p className="font-semibold capitalize text-blue-500">
              {image.transformationType}
            </p>
          </div>

          {image.prompt && (
            <div className="p-14-medium md:p-16-medium flex gap-2 ">
              <p className="font-semibold">Input Prompt:</p>
              <p className="font-semibold capitalize text-blue-500">
                {image.prompt}
              </p>
            </div>
          )}

          {image.color && (
            <div className="p-14-medium md:p-16-medium flex gap-2">
              <p className="font-semibold">Color Change:</p>
              <p className="font-semibold capitalize text-blue-500">
                {image.color}
              </p>
            </div>
          )}

          {image.aspectRatio && (
            <div className="p-14-medium md:p-16-medium flex gap-2">
              <p className="font-semibold">Aspect Ratio:</p>
              <p className="font-semibold capitalize text-blue-500">
                {image.aspectRatio}
              </p>
            </div>
          )}
          {image.width && (
            <div className="p-14-medium md:p-16-medium flex gap-2">
              <p className="font-semibold">Width:</p>
              <p className="font-semibold text-blue-500">
                {image.width + " px"}
              </p>
            </div>
          )}
          {image.height && (
            <div className="p-14-medium md:p-16-medium flex gap-2">
              <p className="font-semibold">Height:</p>
              <p className="font-semibold text-blue-500">
                {image.height + " px"}
              </p>
            </div>
          )}
        </div>

        <div className="flex max-md:flex-col max-md:space-y-10 justify-around flex-grow">
          <div className="flex flex-col justify-between md:w-80">
            <h2 className="text-lg font-bold pb-4">Original Image</h2>
            <div className="flex pt-5">
              <Image
                width={getImageSize(image.transformationType, image, "width")}
                height={getImageSize(image.transformationType, image, "height")}
                src={image.secureURL}
                alt="image"
                className="transformation-original_image"
              />
            </div>
          </div>
          <TransformedImage
            image={image}
            type={image.transformationType}
            title={image.title}
            isTransforming={false}
            transformationConfig={image.config}
          />
        </div>
      </div>
    </div>
  );
};

export default TransformationPage;
