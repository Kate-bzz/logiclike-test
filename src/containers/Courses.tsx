import { FC, useEffect, useState } from "react";

import { Content, Sidebar } from "../components";
import { ICourse } from "../types/types";
import { getCourses } from "../api/courses";

import "./Courses.scss";

const Courses: FC = () => {
  const [sidebarItems, setSidebarItems] = useState<String[]>(["Все темы"]);
  const [data, setData] = useState<ICourse[]>([]);
  const [activeItem, setActiveItem] = useState<String>("Все темы");

  useEffect(() => {
    fetchCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchCourses = async () => {
    const data = await getCourses();
    if (data && data.length !== 0) {
      convertData(data);
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
