import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { GetAnimesRecommended } from "../../../api/animes";
import CardAnime from "../../CardAnime";
import character1 from "../../../assets/img/character1.png";
import person from "../../../assets/img/character.png";
import "./index.css";
const AnimesRecommended = () => {
  const animesRecommended = GetAnimesRecommended();
  SwiperCore.use([Autoplay]);
  return (
    <div className="container-animes-recommended">
      <div className="character-home">
        <img src={character1} alt="" />
      </div>
      <div className="swiper-container-animes-recommended">
        <h1>Recomendações para Você</h1>
        <div className="container-swiper">
          <Swiper
            className="swiper"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={window.innerWidth <= 900 ? 150 : 0}
            slidesPerView={window.innerWidth <= 768 ? 2.5 : 4}
            // pagination={window.innerWidth <= 1526 ? true : false}
            navigation
          >
            {animesRecommended.map((recomendaded) => {
              const { title, image, id } = recomendaded;
              return (
                <div key={`animesRecommended-${id}`}>
                  <SwiperSlide className="swiperSlide">
                    <CardAnime
                      img={image}
                      title={title}
                      dataAnime={recomendaded}
                      id={id}
                    />
                  </SwiperSlide>
                </div>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default AnimesRecommended;
