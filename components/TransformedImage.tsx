import { dataUrl, debounce, download, getImageSize } from "@/lib/utils";
import { Download } from "lucide-react";
import { CldImage, getCldImageUrl } from "next-cloudinary";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

const TransformedImage = ({
  image,
  type,
  title,
  transforamtionConfig,
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
        ...transforamtionConfig,
      }),
      title
    );
  };
  return (
    <div className="flex flex-col sm:w-80">
      <div className="flex justify-between items-center pb-5">
        <h2 className="text-start text-lg font-bold">Transformed Image</h2>
        <button onClick={downloadHandler}>
          <Download color="blue" />
        </button>
      </div>

      {image?.publicId && transforamtionConfig ? (
        <div>
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
            {...transforamtionConfig}
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
        <p className="text-center pt-16">Your new Image</p>
      )}
    </div>
  );
};

export default TransformedImage;
