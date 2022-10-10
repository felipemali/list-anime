import React, { useContext, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { StarOutlined } from "@ant-design/icons";
import { Button, Popover } from "antd";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { AuthContext } from "../../../providers/auth";
import { GetAnimesSeasons } from "../../../api/animes";
import { routes } from "../../../routes/routes";
import "./index.css";
import Genres from "../Genres";
import CardAnime from "../../CardAnime";

const AnimesSeason = () => {
  const { setAnime, valueInputAnimes, favorites } = useContext(AuthContext);

  const [dataAnime, setDataAnime] = useState([]);
  const idAnime = "Animes";

  SwiperCore.use([Autoplay]);
  const animesSeason = GetAnimesSeasons();

  const filter = animesSeason.filter((anime) => {
    return anime.title.toLowerCase().includes(valueInputAnimes);
  });
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

  return (
    <div className="container-animes-season">
      <div className="title">
        <h1>Animes da Temporada</h1>
      </div>

      <div className="container-swiper">
        <Swiper
          className="swiper"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={4}
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
                <SwiperSlide key={`${idAnime}_${id}`}>
                  <Popover placement="top" content={content} title="Anime">
                    <Link to={routes.infoAnime.path}>
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
                        >
                          <div className="description">
                            {favorites.find(({ id: idd }) => idd === id) && (
                              <StarOutlined className="icon" />
                            )}
                          </div>
                        </div>
                        <span className="title-slide">{title}</span>

                        <div className="description">
                          <button> Detalhes </button>
                        </div>
                      </div> */}
                      <CardAnime img={image} title={title} />
                    </Link>
                  </Popover>
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
        <Genres />
      </div>
    </div>
  );
};
export default AnimesSeason;
