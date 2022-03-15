import React from "react";
import "./index.css";
import { Divider } from "antd";
import {
  PlusOutlined,
  CheckCircleOutlined,
  CheckOutlined,
} from "@ant-design/icons";

const InfoAnime = ({ imgs }) => {
  return (
    <>
      <div className="info-anime">
        <div className="div-info-anime-img">
          <img
            className="info-champ-img"
            src={imgs[0]?.images.jpg.image_url}
            alt=""
          />
        </div>
        <div className="info-anime-synopse">
          <span className="title-synopse">Synopse:</span>
          <span className="text-synopsis">{imgs[0]?.synopsis}</span>
        </div>
      </div>
      <div className="buttons-and-trailer">
        <div className="info-anime-buttons">
          <button>Animação</button>
          <button className="button">Comédia</button>
          <button>Sci-Fi & Fantasy</button>
        </div>
        <div className="div-info-anime-trailer">
          <iframe
            className="info-anime-trailer"
            src={imgs[0]?.trailer.embed_url}
            autoplay
            frameborder="0"
          ></iframe>
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
        <div className="dont-know"></div>
      </div>
      <div className="div-details">
        <div className="details">
          <Divider
            orientation="left"
            style={{ color: "#fff", fontSize: "18px" }}
          >
            Detalhes
          </Divider>
          <ul>
            <li>Titulo:</li>
            <li>Nº Episódios:</li>
            <li>Tempo de Episódio:</li>
            <li>Ranking dos Usuarios:</li>
            <li>Favoritos:</li>
            <li>Origem:</li>
            <li>Studio:</li>
          </ul>
        </div>
        <div className="dont-knowTwo"></div>
      </div>
    </>
  );
};
export default InfoAnime;
