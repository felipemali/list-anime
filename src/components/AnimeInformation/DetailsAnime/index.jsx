import { Divider } from "antd";
import React, { useContext } from "react";
import { AnimeContext } from "../../../providers/provider";

const DetailsAnime = () => {
  const { anime } = useContext(AnimeContext);

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
      id: "title1",
    },
    {
      title: "Japones",
      data: title_japanese,
      id: "title2",
    },
    {
      title: "Nº Episódios",
      data: episodes,
      id: "title3",
    },
    {
      title: "Tempo de Episódio",
      data: duration,
      id: "title4",
    },
    {
      title: "Ranking dos Usuarios",
      data: rank,
      id: "title5",
    },
    {
      title: "Favoritos",
      data: favorites,
      id: "title6",
    },
    {
      title: "Origem",
      data: origin,
      id: "title7",
    },
    {
      title: "Studio",
      data: studio,
      id: "title8",
    },
    {
      title: "Início",
      data: fromYear,
      id: "title9",
    },
    {
      title: "Fim",
      data: toYear,
      id: "title10",
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
          {dataAnime.map(({ title, data, id }) => (
            <ul key={id}>
              <li>
                {title}: <span>{data}</span>
              </li>
            </ul>
          ))}
        </div>
        {/* <div className="dont-knowTwo">aaaaaaaaaa</div> */}
      </div>
    </>
  );
};
export default DetailsAnime;
