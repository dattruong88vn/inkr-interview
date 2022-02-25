import React from "react";
import { Row } from "antd";

import { Tag, CustomButton } from "src/components";
import styles from "./styles.module.css";

function MainPosterContent(props) {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.title}>Kasane</div>
        <div className={styles.text}>By Kodansa</div>
        <div className={styles.text}>Drama 10 Chapters</div>
        <Row style={{ marginBottom: "25px" }}>
          <div className={styles.group_icon}>
            <span></span>
            <span className={styles.icon}>74,483</span>
          </div>
          <div className={styles.group_icon}>
            <span></span>
            <span className={styles.icon}>15,863</span>
          </div>
        </Row>
        <Row>
          <Tag text="18+" />
          <Tag text="New" />
          <Tag text="Trending" />
          <Tag text="Bestseller" />
          <Tag text="manga" />
        </Row>
      </div>
      <div>
        <CustomButton text="Read first Chapter for FREE" />
      </div>
    </div>
  );
}

export default MainPosterContent;
