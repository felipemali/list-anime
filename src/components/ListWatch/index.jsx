import React, { useContext, useState } from "react";
import "./index.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import SwiperCore, { Autoplay } from "swiper";

import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import Animes from "../../components/Animes";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

import { AuthContext } from "../../providers/auth";

const ListWatch = () => {
  const { search, setNameAnime, setSearch, animesSeasons } =
    useContext(AuthContext);

  const [input, setInput] = useState("");
  const buttons = [
    "Acao",
    "Artes Marciais",
    "Aventura",
    "Comedia",
    "Drama",
    "Ecchi",
    "Escolar",
    "Esporte",
    "Fantasia",
    "Ficcao Cientifica",
    "Harem",
    "Mecha",
    "Misterio",
    "Psicologico",
    "Romance",
    "Seinen",
    "Shounen",
    "Slice of Life",
    "Sobrenatural",
    "Superpoderes",
  ];

  SwiperCore.use([Autoplay]);

  return (
    <div style={{ background: "#000" }}>
      <div className="search">
        <div className="search-title">
          <Link to={"/"}>
            {" "}
            <CloseOutlined
              className="search-icon-close"
              onClick={() => setSearch("")}
            />
          </Link>

          <span>Buscar por Animes</span>
        </div>
        <div className="div-search-input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="search-input"
            type="text"
            placeholder="Pesquise no Site"
          />
          <SearchOutlined
            onClick={() => {
              setNameAnime(input);
              setInput("");
            }}
            className="search-icon-search"
          />
        </div>
        <div className="search-genres">Genres</div>
        <div className="search-buttons">
          {buttons.map((button) => (
            <button>{button}</button>
          ))}
        </div>
        <div className="search-title-result">Resultados encontrados:</div>
        {search.length !== 0 && (
          <>
            <Link to={"/sinopse"}>
              <div className="search-anime-found">
                <img style={{}} src={search.image} alt="" />
                <span className="search-info-anime-found">
                  <span>{search.title}</span>
                </span>
              </div>
            </Link>
          </>
        )}

        {search.length === 0 && (
          <div className="results-found">
            {animesSeasons.map((data) => (
              <div className="search-animes-found">
                <img style={{}} src={data.image} alt="" />
                <span className="search-info-animes">{data.title}</span>
              </div>
            ))}
          </div>
        )}

        {/* <Swiper
            // install Swiper modules
            className="list-watch-swiper"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={150}
            slidesPerView={3}
            navigation
          >
            {search.map((favorite) => (
              <SwiperSlide>
                <div className="div-swiperSlide-new-episodes">
                  <div
                    // onMouseEnter={() => setDisPlayIcon("block")}
                    // onMouseLeave={() => setDisPlayIcon("none")}
                    className="swiperSlide-anime"
                    style={{
                      backgroundImage: `url(${favorite.image_large})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      width: "240px",
                      height: "150px",

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
                   <span className="new-episodes-name-anime">
                    {favorites.title}
                  </span> *
                </div>
              </SwiperSlide>
            ))}
          </Swiper> */}
      </div>
    </div>
  );
};
export default ListWatch;
