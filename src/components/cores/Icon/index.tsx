import React from "react";
import IcomoonReact from "icomoon-react";
import iconSet from "public/fonts/selection.json";
import { IconProps } from "./types";
import styles from "./styles.module.css";

export default function Icon({ color, size, icon }: IconProps) {
  console.log(iconSet);

  return (
    <div className={styles.icon_wrapper}>
      <IcomoonReact iconSet={iconSet} color={color} size={size} icon={icon}>
        Icon
      </IcomoonReact>
    </div>
  );
}
