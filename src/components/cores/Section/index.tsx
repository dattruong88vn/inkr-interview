import React from "react";

import { LabelSection } from "components";
import { SectionProps } from "./types";
import styles from "./styles.module.css";

function Section({ children, title }: SectionProps) {
  return (
    <div className={styles.section_container}>
      {title && <LabelSection text={title} />}
      {children}
    </div>
  );
}

export default Section;
