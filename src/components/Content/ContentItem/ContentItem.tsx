import { FC } from "react";
import "../Content.scss";
import { ICourse } from "../../../types/types";

export interface ContentItemProps {
  data: ICourse;
}

export const ContentItem: FC<ContentItemProps> = ({ data }) => {
  return (
    <div className="courses__item">
      <div
        className="courses__item-image"
        style={{ backgroundColor: data.bgColor }}
      >
        <img src={data.image} alt={data.name} />
      </div>
      <div className="courses__item-name">{data.name}</div>
    </div>
  );
};
