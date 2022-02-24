import React from "react";
import Image from "next/image";
import { ImageThumbnailProps } from "./types";

function ImageThumbnail({ url, alt, width, height }: ImageThumbnailProps) {
  return <Image src={url} alt={alt} width={width} height={height} />;
}

export default ImageThumbnail;
