import { StarOutlined } from "@ant-design/icons";
import { Popover } from "antd";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/provider";
import { routes } from "../../routes/routes";
import "./index.css";
import "./responsive.css";

const CardAnime = ({ img, title, dataAnime, id }) => {
  const [infoAnime, setInfoAnime] = useState([]);
  const { setAnime, favorites } = useContext(AuthContext);

  const content = (
    <>
      <div>
        <span
          style={{
            display: "flex",
            justifyContent: "end",
            fontSize: "16px",
            color: "gray",
          }}
        >
          😀 {infoAnime?.favorites}
        </span>
        <span style={{ fontSize: "16px", color: "#a02c3f " }}>Episodes :</span>{" "}
        <span style={{ color: "gray" }}> {infoAnime?.episodes}</span>
        <div
          style={{
            display: "flex",
            marginTop: "2%",
            justifyContent: "space-around",
          }}
        >
          <span style={{ color: "#7dc20b" }}>{infoAnime?.type}</span>
          {""} /<span style={{ color: "#7dc20b" }}>{infoAnime?.source}</span>
        </div>
      </div>
    </>
  );
  const { path } = routes.infoAnime;
  return (
    <Popover placement="top" content={content} title="Anime">
      <Link to={path}>
        <div
          className="card-anime"
          onMouseEnter={() => setInfoAnime(dataAnime)}
        >
          <div onClick={() => setAnime(dataAnime)}>
            <img src={`${img}`} alt="imagem do anime" />
            <div className="description">
              {favorites.length >= 1 &&
                favorites?.find(({ id: idd }) => idd === id) && (
                  <StarOutlined className="icon" />
                )}
              <p>{title}</p>
              <button>Detalhes</button>
            </div>
          </div>
        </div>
      </Link>
    </Popover>
  );
};
export default CardAnime;
