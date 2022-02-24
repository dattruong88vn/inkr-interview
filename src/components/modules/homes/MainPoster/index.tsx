import { Row, Col } from "antd";
import React from "react";

import { ImageThumbnail, MainPosterContent } from "components";
import { MainPosterProps } from "./types";
import styles from "./styles.module.css";

const imgPath = process.env.NEXT_PUBLIC_IMAGES_PATH;

function MainPoster(props: MainPosterProps) {
  return (
    <div className={styles.container}>
      <ImageThumbnail
        url={`${imgPath}/image-1.jpg`}
        alt=""
        height={271}
        width={180}
      />
      <div style={{ marginLeft: "24px" }}>
        <MainPosterContent />
      </div>
    </div>
  );
}

export default MainPoster;
