import React, { useEffect, useState } from "react";
import "./index.css";
import { Divider } from "antd";
import {
  PlusOutlined,
  CheckCircleOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import { StarOutlined } from "@ant-design/icons";
import { Radio } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import { notification, Space } from "antd";

const InfoAnime = ({ imgs, nameAnime }) => {
  const [episodes, setEpisodes] = useState([]);
  const [colorStar, setColorStar] = useState("");

  useEffect(() => {
    axios
      .get(`https://api.jikan.moe/v4/anime/${imgs[0]?.mal_id}/videos`)
      .then((response) => {
        const result = response.data.data.episodes.map((ep) => {
          return {
            episodio: ep.mal_id,
            images: ep.images.jpg.image_url,
          };
        });
        setEpisodes(result.reverse());
      });
  }, [imgs]);
  // console.log(episodes);

  const star = () => {
    if (colorStar.color == "gold") {
      setColorStar({ color: "", shadow: "" });
      openNotification(
        "warning",
        {
          messagee: `${nameAnime} retirado da lista`,
          descriptionn: "Confira a lista de Favoritos na página Inicial",
        },
        "top"
      );
    } else {
      setColorStar({ color: "gold", shadow: "1px 0.2px 5px 1px gold" });

      openNotification(
        "success",
        {
          messagee: `${nameAnime}  Adicionado na lista `,
          descriptionn: "Confira a lista de Favoritos na página Inicial",
        },
        "top"
      );
    }
  };

  const openNotification = (type, obj, e) => {
    notification[type]({
      message: `${obj.messagee}`,
      description: `${obj.descriptionn} `,
      e,
    });
  };

  return (
    <>
      <div
        className="banner"
        style={{
          // border: "1px solid gold",
          marginTop: "1%",
          backgroundImage: `url(${imgs[0]?.trailer.images.maximum_image_url})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "60vh",
        }}
      ></div>
      <div className="info-anime">
        <div className="div-info-anime-img">
          <img
            className="info-champ-img"
            src={imgs[0]?.images.jpg.image_url}
            alt=""
          />
          <span className="title-favorite">Adicionar a favoritos</span>
          <Space>
            <StarOutlined
              onClick={() => {
                star();
              }}
              style={{
                color: `${colorStar.color}`,
                boxShadow: `${colorStar.shadow}`,
              }}
              className="icon-star"
            />
          </Space>
        </div>
        <Link to={"/list"}>
          <button className="button-out">Voltar</button>
        </Link>
        <div className="info-anime-synopse">
          <span className="title-synopse">Sinopse</span>
          <span className="text-synopsis">{imgs[0]?.synopsis}</span>
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
              className="div-img-episodes"
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
      <div className="library">
        <div className="library-buttons">
          <Divider style={{ color: "#fff" }}>Biblioteca</Divider>
          <button className="library-button-watch">
            <PlusOutlined style={{ paddingRight: "0.7em" }} />
            Assistir
          </button>
          <button className="library-button-favorite">
            <CheckCircleOutlined style={{ paddingRight: "0.4em" }} />
            Favoritar
          </button>
          <button className="library-button-watched">
            <CheckOutlined style={{ paddingRight: "0.4em" }} />
            Assistido
          </button>
        </div>
        <div className="div-info-anime-trailer">
          <iframe
            className="info-anime-trailer"
            src={imgs[0]?.trailer.embed_url}
          ></iframe>
        </div>
      </div>
      <div className="div-details">
        <div className="details">
          <Divider
            orientation="left"
            style={{ color: "#fff", fontSize: "20px", paddingLeft: "5%" }}
          >
            Detalhes
          </Divider>
          <ul>
            <li>
              Titulo: <span className="color-li"> {imgs[0]?.title} </span>{" "}
            </li>
            <li>
              Japones:{" "}
              <span className="color-li"> {imgs[0]?.title_japanese} </span>{" "}
            </li>
            <li>
              Nº Episódios:{" "}
              <span className="color-li">{imgs[0]?.episodes}</span>{" "}
            </li>
            <li>
              Tempo de Episódio:{" "}
              <span className="color-li">{imgs[0]?.duration}</span>{" "}
            </li>
            <li>
              Ranking dos Usuarios:{" "}
              <span className="color-li">{imgs[0]?.rank}</span>{" "}
            </li>
            <li>
              Favoritos: <span className="color-li">{imgs[0]?.favorites}</span>{" "}
            </li>
            <li>
              Origem:{" "}
              <span className="color-li">{imgs[0]?.broadcast.timezone}</span>{" "}
            </li>
            <li>
              Studio:{" "}
              <span className="color-li">{imgs[0]?.studios[0].name}</span>{" "}
            </li>
            <li>
              Início:{" "}
              <span className="color-li">{`${imgs[0]?.aired.prop.from.day} / ${imgs[0]?.aired.prop.from.month} / ${imgs[0]?.aired.prop.from.year}`}</span>{" "}
              {""}
            </li>
            <li>
              Fim:{" "}
              <span className="color-li">
                {" "}
                {`${imgs[0]?.aired.prop.to.day} / ${imgs[0]?.aired.prop.to.month} / ${imgs[0]?.aired.prop.to.year}`}
              </span>{" "}
            </li>
          </ul>
        </div>
        <div className="dont-knowTwo"></div>
      </div>
    </>
  );
};
export default InfoAnime;
