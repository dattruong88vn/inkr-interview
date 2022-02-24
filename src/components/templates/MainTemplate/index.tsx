import React from "react";
import { Row } from "antd";

import { LeftContent, RightContent } from "components";

import { MainTemplateProps } from "./types";
import styles from "./styles.module.css";

const MainTemplate = (props: MainTemplateProps) => {
  return (
    <div className={styles.container}>
      <Row gutter={{ xs: 32, xxl: 24 }} justify="space-between">
        <LeftContent />
        <RightContent />
      </Row>
    </div>
  );
};

export default MainTemplate;
