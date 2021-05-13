// import ItemCard from "@/components/ItemCard";
import Tabs from "../../components/tabs";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllCourses } from "src/actions/courses";
import ItemCard from "../../components/ItemCard";
import ItemCardCondition from "../../components/ItemCardCondition";
import SimpleSlider from "../../components/Sliders/SimpleSlider";
export default function Home() {
  const { coursesAll, courses } = useSelector((state) => state.courses);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch action api lấy dskh
    dispatch(getAllCourses());
  }, []);
  return (
    <div className="home">
      <div className="headline">
        <div className="headline-container">
          <h3>The widest choice of courses in the world</h3>
          <p className="headline-text">
            Choose from 130,000 online course videos. New courses are added
            every month
          </p>
        </div>
        <Tabs children={courses} active={1}>
          {courses.map((tab, index) => (
            <Tabs.TabPanes key={`Tab-${index}`} tab={tab.maDanhMuc}>
              <div className="cards__itro cards__itro-container">
              <div className="cards__itro-content">
              <h3>
              Phát triển cơ hội nghề nghiệp của bạn với Python
              </h3>
              <p>Cho dù bạn làm việc trong lĩnh vực máy học hay tài chính, phát triển web hay khoa học dữ liệu, thì ngôn ngữ Python là một trong những kỹ năng quan trọng nhất để học. Cú pháp đơn giản của Python đặc biệt thích hợp cho các ứng dụng văn</p>
              </div>
                <div className="row">
                  {/* <ItemCardCondition
                    courses={coursesAll}
                    tab={tab.maDanhMuc}
                  ></ItemCardCondition> */}
                  <SimpleSlider
                    courses={coursesAll}
                    tab={tab.maDanhMuc}
                    >
                  </SimpleSlider>
                </div>
              </div>
            </Tabs.TabPanes>
          ))}
        </Tabs>
      </div>
        {/* <ItemCard courses={coursesAll}></ItemCard> */}
    </div>
  );
}
