import React from "react";

import { CommentContent, CommentInput } from "src/components";
import { CommentsProps } from "./types";
import styles from "./styles.module.css";
import { COMMENT_DEFAULT } from "src/utils/constants";

const Comments = (props: CommentsProps) => {
  return (
    <div className={styles.comments_wrapper}>
      <div className={styles.comments_list}>
        <CommentContent
          userAvatar="/images/avatar-1.jpg"
          chapter="Chapter 35"
          timeAgo="24 min"
          userName="Han Solo"
          content={COMMENT_DEFAULT}
          likes={61}
          shares={12}
        />
      </div>
      <div className={styles.comments_input}>
        <CommentInput />
      </div>
    </div>
  );
};

export default Comments;
