import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./sliderStyle.css";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SliderProducts } from "../../data/products";

const Slider = () => {
  return (
    <div className="container">
      <Swiper
      modules={[Navigation, Pagination]}
        className="swiper"
        loopFillGroupWithBlank={true}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
   //      style={{
   //       "--swiper-pagination-color": "#FFBA08",
   //       "--swiper-pagination-bullet-inactive-color": "#999999",
   //       "--swiper-pagination-bullet-inactive-opacity": "1",
   //       "--swiper-pagination-bullet-size": "16px",
   //       "--swiper-pagination-bullet-horizontal-gap": "10px",
   //       "--swiper-pagination-bullet-vertical-gap": "36px"
   //   }}
        grabCursor={true}
        enteredSlides={true}
      >
        {SliderProducts.map((slide, i) => {
          return (
            <SwiperSlide className="swiper_slide" key={i}>
              <div className="left_s">
                <div className="name">
                  <span>{slide.name}</span>
                  <span>{slide.detail}</span>
                </div>
                <span>$ {slide.price}</span>
                <div>Shop now</div>
              </div>
              <img
                src={slide.img}
                alt="Slides Image"
                className="slide_img"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
