import React, { useContext } from "react";
import { AuthContext } from "../../../providers/provider";
import { Link } from "react-router-dom";
import "./index.css";
import "./responsive.css";
import { GetTopAnimes } from "../../../api/animes";
import { routes } from "../../../routes/routes";

const TopAnimes = () => {
  const { setAnime, setNameAnime } = useContext(AuthContext);
  const arr = [
    {
      position: 1,
      id: "1",
    },
    {
      position: 2,
      id: "2",
    },
    {
      position: 3,
      id: "3",
    },
    {
      position: 4,
      id: "4",
    },
    {
      position: 5,
      id: "5",
    },
    {
      position: 6,
      id: "6",
    },
    {
      position: 7,
      id: "7",
    },
    {
      position: 8,
      id: "8",
    },
    {
      position: 9,
      id: "9",
    },
    {
      position: 10,
      id: "10",
    },
  ];

  const topAnimes = GetTopAnimes();
  const { path } = routes.infoAnime;

  return (
    <>
      <h2 className="top-animes-title">Top 10 Animes</h2>
      <div className="position-anime">
        <div>
          <ul style={{ minWidth: "80px" }}>
            {arr.map((position) => {
              const { positionn, id } = position;
              return <li key={id}># {positionn}</li>;
            })}
          </ul>
        </div>
        <div className="container-top-animes">
          {topAnimes.slice(0, 10).map((anime) => {
            const { small_image, title, popularity, type, id } = anime;
            return (
              <div key={`topAnimes-${id}`}>
                <Link to={path}>
                  <div className="top-animes" onClick={() => setAnime(anime)}>
                    <div className="container-top-animes-details">
                      <img src={small_image} alt="" />
                      <span>{title} </span>
                    </div>
                    <span style={{ margin: "auto 0px" }}>
                      popularidade:
                      <span className="popularity">{popularity}</span>
                    </span>
                    <span style={{ margin: "auto 0px" }}>
                      Type:
                      <span style={{ color: "red" }}>{type}</span>
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TopAnimes;
