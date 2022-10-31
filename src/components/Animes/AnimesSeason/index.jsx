import React, { useContext } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { AnimeContext } from "../../../providers/provider";
import { GetAnimesSeasons } from "../../../api/animes";
import { routes } from "../../../routes/routes";
import Genres from "../Genres";
import CardAnime from "../../CardAnime";
import "./index.css";
import "./responsive.css";

const AnimesSeason = () => {
  const { valueInputAnimes } = useContext(AnimeContext);
  SwiperCore.use([Autoplay]);
  const animesSeason = GetAnimesSeasons();
  const filter = animesSeason.filter((anime) => {
    return anime.title.toLowerCase().includes(valueInputAnimes);
  });
  return (
    <div className="container-full-width">
      <div className="container-animes-season">
        <section>
          <h1>Animes da Temporada</h1>
        </section>

        <div className="border-title"></div>
        <div className="container-swiper">
          <Swiper
            className="swiper"
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={window.innerWidth <= 900 ? 150 : 0}
            slidesPerView={window.innerWidth <= 768 ? 2.5 : 4}
            pagination={window.innerWidth <= 1526 ? true : false}
            navigation
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
          >
            {filter.map((dataAnimeSeason) => {
              const { image, title, id } = dataAnimeSeason;
              return (
                <div key={`animeSeason-${id}`}>
                  <SwiperSlide className="swiperSlide" key={`animes_${id}`}>
                    <Link to={routes.infoAnime.path}>
                      <CardAnime
                        img={image}
                        title={title}
                        dataAnime={dataAnimeSeason}
                        id={id}
                      />
                    </Link>
                  </SwiperSlide>
                </div>
              );
            })}
          </Swiper>
          <Genres />
        </div>
      </div>
    </div>
  );
};
export default AnimesSeason;
