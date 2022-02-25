import React from "react";
import { Row, Col } from "antd";

import { Tag, CustomButton, Icon } from "src/components";
import { MainPosterContentProps } from "./types";
import styles from "./styles.module.css";

function MainPosterContent(props: MainPosterContentProps) {
  return (
    <div className={styles.container}>
      <div>
        <Row justify="space-between">
          <Col>
            <div className={styles.title}>Kasane</div>
          </Col>
          <Col>
            <Row justify="space-between" align="middle">
              <Col>
                <Icon icon="share-alt" />
              </Col>
              <Col>
                <Icon icon="more" style={{ marginLeft: "8px" }} />
              </Col>
            </Row>
          </Col>
        </Row>
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
