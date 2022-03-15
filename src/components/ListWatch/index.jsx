import React from "react";
import "./index.css";
import { Carousel } from "antd";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import SwiperCore, { Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const contentStyle = {
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
};

const ListWatch = ({ imgs }) => {
  SwiperCore.use([Autoplay]);
  return (
    <div className="list-watch">
      <div className="title-list-watch">
        <span>Lista para Assistir</span>
      </div>

      <div className="list-watch-carousel">
        <Swiper
          // install Swiper modules

          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img
              className="list-watch-img-swiperSlide"
              src={"https://cdn.myanimelist.net/images/anime/1286/99889.jpg"}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="list-watch-img-swiperSlide"
              src="https://cdn.myanimelist.net/images/anime/1704/106947.jpg?s=685b7fa652f5b3df29bd20fc2c8cb32e"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="list-watch-img-swiperSlide"
              src="https://cdn.myanimelist.net/images/anime/1722/120098.jpg?s=e43d08ad1b634703dd92ca091619c8f2"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="list-watch-img-swiperSlide"
              src="https://cdn.myanimelist.net/images/anime/9/13134.jpg?s=7374607a6b33488ad66b2924fe97e19a"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="list-watch-img-swiperSlide"
              src="https://cdn.myanimelist.net/images/anime/1435/97291.jpg?s=a620251bfb6c873185a049c0696e8783"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default ListWatch;
