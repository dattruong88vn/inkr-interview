import React from "react";
import { Row, Col } from "antd";

import { CustomImage, CustomText, Icon } from "src/components";
import styles from "./styles.module.css";
import { RelatedItemProps } from "./types";
import {
  LIST_COLOR,
  LIST_FONT_SIZE,
  LIST_LINE_HEIGHT,
} from "src/utils/constants";

const RelatedItem = ({ url, author, reads, name }: RelatedItemProps) => {
  return (
    <Row gutter={24} align="middle" className={styles.related_item_container}>
      <Col>
        <CustomImage url={url} width={80} height={120} alt={name} />
      </Col>
      <Col>
        <Row>
          <CustomText
            color={LIST_COLOR.COLOR_3}
            fontSize={LIST_FONT_SIZE.FONT_SIZE_2}
            lineHeight={LIST_LINE_HEIGHT.LINE_HEIGHT_3}
          >
            {name}
          </CustomText>
        </Row>
        <Row align="middle">
          <Icon icon="currency" border={false} />
          &nbsp;
          <CustomText
            color={LIST_COLOR.COLOR_INKR_PURPLE_6}
            fontSize={LIST_FONT_SIZE.FONT_SIZE_2}
            lineHeight={LIST_LINE_HEIGHT.LINE_HEIGHT_3}
            fontWeight="500"
          >
            EXCLUSIVE
          </CustomText>
        </Row>
        <Row>
          <CustomText
            color={LIST_COLOR.COLOR_1}
            fontSize={LIST_FONT_SIZE.FONT_SIZE_1}
            lineHeight={LIST_LINE_HEIGHT.LINE_HEIGHT_3}
          >
            {author}
          </CustomText>
        </Row>
        <Row>
          <CustomText
            color={LIST_COLOR.COLOR_1}
            fontSize={LIST_FONT_SIZE.FONT_SIZE_1}
            lineHeight={LIST_LINE_HEIGHT.LINE_HEIGHT_3}
          >
            {reads} reads
          </CustomText>
        </Row>
      </Col>
    </Row>
  );
};

export default RelatedItem;
