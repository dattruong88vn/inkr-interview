import React from "react";
import Image from "next/image";
import { Row, Col, Progress } from "antd";

import { ImageThumbnailProps } from "./types";
import styles from "./styles.module.css";

function ImageThumbnail({
  url,
  alt,
  width,
  height,
  progress,
}: ImageThumbnailProps) {
  return (
    <div className={styles.image_wrapper}>
      <Image src={url} alt={alt} width={width} height={height} />
      {progress && (
        <div className={styles.progress}>
          <Progress
            percent={75}
            showInfo={false}
            strokeColor="#ffd60a"
            trailColor="#000"
            strokeWidth={4}
            width={50}
          />
        </div>
      )}
    </div>
  );
}

export default ImageThumbnail;
