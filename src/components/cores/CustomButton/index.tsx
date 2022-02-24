import React from "react";
import { Button } from "antd";

import { CustomButtonProps } from "./types";
import styles from "./styles.module.css";

function CustomButton({ text, icon }: CustomButtonProps) {
  return (
    <Button className={styles.custom_btn}>
      {icon && <span>icon</span>}
      {text}
    </Button>
  );
}

export default CustomButton;
