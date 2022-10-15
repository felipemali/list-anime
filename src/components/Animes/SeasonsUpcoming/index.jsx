import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { GetAnimesNextSeason } from "../../../api/animes";
import CardAnime from "../../CardAnime";
import "./index.css";
import person from "../../../assets/img/character.png";

const SeasonUpcoming = () => {
  const animesNextSeason = GetAnimesNextSeason();
  SwiperCore.use([Autoplay]);
  return (
    <div className="r">
      <div className="character-home ">
        <img src={person} alt="" />
      </div>
      <div className="container-season-upcoming">
        <h1>Próxima Temporada</h1>
        <div className="container-swiper">
          <Swiper
            className="swiper"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={window.innerWidth <= 900 ? 150 : 0}
            slidesPerView={window.innerWidth <= 768 ? 2.5 : 4}
            pagination={window.innerWidth <= 1526 ? true : false}
            navigation
          >
            {animesNextSeason.map((dataAnimeSeason) => {
              const { id, image, title } = dataAnimeSeason;
              return (
                <SwiperSlide
                  className="swiperSlide"
                  key={`seasonUpcomming_${id}`}
                >
                  <CardAnime
                    img={image}
                    title={title}
                    id={id}
                    dataAnime={dataAnimeSeason}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default SeasonUpcoming;
