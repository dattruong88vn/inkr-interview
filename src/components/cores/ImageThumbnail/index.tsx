import React from "react";
import Image from "next/image";
import { ImageThumbnailProps } from "./types";
import styles from "./styles.module.css";

function ImageThumbnail({ url, alt, width, height }: ImageThumbnailProps) {
  console.log(url);
  return (
    <div className={styles.image_wrapper}>
      <Image src={url} alt={alt} width={width} height={height} />
    </div>
  );
}

export default ImageThumbnail;
