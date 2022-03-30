import React, { useContext, useState } from "react";
import "./index.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import SwiperCore, { Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

import { AuthContext } from "../../providers/auth";

const ListWatch = () => {
  const { imgs, favorites, teste } = useContext(AuthContext);

  SwiperCore.use([Autoplay]);

  return (
    <>
      <div className="list-watch">
        <div className="title-list-watch">
          <span>Lista De Favoritos</span>
        </div>

        <div className="list-watch-carousel">
          <Swiper
            // install Swiper modules

            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={150}
            slidesPerView={3}
            navigation
          >
            {favorites.map((favorite) => (
              <SwiperSlide>
                <Link to="/sinopse">
                  <div
                    className="list-watch-img-swiperSlide"
                    style={{
                      backgroundImage: `url(${favorite.img})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      width: "450px",
                      height: "300px",
                      border: "15px outset #705669",
                    }}
                  >
                    <button className="list-watch-buttons">
                      {imgs[0]?.episodes}
                    </button>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};
export default ListWatch;
