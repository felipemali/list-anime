import React, { useContext } from "react";
import { AuthContext } from "../../../providers/auth";
import { CaretRightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./index.css";

const TopAnimes = () => {
  const { topAnimes, setAnime, setNameAnime } = useContext(AuthContext);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="position-anime">
      <h2>TOP 10 ANIMES</h2>

      <div>
        <ul style={{ minWidth: "80px" }}>
          {arr.map((position) => (
            <li># {position}</li>
          ))}
        </ul>
      </div>
      <div className="container-top-animes">
        {topAnimes.slice(0, 10).map((anime) => (
          <div>
            <Link to={"/sinopse"}>
              <div className="top-animes" onClick={() => setAnime(anime)}>
                <div>
                  <img src={anime.small_image} alt="" />
                  <span>{anime.title}</span>
                </div>
                <span style={{ margin: "auto 0px" }}>
                  😀 popularidade:
                  <span className="popularity">{anime.popularity}</span>
                </span>
                <span style={{ margin: "auto 0px" }}>
                  Type:
                  <span style={{ color: "red" }}>{anime.type}</span>
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopAnimes;
