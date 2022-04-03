import React, { useContext, useEffect, useState } from "react";
import {
  CaretDownOutlined,
  DownOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import axios from "axios";
import { notification, Space } from "antd";
import DetailsAnime from "../DetailsAnime";
import LibraryAnime from "../LibraryAnime";
import { Menu, Dropdown } from "antd";
import "./index.css";

import { AuthContext } from "../../providers/auth";
import MenuMobile from "../MenuMobile";

const InfoAnime = () => {
  const {
    anime,
    character,
    animes,
    favorites,
    colorStar,
    watching,
    complete,
    drop,
  } = useContext(AuthContext);

  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.jikan.moe/v4/anime/${anime.id}/videos`)
      .then((response) => {
        const result = response.data.data.episodes?.map((ep) => {
          return {
            episodio: ep.mal_id,
            images: ep.images.jpg.image_url,
          };
        });
        setEpisodes(result.reverse());
      });
  }, [anime !== undefined]);

  const options = (
    <Menu className="options-background">
      <Menu.Item className="options-link-buttons">
        <a
          onClick={() =>
            watching({
              name: anime.title,
              img: anime.image_large,
              id: anime.id,
            })
          }
          style={{
            color: "black",
            fontSize: "18px",
            paddingLeft: "10%",
            opacity: "0.7",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Assistindo
        </a>
      </Menu.Item>
      <Menu.Item className="options-link-buttons">
        <a
          onClick={() =>
            complete({
              name: anime.title,
              img: anime.image_large,
              id: anime.id,
            })
          }
          style={{
            color: "black",
            fontSize: "18px",
            paddingLeft: "10%",
            opacity: "0.7",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Completo
        </a>
      </Menu.Item>
      <Menu.Item className="options-link-buttons">
        <a
          onClick={() =>
            drop({
              name: anime.title,
              img: anime.image_large,
              id: anime.id,
            })
          }
          style={{
            color: "black",
            fontSize: "18px",
            paddingLeft: "10%",
            opacity: "0.7",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Dropado
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <MenuMobile />
      <div className="div-info-anime">
        <div
          className="banner"
          style={{
            backgroundImage: `url(${anime?.banner})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "60vh",
          }}
        ></div>
        <div className="info-anime">
          <div className="div-info-anime-img">
            <img className="info-champ-img" src={anime?.image} alt="" />
            {/* <span className="title-favorite">Adicionar a favoritos</span> */}
            <div className="butons-options">
              <button
                onClick={() => {
                  animes({
                    name: anime.title,
                    img: anime.image_large,
                    id: anime.id,
                  });
                }}
                className="button-favorite"
              >
                Favoritar
              </button>

              <div className="buttonsDrop-options">
                <Dropdown overlay={options}>
                  <a
                    className="ant-dropdown-link menu-links"
                    onClick={(e) => e.preventDefault()}
                  >
                    <CaretDownOutlined className="icon-options" />
                  </a>
                </Dropdown>
              </div>
            </div>
          </div>
          <Link to={"/"}>
            <button className="button-out">Voltar</button>
          </Link>
          <div className="info-anime-synopse">
            <span className="title-character">Personagens</span>
            <div className="div-character">
              {character?.map((data) => (
                <div style={{ display: "block", marginBottom: "3%" }}>
                  <img className="character" src={data.character} alt="" />
                  <span className="name-character">{data.name}</span>
                </div>
              ))}
            </div>
            <span className="title-synopse">Sinopse</span>
            <span className="text-synopsis">{anime?.synopsis}</span>
          </div>
        </div>
        <div className="buttons-and-trailer">
          <div className="info-anime-buttons">
            <button>Animação</button>
            <button className="button">Comédia</button>
            <button>Sci-Fi & Fantasy</button>
          </div>
          <div className="episodes">
            {episodes?.map((img) => (
              <div
                className="img-episodes"
                style={{
                  backgroundImage: `url(${img.images})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <button className="buttons-episode">{img.episodio}</button>
              </div>
            ))}
          </div>
        </div>
        <LibraryAnime anime={anime} />
        <DetailsAnime anime={anime} />
      </div>
    </>
  );
};
export default InfoAnime;
