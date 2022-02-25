import { Row, Col } from "antd";
import React from "react";

import { ImageThumbnail, MainPosterContent } from "src/components";
import { IMAGE_PATH } from "src/utils/constants";

import { MainPosterProps } from "./types";
import styles from "./styles.module.css";

function MainPoster(props: MainPosterProps) {
  return (
    <Row className={styles.container} gutter={24}>
      <Col>
        <ImageThumbnail
          url={`${IMAGE_PATH}/image-1.jpg`}
          alt=""
          height={271}
          width={180}
        />
      </Col>
      <Col flex="auto">
        <MainPosterContent />
      </Col>
    </Row>
  );
}

export default MainPoster;
