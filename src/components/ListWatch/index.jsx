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
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div
              className="list-watch-img-swiperSlide"
              style={{
                backgroundImage: `url(${imgs[0]?.images.jpg.image_url})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <button className="list-watch-buttons">
                {imgs[0]?.episodes}
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="list-watch-img-swiperSlide"
              style={{
                backgroundImage: `url(${imgs[1]?.images.jpg.image_url})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <button className="list-watch-buttons">
                {imgs[0]?.episodes}
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="list-watch-img-swiperSlide"
              style={{
                backgroundImage: `url(${imgs[2]?.images.jpg.image_url})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <button className="list-watch-buttons">
                {imgs[0]?.episodes}
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="list-watch-img-swiperSlide"
              style={{
                backgroundImage: `url(${imgs[4]?.images.jpg.image_url})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <button className="list-watch-buttons">
                {imgs[0]?.episodes}
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default ListWatch;
