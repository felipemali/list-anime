import React, { useContext, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { AuthContext } from "../../../providers/auth";
import { Link } from "react-router-dom";
import { StarOutlined } from "@ant-design/icons";
import { Popover } from "antd";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { GetAnimesNextSeason } from "../../../api/animes";
import { routes } from "../../../routes/routes";
import "./index.css";
import CardAnime from "../../CardAnime";

const SeasonUpcoming = () => {
  const { setAnime, favorites } = useContext(AuthContext);
  const [dataAnime, setDataAnime] = useState([]);

  const animesNextSeason = GetAnimesNextSeason();

  SwiperCore.use([Autoplay]);

  const content = (
    <>
      <div>
        <span
          style={{
            display: "flex",
            justifyContent: "end",
            fontSize: "16px",
            color: "gray",
          }}
        >
          😀 {dataAnime.favorites}
        </span>
        <span style={{ fontSize: "16px", color: "#a02c3f " }}>Episodes :</span>{" "}
        <span style={{ color: "gray" }}> {dataAnime.episodes}</span>
        <div
          style={{
            display: "flex",
            marginTop: "2%",
            justifyContent: "space-around",
          }}
        >
          <span style={{ color: "#7dc20b" }}>{dataAnime.type}</span>
          {""} /<span style={{ color: "#7dc20b" }}>{dataAnime.source}</span>
        </div>
      </div>
    </>
  );
  const { path } = routes.infoAnime;

  return (
    <div className="container-season-upcoming">
      <div className="title">
        <h1>Próxima Temporada</h1>
      </div>

      <div className="container-swiper">
        <Swiper
          className="swiper"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={3.9}
          navigation
        >
          {animesNextSeason.map((dataAnimeSeason) => {
            const { id, image, title } = dataAnimeSeason;
            return (
              <SwiperSlide key={`seasonUpcomming_${id}`}>
                <Popover placement="top" content={content} title="Anime">
                  <Link to={path}>
                    {/* <div
                      id="container-swiperSlide"
                      onMouseEnter={() => setDataAnime(dataAnimeSeason)}
                    >
                      <div
                        id="slide"
                        onClick={() => setAnime(dataAnimeSeason)}
                        style={{
                          backgroundImage: `url(${image})`,
                        }}
                      ></div>
                      <span className="title-slide">{title}</span>

                      <div className="description">
                        <button className="button">Detalhes</button>
                      </div>
                      <div className="description">
                        {favorites.find(({ name }) => name === title) && (
                          <StarOutlined className="icon" />
                        )}
                      </div>
                    </div> */}
                    <CardAnime img={image} title={title} />
                  </Link>
                </Popover>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
export default SeasonUpcoming;
