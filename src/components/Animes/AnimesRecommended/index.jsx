import React, { useContext, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { PlayCircleOutlined, StarOutlined } from "@ant-design/icons";
import { Popover } from "antd";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { AuthContext } from "../../../providers/auth";
import { GetAnimesRecommended } from "../../../api/animes";
import { routes } from "../../../routes/routes";
import "./index.css";
const AnimesRecommended = () => {
  const { setNameAnime, favorites } = useContext(AuthContext);

  const [dataAnime, setDataAnime] = useState([]);

  const animesRecommended = GetAnimesRecommended();
  console.log(animesRecommended[0]);

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
    <div id="container-animes-recommended">
      <div id="title">
        <span>Animes Recomendados</span>
      </div>

      <div id="container-swiper">
        <Swiper
          style={{ heigth: "400px" }}
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={3.9}
          navigation
        >
          {animesRecommended.map((recomendaded) => {
            const { title, image, id } = recomendaded;
            return (
              <div key={`animesRecommended-${id}`}>
                <SwiperSlide>
                  <Popover placement="top" content={content} title="Anime">
                    <Link to={path}>
                      <div
                        id="container-swiperSlide"
                        onMouseEnter={() => setDataAnime(recomendaded)}
                      >
                        <div
                          id="slide"
                          onClick={() => setNameAnime(title)}
                          style={{
                            backgroundImage: `url(${image})`,
                          }}
                        ></div>
                        <div className="description">
                          {favorites.find(
                            (favorite) => favorite.name === title
                          ) && (
                            <StarOutlined
                              style={{
                                color: "gold",
                                fontSize: "40px",
                                display: "flex",
                                justifyContent: "end",
                              }}
                            />
                          )}
                        </div>
                        <span className="title-slide">{title}</span>

                        <div className="description">
                          <button> Detalhes </button>
                        </div>
                      </div>
                    </Link>
                  </Popover>
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
export default AnimesRecommended;
