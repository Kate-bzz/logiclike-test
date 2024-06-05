import cx from "classnames";

import "./Sidebar.scss";
import { FC } from "react";

export interface SidebarProps {
  sidebarItems: String[];
  activeItem: String;
  setActiveItem: (item: String) => void;
}

export const Sidebar: FC<SidebarProps> = ({
  sidebarItems,
  activeItem,
  setActiveItem,
}) => {
  return (
    <aside className="sidebar">
      {sidebarItems.map((item, index) => (
        <div
          key={index}
          className={cx("sidebar__item", { active: activeItem === item })}
          onClick={() => setActiveItem(item)}
        >
          {item}
        </div>
      ))}
    </aside>
  );
};
