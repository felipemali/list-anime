import React, { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { GetAnimesRecommended } from "../../../api/animes";
import CardAnime from "../../CardAnime";
import person from "../../../assets/img/character1.png";
import "./index.css";
import "./responsive.css";
import axios from "axios";
const AnimesRecommended = () => {
  const animesRecommended = GetAnimesRecommended();

  SwiperCore.use([Autoplay]);

  return (
    <div className="container-full-width">
      <div className="container-animes-recommended">
        <div className="character-home">
          <img src={person} alt="imagem de uma personagem de anime" />
        </div>
        <div className="swiper-container-animes-recommended">
          <section>
            <h1>Recomendações para Você</h1>
          </section>
          <div className="container-swiper">
            <Swiper
              className="swiper"
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={window.innerWidth <= 900 ? 150 : 0}
              slidesPerView={window.innerWidth <= 768 ? 2.5 : 4}
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
    </div>
  );
};
export default AnimesRecommended;
