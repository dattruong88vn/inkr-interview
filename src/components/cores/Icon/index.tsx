import React from "react";
import IcomoonReact from "icomoon-react";
import iconSet from "public/fonts/selection.json";
import { IconProps } from "./types";
import styles from "./styles.module.css";

export default function Icon({ size, icon, style }: IconProps) {
  return (
    <div className={styles.icon_wrapper} style={style}>
      <IcomoonReact
        iconSet={iconSet}
        color="rgba(255, 255, 255, 0.85)"
        size={size || "16px"}
        icon={icon}
      />
    </div>
  );
}
