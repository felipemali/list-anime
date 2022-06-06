import React, { useContext, useState } from "react";

import { SearchOutlined } from "@ant-design/icons";

import SwiperCore, { Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";

import { Link } from "react-router-dom";

import { AuthContext } from "../../../providers/auth";
import "./index.css";

const ListWatch = () => {
  const { search, setNameAnime, setSearch, setAnime, animesSeasons, onClose } =
    useContext(AuthContext);

  const [input, setInput] = useState("");

  SwiperCore.use([Autoplay]);

  return (
    <div>
      <div className="search">
        <div className="search-title">
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
        <button
          style={{ marginTop: "3%", cursor: "pointer" }}
          onClick={() => {
            setSearch("");
            setNameAnime("");
          }}
        >
          voltar
        </button>

        <div className="search-title-result">Resultados encontrados:</div>
        {search.length !== 0 && (
          <>
            <Link to={"/sinopse"}>
              <div className="search-anime-found" onClick={onClose}>
                <img src={search.image} alt="" />
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
              <Link
                to={"/sinopse"}
                onClick={() => {
                  setAnime(data);
                  onClose();
                }}
              >
                <div className="search-animes-found">
                  <img src={data.image} alt="" />
                  <span className="search-info-animes">{data.title}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default ListWatch;
