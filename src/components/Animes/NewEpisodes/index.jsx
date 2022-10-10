import React, { useContext, useState } from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";

import { Popover } from "antd";

import { AuthContext } from "../../../providers/auth";
import "./index.css";
import { GetNewEpisodes } from "../../../api/newEpisodes";
import CardAnime from "../../CardAnime";

const NewEpisodes = () => {
  const { valueInputAnimes, setValueInputAnimes } = useContext(AuthContext);

  const [dataAnime, setDataAnime] = useState([]);

  SwiperCore.use([Autoplay]);
  const newEpisodes = GetNewEpisodes();

  const filter = newEpisodes.filter((anime) => {
    return anime.title.toLowerCase().includes(valueInputAnimes);
  });

  const content = (
    <div>
      <p style={{ fontSize: "16px" }}>{dataAnime.title}</p>
      <p style={{ fontSize: "16px", color: "#a02c3f " }}>
        {dataAnime.episodes}
      </p>
    </div>
  );

  return (
    <div className="new-episodes">
      <h1>Novos Episódios</h1>

      <div className="swiper-anime">
        <Swiper
          className="swiper-new-episodes"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={window.innerWidth <= 900 ? 150 : 0}
          slidesPerView={window.innerWidth <= 600 ? 2.5 : 4}
          navigation
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
        >
          {filter.map((newEpisodes) => {
            const { id, image, small_image, title } = newEpisodes;
            return (
              <SwiperSlide className="slide" key={`newEpisodes-${id}`}>
                <Popover placement="top" content={content} title="Anime">
                  <CardAnime img={image} title={title} />
                </Popover>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
export default NewEpisodes;
