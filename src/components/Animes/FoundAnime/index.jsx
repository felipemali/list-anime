import React, { useContext, useState, useEffect, useRef } from "react";
import { SearchOutlined } from "@ant-design/icons";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { Link } from "react-router-dom";
import { AnimeContext } from "../../../providers/provider";
import { SearchAnime } from "../../../api/animes";
import { routes } from "../../../routes/routes";
import CardAnime from "../../CardAnime";
import "./index.css";
import "./responsive.css";
import { useKey } from "../../../hooks";

const FoundAnime = ({ setVisible }) => {
  const { setAnime } = useContext(AnimeContext);
  const [input, setInput] = useState("");
  const [textInput, setTextInput] = useState([""]);
  const found = SearchAnime(textInput);

  const { path } = routes.infoAnime;

  SwiperCore.use([Autoplay]);

  return (
    <div className="container-found-animee">
      <div className="search">
        <section className="search-title">
          <h1>Buscar por Animes</h1>
        </section>
        <div className="div-search-input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="search-input"
            type="text"
            placeholder="Pesquise no Site"
          />
          <SearchOutlined
            onKeyPress={useKey("Enter", () => setTextInput(input))}
            onClick={() => {
              setTextInput(input);
              setInput("");
            }}
            className="icon-search"
          />
        </div>
        <Link to={routes.inicio.path} onClick={() => setVisible(false)}>
          <button className="button-goBack-home">Sair para Home</button>
        </Link>
        {found.length !== 0 && (
          <>
            <button
              className="button-back"
              onClick={() => {
                setTextInput([]);
              }}
            >
              voltar
            </button>
            <Link to={path}>
              <div className="results-found">
                {found.map((data) => {
                  const { image, title, id } = data;
                  return (
                    <Link
                      key={`foundAnime-${id}`}
                      to={path}
                      onClick={() => {
                        setAnime(data);
                        setVisible(false);
                      }}
                    >
                      <div className="container-card-anime">
                        <CardAnime
                          img={image}
                          title={title}
                          dataAnime={data}
                          id={id}
                        />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </Link>
          </>
        )}

        <h1 className="search-title-result">Resultados encontrados:</h1>
      </div>
    </div>
  );
};
export default FoundAnime;
