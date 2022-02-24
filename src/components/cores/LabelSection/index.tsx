import React from "react";

import { LabelSectionProps } from "./types";
import styles from "./styles.module.css";

function LabelSection({ text }: LabelSectionProps) {
  return <div className={styles.label_section}>{text}</div>;
}

export default LabelSection;
