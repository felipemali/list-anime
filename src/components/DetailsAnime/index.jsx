import { Divider } from "antd";
import React, { useContext } from "react";

import { AuthContext } from "../../providers/auth";

const DetailsAnime = () => {
  const { anime } = useContext(AuthContext);

  return (
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
            Titulo: <span className="color-li"> {anime.title} </span>{" "}
          </li>
          <li>
            Japones: <span className="color-li"> {anime.title_japanese} </span>{" "}
          </li>
          <li>
            Nº Episódios: <span className="color-li">{anime.episodes}</span>{" "}
          </li>
          <li>
            Tempo de Episódio:{" "}
            <span className="color-li">{anime.duration}</span>{" "}
          </li>
          <li>
            Ranking dos Usuarios: <span className="color-li">{anime.rank}</span>{" "}
          </li>
          <li>
            Favoritos: <span className="color-li">{anime.favorites}</span>{" "}
          </li>
          <li>
            Origem: <span className="color-li">{anime.origin}</span>{" "}
          </li>
          <li>
            Studio: <span className="color-li">{anime.studio}</span>{" "}
          </li>
          <li>
            Início:{" "}
            <span className="color-li">{`${anime.fromDay} / ${anime.fromMonth} / ${anime.fromYear}`}</span>{" "}
            {""}
          </li>
          <li>
            Fim:{" "}
            <span className="color-li">
              {" "}
              {`${anime.toDay} / ${anime.toMonth} / ${anime.toYear}`}
            </span>{" "}
          </li>
        </ul>
      </div>
      <div className="dont-knowTwo"></div>
    </div>
  );
};
export default DetailsAnime;
