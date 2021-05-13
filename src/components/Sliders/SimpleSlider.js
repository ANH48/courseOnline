import React, { useEffect } from "react";
import Slider from "react-slick";

export default function SimpleSlider({ courses, tab }) {
  let settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            dots: false,
            infinite: true,

          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            infinite: true,
          }
        },
         {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            infinite: true,
          }
        }
      ]
  };
  useEffect(() => {
    console.log("thay doi tab");
  }, [tab])
  const renderCard = () => {
    return Object.entries(courses).map(([propstt, listCourse], index) => {
      if (tab === listCourse.danhMucKhoaHoc.maDanhMucKhoahoc)
        return (
          <div className="card " key={propstt}>
            <img
              className="card-img-top"
              src={listCourse.hinhAnh}
              alt="Card image"
            />
            <div className="card-body">
              <h4 className="card-title">{listCourse.maKhoaHoc}</h4>
              <div className="card-text">
                <small className="text-muted">{listCourse.tenKhoaHoc}</small>
              </div>
              <div>
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
              </div>
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
    <Slider {...settings}>{renderCard()}</Slider>
  );
}
