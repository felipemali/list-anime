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

const NewEpisodes = () => {
  const { newEpisodes, valueInputAnimes, setValueInputAnimes } =
    useContext(AuthContext);

  const [dataAnime, setDataAnime] = useState([]);

  SwiperCore.use([Autoplay]);

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
    <div className="anime">
      <div className="div-title-new-episodes">
        <span className="title-anime">Novos Episódios</span>
      </div>

      <div className="swiper-anime">
        <Swiper
          className="swiper-new-episodes"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={4.1}
          navigation
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
        >
          {filter.map((newEpisodes) => (
            <>
              <SwiperSlide className="slide" key={newEpisodes.id}>
                <Popover placement="top" content={content} title="Anime">
                  <div
                    className="div-swiperSlide-new-episodes"
                    onMouseEnter={() => setDataAnime(newEpisodes)}
                  >
                    <div
                      className="swiperSlide-anime"
                      style={{
                        backgroundImage: `url(${newEpisodes.image})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        width: "200px",
                        height: "100px",
                      }}
                    ></div>
                    <span className="new-episodes-name-anime">
                      {newEpisodes.title}
                    </span>
                    <button className="button-details">Detalhes</button>
                  </div>
                </Popover>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default NewEpisodes;
