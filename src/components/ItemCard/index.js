import React from "react";

export default function ItemCard({ courses }) {
  const renderCard = () => {
    return Object.entries(courses).map(([propstt, listCourse], index) => {
      return (
        <div className="card text-left col-3" key={propstt}>
          <img className="card-img-top" src={listCourse.hinhAnh} />
          <div className="card-body">
            <h4 className="card-title">{listCourse.maKhoaHoc}</h4>
            <p className="card-text">{listCourse.moTa}</p>
          </div>
        </div>
      );
    });
  };
  return (
    <>
      <div className="row">
        {/* <div className="card text-left">
          <img className="card-img-top" src={courses.HinhAnh} alt />
          <div className="card-body">
            <h4 className="card-title">Title</h4>
            <p className="card-text">Body</p>
          </div>
        </div> */}
        {renderCard()}
      </div>
    </>
  );
}
