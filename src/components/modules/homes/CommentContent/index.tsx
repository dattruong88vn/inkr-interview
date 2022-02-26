import React from "react";
import { Row, Col } from "antd";

import { CommentContentProps } from "./types";
import styles from "./styles.module.css";
import { CustomImage, CustomText, DotInline, Icon } from "src/components";
import {
  COMMENT_DEFAULT,
  LIST_COLOR,
  LIST_FONT_SIZE,
  LIST_LINE_HEIGHT,
} from "src/utils/constants";

const CommentContent = ({
  userAvatar,
  userName,
  timeAgo,
  content,
  likes,
  shares,
  chapter,
}: CommentContentProps) => {
  return (
    <Row
      wrap={false}
      align="top"
      justify="start"
      gutter={16}
      className={styles.comment_content_wrapper}
    >
      <Col flex="none">
        <div className={styles.comment_avatar}>
          <CustomImage url={userAvatar} alt={userName} width={32} height={32} />
        </div>
      </Col>
      <Col flex="auto">
        <Row gutter={8} style={{ marginBottom: 4 }}>
          <Col>
            <CustomText
              color={LIST_COLOR.COLOR_1}
              lineHeight={LIST_LINE_HEIGHT.LINE_HEIGHT_18}
              fontSize={LIST_FONT_SIZE.FONT_SIZE_12}
            >
              {userName}
            </CustomText>
          </Col>
          <Col>
            <CustomText
              color={LIST_COLOR.COLOR_NEUTRAL_5}
              fontSize={LIST_FONT_SIZE.FONT_SIZE_11}
              lineHeight={LIST_LINE_HEIGHT.LINE_HEIGHT_18}
            >
              Commented on {chapter} <DotInline /> {timeAgo} ago
            </CustomText>
          </Col>
        </Row>
        <Row style={{ marginBottom: 4 }}>
          <CustomText
            color={LIST_COLOR.COLOR_3}
            fontSize={LIST_FONT_SIZE.FONT_SIZE_14}
            lineHeight={LIST_LINE_HEIGHT.LINE_HEIGHT_22}
          >
            {COMMENT_DEFAULT}
          </CustomText>
        </Row>
        <Row align="middle">
          <Icon icon="like" color={LIST_COLOR.COLOR_3} />
          <CustomText
            color={LIST_COLOR.COLOR_1}
            fontSize={LIST_FONT_SIZE.FONT_SIZE_12}
            lineHeight={LIST_LINE_HEIGHT.LINE_HEIGHT_22}
            style={{ margin: "0 10px 0 8px" }}
          >
            {likes}
          </CustomText>
          <Icon icon="message" color={LIST_COLOR.COLOR_3} />
          <CustomText
            color={LIST_COLOR.COLOR_1}
            fontSize={LIST_FONT_SIZE.FONT_SIZE_12}
            lineHeight={LIST_LINE_HEIGHT.LINE_HEIGHT_22}
            style={{ margin: "0 10px 0 8px" }}
          >
            {shares}
          </CustomText>
          <CustomText
            color={LIST_COLOR.COLOR_1}
            fontSize={LIST_FONT_SIZE.FONT_SIZE_14}
            lineHeight={LIST_LINE_HEIGHT.LINE_HEIGHT_22}
          >
            Reply
          </CustomText>
        </Row>
      </Col>
    </Row>
  );
};

export default CommentContent;
