import React from "react";
import { CustomTextProps } from "./types";

import { DEFAULT_STYLE_TEXT } from "src/utils/constants";

const CustomText = ({
  color = DEFAULT_STYLE_TEXT.color,
  fontSize = DEFAULT_STYLE_TEXT.fontSize,
  fontWeight = DEFAULT_STYLE_TEXT.fontWeight,
  lineHeight = DEFAULT_STYLE_TEXT.lineHeight,
  children,
  style,
}: CustomTextProps) => {
  return (
    <span style={{ color, fontSize, fontWeight, lineHeight, ...style }}>
      {children}
    </span>
  );
};

export default CustomText;
