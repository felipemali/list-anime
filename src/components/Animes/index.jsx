import React, { useState } from "react";
import "./index.css";
import { Carousel } from "antd";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import SwiperCore, { Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

const contentStyle = {
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
};

const Animes = ({ imgs, setDisplay, display }) => {
  SwiperCore.use([Autoplay]);
  return (
    <div className="anime" style={{ display: `${display}` }}>
      <div className="title-anime">
        <span>Animes</span>
      </div>

      <div className="swiper-anime">
        <Swiper
          className="swiper"
          // install Swiper modules

          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          navigation
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide onClick={() => setDisplay("none")}>
            <Link to="/sinopse">
              <div
                className="swiperSlide-anime"
                style={{
                  backgroundImage: `url(${imgs[1]?.images.jpg.image_url})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <button className="anime-buttons">{imgs[0]?.episodes}</button>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="swiperSlide-anime"
              style={{
                backgroundImage: `url(${imgs[2]?.images.jpg.image_url})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <button className="anime-buttons">{imgs[0]?.episodes}</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="swiperSlide-anime"
              style={{
                backgroundImage: `url(${imgs[2]?.images.jpg.image_url})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <button className="anime-buttons">{imgs[0]?.episodes}</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="swiperSlide-anime"
              style={{
                backgroundImage: `url(${imgs[2]?.images.jpg.image_url})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <button className="anime-buttons">{imgs[0]?.episodes}</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="swiperSlide-anime"
              style={{
                backgroundImage: `url(${imgs[4]?.images.jpg.image_url})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <button className="anime-buttons">{imgs[0]?.episodes}</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="swiperSlide-anime"
              style={{
                backgroundImage: `url(${imgs[4]?.images.jpg.image_url})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <button className="anime-buttons">{imgs[0]?.episodes}</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default Animes;
