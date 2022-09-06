import { Divider } from "antd";
import React, { useContext } from "react";
import { AuthContext } from "../../../providers/auth";

const DetailsAnime = () => {
  const { anime } = useContext(AuthContext);

  const {
    title,
    title_japanese,
    episodes,
    duration,
    rank,
    favorites,
    origin,
    studio,
    fromYear,
    toYear,
  } = anime;

  const dataAnime = [
    {
      title: "titulo",
      data: title,
    },
    {
      title: "Japones",
      data: title_japanese,
    },
    {
      title: "Nº Episódios",
      data: episodes,
    },
    {
      title: "Tempo de Episódio",
      data: duration,
    },
    {
      title: "Ranking dos Usuarios",
      data: rank,
    },
    {
      title: "Favoritos",
      data: favorites,
    },
    {
      title: "Origem",
      data: origin,
    },
    {
      title: "Studio",
      data: studio,
    },
    {
      title: "Início",
      data: fromYear,
    },
    {
      title: "Fim",
      data: toYear,
    },
  ];

  return (
    <>
      <div className="div-details">
        <div className="details">
          <Divider
            orientation="left"
            style={{ color: "#fff", fontSize: "20px", paddingLeft: "5%" }}
          >
            Detalhes
          </Divider>
          {dataAnime.map(({ title, data }) => (
            <ul>
              <li>
                {title}: <span>{data}</span>
              </li>
            </ul>
          ))}
        </div>
        {/* <div className="dont-knowTwo"></div> */}
      </div>
    </>
  );
};
export default DetailsAnime;
