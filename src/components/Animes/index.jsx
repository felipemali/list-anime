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
  SearchOutlined,
  PlayCircleOutlined,
  ClockCircleOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

import { AuthContext } from "../../providers/auth";
import "./index.css";

const Animes = () => {
  const { animesSeasons, setAnime, setValueInputAnimes, valueInputAnimes } =
    useContext(AuthContext);

  const [displayIcon, setDisPlayIcon] = useState("none");

  SwiperCore.use([Autoplay]);

  const filter = animesSeasons.filter((anime) => {
    return anime.title.toLowerCase().includes(valueInputAnimes);
  });

  return (
    <div className="anime">
      <div className="div-title-anime">
        <span className="title-anime">Animes da Temporada</span>
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
          pagination={{ clickable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          {filter.map((dataAnimeSeason) => (
            <SwiperSlide key={dataAnimeSeason.id}>
              <Link to={"/sinopse"}>
                <div className="div-swiperSlide">
                  <div
                    onClick={() => setAnime(dataAnimeSeason)}
                    // onMouseEnter={() => setDisPlayIcon("block")}
                    onMouseLeave={() => setDisPlayIcon("none")}
                    className="swiperSlide-anime"
                    style={{
                      backgroundImage: `url(${dataAnimeSeason.image_large})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      width: "240px",
                      height: "100px",
                      opacity: "0.9",
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
                  <span className="animes-name">{dataAnimeSeason.title}</span>
                  <div className="animes-data">
                    <div>
                      <span>
                        <PlayCircleOutlined className="animes-icon" />{" "}
                        {dataAnimeSeason.type}
                      </span>
                    </div>

                    <div>
                      <span>
                        <ClockCircleOutlined className="animes-icon" />{" "}
                        {dataAnimeSeason.duration}
                      </span>
                    </div>
                    <div>
                      <span>
                        {" "}
                        <CalendarOutlined className="animes-icon" />{" "}
                        {dataAnimeSeason.toYear}
                      </span>
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
export default Animes;
