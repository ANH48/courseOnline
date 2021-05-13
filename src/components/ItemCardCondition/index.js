import React from "react";

export default function ItemCardCondition({ courses, tab }) {
  const renderCard = () => {
    return Object.entries(courses).map(([propstt, listCourse], index) => {
      if (tab === listCourse.danhMucKhoaHoc.maDanhMucKhoahoc)
        return (
              <div className="cards col-2" key={propstt}>
                <img
                  className="card-img-top"
                  src={listCourse.hinhAnh}
                  alt="Card image"
                />
                <div className="card-body">
                  <h4 className="card-title">{listCourse.maKhoaHoc}</h4>
                  <p className="card-text">
                    <small className="text-muted">
                      {listCourse.tenKhoaHoc}
                    </small>
                  </p>
                  <p>
                    <div className="list_star_rate">
                      <div className="list_star inline">
                        <span className="star-yellow">
                          <i className="fa fa-star"></i>
                        </span>
                        <span className="star-yellow">
                          <i className="fa fa-star"></i>
                        </span>
                        <span className="star-yellow">
                          <i className="fa fa-star"></i>
                        </span>
                        <span className="star-yellow">
                          <i className="fa fa-star"></i>
                        </span>
                        <span className="star-yellow">
                          <i className="fa fa-star-half"></i>
                        </span>
                      </div>
                      <span className="rate-inline">4.5</span>
                      <span className="vote-inline">(17,931)</span>
                    </div>
                  </p>
                  <div className="price">
                    <div className="price-old">
                      <span>$134,99</span>
                    </div>
                    <div className="price-new">
                      <span>$15,99</span>
                    </div>
                  </div>
                </div>
                <div className="stick">
                  <span>BESTSELLER</span>
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
