"use client";

import { dataUrl, debounce, download, getImageSize } from "@/lib/utils";
import { Download } from "lucide-react";
import { CldImage, getCldImageUrl } from "next-cloudinary";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

const TransformedImage = ({
  image,
  type,
  title,
  transformationConfig,
  isTransforming,
  setIsTransforming,
}: TransformImageProps) => {
  const downloadHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    download(
      getCldImageUrl({
        width: image?.width,
        height: image?.height,
        src: image?.publicId,
        ...transformationConfig,
      }),
      title
    );
  };
  return (
    <div className="flex flex-col md:w-80">
      <div className="flex justify-between items-center pb-4">
        <h2 className="text-start text-lg font-bold">Transformed Image</h2>
        <button onClick={downloadHandler}>
          <Download color="blue" />
        </button>
      </div>

      {image?.publicId && transformationConfig ? (
        <div className="pt-5">
          <CldImage
            width={getImageSize(type, image, "width")}
            height={getImageSize(type, image, "height")}
            src={image?.publicId}
            alt={image.title}
            placeholder={dataUrl as PlaceholderValue}
            onLoad={() => {
              setIsTransforming && setIsTransforming(false);
            }}
            onError={() => {
              debounce(() => {
                setIsTransforming && setIsTransforming(false);
              }, 8000)();
            }}
            {...transformationConfig}
          />

          {isTransforming && (
            <div className="transforming-loader">
              <Image
                src="/assets/icons/spinner.svg"
                alt="Transforming"
                width={50}
                height={50}
              />
              <p className="text-white/80">Please wait...</p>
            </div>
          )}
        </div>
      ) : (
        <div className="pt-28 pb-28 border bg-blue-100 rounded-md">
          <p className="text-center">Your new Image</p>
        </div>
      )}
    </div>
  );
};

export default TransformedImage;
