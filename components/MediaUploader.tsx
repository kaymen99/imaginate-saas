"use client";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import { useToast } from "./ui/use-toast";
import Image from "next/image";
import { dataUrl, getImageSize } from "@/lib/utils";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";

type MediaUploaderProps = {
  onValueChange: (value: string) => void;
  setImage: React.Dispatch<any>;
  image: any;
  publicId: string;
  type: string;
};

const MediaUploader = ({
  onValueChange,
  setImage,
  image,
  publicId,
  type,
}: MediaUploaderProps) => {
  const { toast } = useToast();

  const onUploadSuccess = (result: any) => {
    setImage((prev: any) => ({
      ...prev,
      publicId: result?.info?.public_id,
      width: result?.info?.width,
      height: result?.info?.height,
      secureURL: result?.info?.secure_url,
    }));

    onValueChange(result?.info?.public_id);

    toast({
      title: "Image uploaded successfuly",
      description: "",
      duration: 5000,
      className: "success-toast",
    });
  };

  const onUploadError = () => {
    toast({
      title: "Something went wrong",
      description: "Please try again",
      duration: 5000,
      className: "error-toast",
    });
  };
  return (
    <CldUploadWidget
      uploadPreset="creativify"
      options={{ multiple: false }}
      onSuccess={onUploadSuccess}
      onError={onUploadError}
    >
      {({ open }) => (
        <div className="flex flex-col justify-between sm:w-80">
          <h2 className="text-lg font-bold">Original Image</h2>
          {publicId ? (
            <div className="flex pt-5">
              <CldImage
                width={getImageSize(type, image, "width")}
                height={getImageSize(type, image, "height")}
                src={publicId}
                alt="image"
                placeholder={dataUrl as PlaceholderValue}
              />
            </div>
          ) : (
            <div
              className="flex flex-col items-center pt-24 cursor-pointer"
              onClick={() => {
                open();
              }}
            >
              <Image
                src="/assets/icons/add.svg"
                alt="upload"
                width={24}
                height={24}
                className="pb-[6px]"
              />
              <p>Click here to upload your image</p>
            </div>
          )}
        </div>
      )}
    </CldUploadWidget>
  );
};

export default MediaUploader;
