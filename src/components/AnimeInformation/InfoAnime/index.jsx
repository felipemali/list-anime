import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import { CaretDownOutlined } from "@ant-design/icons";

import { Link } from "react-router-dom";
import { Menu, Dropdown, Image } from "antd";

import DetailsAnime from "../../AnimeInformation/DetailsAnime";
import MenuMobile from "../../Menu/MenuMobile";
import LibraryAnime from "../LibraryAnime";
import CommentList from "../../CommentList";

import { AuthContext } from "../../../providers/auth";
import "./index.css";

const InfoAnime = () => {
  const {
    anime,
    character,
    animes,
    watching,
    complete,
    drop,
    setSearch,
    setNameAnime,
  } = useContext(AuthContext);

  const [episodes, setEpisodes] = useState([]);
  const imageError = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    if (anime.id) {
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
    }
  }, [anime !== undefined]);

  console.log(episodes);

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
            <button
              onClick={() => {
                setSearch("");
                setNameAnime("");
              }}
              className="button-out"
            >
              Voltar
            </button>
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
          {episodes.length !== 0 && (
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
          )}
          {episodes.length === 0 && (
            <div className="episodes">
              {imageError?.map((img) => (
                <div className="img-episodes">
                  <Image
                    width={130}
                    height={130}
                    src="error"
                    fallback="data:image/jpeg;base64,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"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <LibraryAnime />
        <DetailsAnime />
        <CommentList />
      </div>
    </>
  );
};
export default InfoAnime;
