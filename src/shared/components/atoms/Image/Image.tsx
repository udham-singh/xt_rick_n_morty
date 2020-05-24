import React, { memo, ImgHTMLAttributes, useState } from "react";
import { IMAGE_PLACEHOLDER } from "../../../constants";

type Props = {
  src: string;
} & Partial<ImgHTMLAttributes<any>>;

export const Image = memo((props: Props) => {
  const { src, alt, ...otherProps } = props;
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
  const onImageLoad = () => {
    setIsImageLoaded(true);
  };
  return (
    <>
      {!isImageLoaded && <img src={IMAGE_PLACEHOLDER} alt="placeholder" />}
      <img
        style={!isImageLoaded ? { display: "hidden" } : { display: "block" }}
        src={src}
        alt={alt || ""}
        onLoad={onImageLoad}
        {...otherProps}
      />
    </>
  );
});
