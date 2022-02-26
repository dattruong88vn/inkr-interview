import React from "react";
import { Row, Col } from "antd";
import Image from "next/image";

import {
  LIST_COLOR,
  LIST_FONT_SIZE,
  LIST_LINE_HEIGHT,
} from "src/utils/constants";
import { GetAppProps } from "./types";
import { CustomText } from "src/components";

function GetApp({}: GetAppProps) {
  return (
    <Row align="middle" justify="space-between">
      <Col span={16}>
        <Row>
          <CustomText
            color={LIST_COLOR.COLOR_3}
            fontSize={LIST_FONT_SIZE.FONT_SIZE_2}
            lineHeight={LIST_LINE_HEIGHT.LINE_HEIGHT_3}
            style={{ marginBottom: 4 }}
          >
            Get The App
          </CustomText>
        </Row>
        <Row>
          <CustomText
            color={LIST_COLOR.COLOR_2}
            fontSize={LIST_FONT_SIZE.FONT_SIZE_1}
            lineHeight={LIST_LINE_HEIGHT.LINE_HEIGHT_2}
          >
            Love this title? Scan the QR code to continue reading right on your
            mobile devices.
          </CustomText>
        </Row>
      </Col>
      <Col span={8}>
        <Row justify="end">
          <Image
            src="/images/qrcode.jpg"
            width={116}
            height={116}
            alt="qrcode"
          ></Image>
        </Row>
      </Col>
    </Row>
  );
}

export default GetApp;
