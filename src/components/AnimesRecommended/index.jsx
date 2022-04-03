import React, { useContext, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import {
  QqOutlined,
  PlayCircleOutlined,
  ClockCircleOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

import { AuthContext } from "../../providers/auth";
import "./index.css";

const AnimesRecommended = () => {
  const { animesRecommended, setNameAnime } = useContext(AuthContext);

  const [displayIcon, setDisPlayIcon] = useState("none");

  SwiperCore.use([Autoplay]);

  //   const filter = animesSeasons.filter((anime) => {
  //     return anime.title.toLowerCase().includes(valueInputAnimes);
  //   });

  return (
    <div className="anime-recommended">
      <div className="div-title-anime-recommended">
        <span className="title-anime">Animes Recomendados</span>
      </div>
      {/* <div className="div-animes-input">
        <SearchOutlined className="icon-search-sx" />
        <input
          value={valueInputAnimes}
          onChange={(e) => setValueInputAnimes(e.target.value)}
          className="animes-input"
          type="text"
          placeholder="Buscar..."
        />
      </div> */}

      <div className="swiper-anime">
        <Swiper
          className="swiper"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={2}
          slidesPerView={4}
          navigation
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          {animesRecommended.map((recommended) => (
            <SwiperSlide>
              <Link to={"/sinopse"}>
                <div className="div-swiperSlide-animes-recommended">
                  <div
                    onClick={() => setNameAnime(recommended.title)}
                    // onMouseEnter={() => setDisPlayIcon("block")}
                    onMouseLeave={() => setDisPlayIcon("none")}
                    className="swiperSlide-anime"
                    style={{
                      backgroundImage: `url(${recommended.image_large})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      width: "240px",
                      height: "100px",

                      // border: "15px outset #344653",
                    }}
                  >
                    <PlayCircleOutlined
                      style={{
                        color: "red",
                        fontSize: "100px",
                        paddingTop: "1em",
                        display: `${displayIcon}`,
                      }}
                    />
                  </div>
                  <span className="animes-name">{recommended.title}</span>
                  <div className="animes-data">
                    <div className="div-descriptions-anime">
                      <QqOutlined className="animes-icon" />{" "}
                      <span>{recommended.username}</span>
                    </div>

                    <div className="div-descriptions-anime">
                      <CalendarOutlined className="animes-icon" />{" "}
                      <span>{recommended.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default AnimesRecommended;