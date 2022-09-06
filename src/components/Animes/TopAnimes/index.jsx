import React, { useContext } from "react";
import { AuthContext } from "../../../providers/auth";
import { CaretRightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./index.css";
import { GetTopAnimes } from "../../../api/animes";
import { routes } from "../../../routes/routes";

const TopAnimes = () => {
  const { setAnime, setNameAnime } = useContext(AuthContext);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const topAnimes = GetTopAnimes();
  const { path } = routes.infoAnime;

  return (
    <>
      <h2 className="top-animes-title">TOP 10 ANIMES</h2>
      <div className="position-anime">
        <div>
          <ul style={{ minWidth: "80px" }}>
            {arr.map((position) => (
              <li># {position}</li>
            ))}
          </ul>
        </div>
        <div className="container-top-animes">
          {topAnimes.slice(0, 10).map((anime) => {
            const { small_image, title, popularity, type } = anime;
            return (
              <div>
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
