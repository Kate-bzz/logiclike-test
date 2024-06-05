import { FC, useEffect, useState } from "react";
import { Content, Sidebar } from "../components";
import { ICourse } from "../types/types";

import "./Courses.scss";

const Courses: FC = () => {
  const [sidebarItems, setSidebarItems] = useState<String[]>(["Все темы"]);
  const [data, setData] = useState<ICourse[]>([]);
  const [activeItem, setActiveItem] = useState<String>("Все темы");

  useEffect(() => {
    fetchCourses();
  });

  const fetchCourses = async () => {
    const response = await fetch(
      "https://logiclike.com/docs/courses.json"
    ).then((response) => response.json());

    if (response && response.length !== 0) {
      convertData(response);
    }
  };

  const convertData = (data: ICourse[]) => {
    const allTags: String[] = data.map((item) => item.tags).flat();
    const sidebar: String[] = allTags.filter(function (item, index) {
      return allTags.indexOf(item) === index;
    });
    setSidebarItems(["Все темы", ...sidebar]);
    setData(data);
  };
  return (
    <div className="main-content">
      <Sidebar
        sidebarItems={sidebarItems}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />
      <Content data={data} activeTag={activeItem} />
    </div>
  );
};
export default Courses;
