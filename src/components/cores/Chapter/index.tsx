import React from "react";
import { Row, Col } from "antd";
import { ImageThumbnail } from "components";

import { ChapterProps } from "./types";
import styles from "./styles.module.css";

function Chapter({ title, src, lastSeen, paid, price }: ChapterProps) {
  console.log(lastSeen);
  const style = lastSeen
    ? {
        marginLeft: "-12px",
        marginRight: "-12px",
        borderRadius: "8px",
      }
    : {
        marginLeft: "-24px",
        marginRight: "-24px",
      };

  return (
    <div className={styles.container} style={{ ...style }}>
      <Row>
        <ImageThumbnail url={src} alt="" width={78} height={62} />
      </Row>
    </div>
  );
}

export default Chapter;
