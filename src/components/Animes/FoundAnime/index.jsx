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
import { routes } from "../../../routes/routes";
import CardAnime from "../../CardAnime";
import { Button } from "antd";
import "./index.css";

const FoundAnime = ({ setVisible }) => {
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
    <div className="container-found-animee">
      <div className="search">
        <div className="search-title">
          <h1>Buscar por Animes</h1>
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
        {search.length !== 0 && (
          <button
            style={{ marginTop: "3%", cursor: "pointer" }}
            onClick={() => {
              setSearch("");
              setNameAnime("");
            }}
          >
            voltar
          </button>
        )}

        <Link to={routes.inicio.path} onClick={() => setVisible(false)}>
          <Button className="button-goBack-home">Sair para Home</Button>
        </Link>

        <h1 className="search-title-result">Resultados encontrados:</h1>
        {search.length !== 0 && (
          <>
            <Link to={path}>
              <CardAnime
                onClick={() => setVisible(false)}
                img={found.image}
                title={found.title}
                dataAnime={found}
                id={found.id}
              />
            </Link>
          </>
        )}

        {search.length === 0 && (
          <Link to={path}>
            <div className="results-found">
              {animesSeason.map((data) => {
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
        )}
      </div>
    </div>
  );
};
export default FoundAnime;
