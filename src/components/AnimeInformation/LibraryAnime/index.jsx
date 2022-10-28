import React, { useContext } from "react";
import { Divider } from "antd";
import {
  PlusOutlined,
  CheckCircleOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import { AuthContext } from "../../../providers/provider";
import "../AnimeData/index.css";

const LibraryAnime = () => {
  const { anime } = useContext(AuthContext);

  return (
    <div className="library">
      <div className="library-buttons">
        <Divider style={{ color: "#fff" }}>Biblioteca</Divider>
        <button className="library-button-watch">
          <PlusOutlined style={{ paddingRight: "0.7em" }} />
          Assistir
        </button>
        <button className="library-button-favorite">
          <CheckCircleOutlined className="icons-library" />
          Favoritar
        </button>
        <button className="library-button-watched">
          <CheckOutlined className="icons-library" />
          Assistido
        </button>
      </div>

      {anime?.trailer && (
        <div className="div-info-anime-trailer">
          <iframe
            className="info-anime-trailer"
            src={`${anime?.trailer}?autoplay=1&mute=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      )}
    </div>
  );
};
export default LibraryAnime;
