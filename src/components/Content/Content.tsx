import { FC } from "react";
import { ContentItem } from "..";
import { ICourse } from "../../types/types";

import "./Content.scss";

export interface ContentProps {
  data: ICourse[];
  activeTag: String;
}

export const Content: FC<ContentProps> = ({ data, activeTag }) => {
  return (
    <div className="courses">
      {(activeTag === "Все темы"
        ? data
        : data.filter((item) => item.tags.includes(activeTag))
      ).map((item) => (
        <ContentItem key={item.id} data={item} />
      ))}
    </div>
  );
};
