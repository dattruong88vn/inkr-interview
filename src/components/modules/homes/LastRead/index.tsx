import React from "react";

import { Chapter } from "components";
import { IMAGE_PATH } from "utils/constants";

import { LastReadProps } from "./types";

function LastRead(props: LastReadProps) {
  return (
    <div>
      <Chapter
        title="Chapter 1"
        lastSeen="2 days ago"
        src={`${IMAGE_PATH}/image-chapter.jpg`}
      />

      <Chapter title="Chapter 1" src={`${IMAGE_PATH}/image-chapter.jpg`} paid />
      <Chapter title="Chapter 2" src={`${IMAGE_PATH}/image-chapter.jpg`} paid />
      <Chapter title="Chapter 3" src={`${IMAGE_PATH}/image-chapter.jpg`} paid />
      <Chapter
        title="Chapter 4"
        src={`${IMAGE_PATH}/image-chapter.jpg`}
        paid={false}
        price={5}
      />
    </div>
  );
}

export default LastRead;
