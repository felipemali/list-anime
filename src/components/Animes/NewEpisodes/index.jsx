import React, { useContext } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { AnimeContext } from "../../../providers/provider";
import { GetNewEpisodes } from "../../../api/newEpisodes";
import CardAnime from "../../CardAnime";
import "./index.css";
import "./responsive.css";

const NewEpisodes = () => {
  const { valueInputAnimes } = useContext(AnimeContext);
  SwiperCore.use([Autoplay]);
  const newEpisodes = GetNewEpisodes();
  const filter = newEpisodes.filter((anime) => {
    return anime.title.toLowerCase().includes(valueInputAnimes);
  });
  return (
    <div className="container-full-width">
      <div className="new-episodes">
        <section>
          <h1>Novos Episódios</h1>
        </section>
        <div className="swiper-anime">
          <Swiper
            className="swiper-new-episodes"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={
              window.innerWidth <= 900
                ? 150
                : 0 || window.innerWidth <= 600
                ? 200
                : 0
            }
            slidesPerView={window.innerWidth <= 768 ? 2.6 : 4}
            pagination={window.innerWidth <= 1526 ? true : false}
            navigation
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
          >
            {filter.map((newEpisodes) => {
              const { id, image, small_image, title } = newEpisodes;
              return (
                <SwiperSlide className="swiperSlide" key={`newEpisodes-${id}`}>
                  <CardAnime
                    img={image}
                    title={title}
                    id={id}
                    dataAnime={newEpisodes}
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
export default NewEpisodes;
