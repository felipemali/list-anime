import React, { useContext, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/auth";
import { GetAnimesSeasons, SearchAnime } from "../../../api/animes";
import "./index.css";
import { routes } from "../../../routes/routes";

const FoundAnime = () => {
  const { search, setNameAnime, setSearch, setAnime, onClose } =
    useContext(AuthContext);

  const [input, setInput] = useState("");
  const [teste, setTeste] = useState([]);

  const animesSeason = GetAnimesSeasons();

  const found = SearchAnime(teste);
  // console.log(found);

  // const animeFound = useSearchAnime(teste);
  // console.log(animeFound);
  const { path } = routes.infoAnime;

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
              setTeste(input);
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
            <Link to={path}>
              <div className="search-anime-found" onClick={onClose}>
                <img src={found.image} alt="" />
                <span className="search-info-anime-found">
                  <span>{found.title}</span>
                </span>
              </div>
            </Link>
          </>
        )}

        {search.length === 0 && (
          <div className="results-found">
            {animesSeason.map((data) => {
              const { image, title } = data;
              return (
                <Link
                  to={path}
                  onClick={() => {
                    setAnime(data);
                    onClose();
                  }}
                >
                  <div className="search-animes-found">
                    <img src={image} alt="" />
                    <span className="search-info-animes">{title}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
export default FoundAnime;
