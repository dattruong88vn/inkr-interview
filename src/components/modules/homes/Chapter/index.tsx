import React from "react";
import { Row, Col, Progress } from "antd";
import { CustomText, Icon, ImageThumbnail } from "src/components";

import { ChapterProps, CustomStyleProps } from "./types";
import styles from "./styles.module.css";
import {
  LIST_COLOR,
  LIST_FONT_SIZE,
  LIST_LINE_HEIGHT,
} from "src/utils/constants";

function Chapter({
  title,
  src,
  lastRead,
  price,
  isReading = false,
  progress,
}: ChapterProps) {
  let customClass = "chapter_container";
  if (lastRead) {
    customClass = "chapter_container_last_read";
  } else if (isReading) {
    customClass = "chapter_container_selected";
  }

  return (
    <div className={styles[customClass]}>
      <Row align="middle">
        <Col span={20}>
          <Row justify="start" align="middle" gutter={12}>
            <Col className={styles.chapter_thumbnail_wrapper}>
              <ImageThumbnail
                url={src}
                alt=""
                width={78}
                height={62}
                progress={progress}
              />
            </Col>
            <Col>
              <Row>
                <CustomText
                  color={LIST_COLOR.COLOR_2}
                  fontSize={LIST_FONT_SIZE.FONT_SIZE_1}
                  lineHeight={LIST_LINE_HEIGHT.LINE_HEIGHT_2}
                >
                  {title}
                </CustomText>
              </Row>
              {lastRead && (
                <Row>
                  <CustomText
                    color={LIST_COLOR.COLOR_1}
                    fontSize={LIST_FONT_SIZE.FONT_SIZE_5}
                    lineHeight={LIST_LINE_HEIGHT.LINE_HEIGHT_1}
                  >
                    Last read {lastRead}{" "}
                  </CustomText>
                </Row>
              )}
            </Col>
          </Row>
        </Col>
        <Col span={4}>
          {price ? (
            <Row align="middle" justify="end">
              <Icon icon="union" border={false} />
              &nbsp;
              <span>{price}</span>
            </Row>
          ) : !lastRead ? (
            <Row justify="end">
              <CustomText
                color={LIST_COLOR.COLOR_2}
                fontSize={LIST_FONT_SIZE.FONT_SIZE_1}
                lineHeight={LIST_LINE_HEIGHT.LINE_HEIGHT_2}
              >
                FREE
              </CustomText>
            </Row>
          ) : null}
        </Col>
      </Row>
    </div>
  );
}

export default Chapter;
