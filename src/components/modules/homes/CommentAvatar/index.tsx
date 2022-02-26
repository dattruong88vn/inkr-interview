import React from "react";
import { CustomImage } from "src/components";

import { CommentAvatarProps } from "./types";
import styles from "./styles.module.css";

function CommentAvatar({ avatar, name }: CommentAvatarProps) {
  return (
    <div className={styles.comment_avatar}>
      <CustomImage url={avatar} alt={name} width={32} height={32} />
    </div>
  );
}

export default CommentAvatar;
