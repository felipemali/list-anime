import { Menu, Dropdown, Image } from "antd";
import { useContext } from "react";
import { AuthContext } from "../../../providers/auth";

export const Options = () => {
  const { anime, watching, complete, drop } = useContext(AuthContext);

  return (
    <Menu className="options-background">
      <Menu.Item className="options-link-buttons">
        <a
          onClick={() =>
            watching({
              name: anime.title,
              img: anime.image_large,
              id: anime.id,
            })
          }
          style={{
            color: "black",
            fontSize: "18px",
            paddingLeft: "10%",
            opacity: "0.7",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Assistindo
        </a>
      </Menu.Item>
      <Menu.Item className="options-link-buttons">
        <a
          onClick={() =>
            complete({
              name: anime.title,
              img: anime.image_large,
              id: anime.id,
            })
          }
          style={{
            color: "black",
            fontSize: "18px",
            paddingLeft: "10%",
            opacity: "0.7",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Completo
        </a>
      </Menu.Item>
      <Menu.Item className="options-link-buttons">
        <a
          onClick={() =>
            drop({
              name: anime.title,
              img: anime.image_large,
              id: anime.id,
            })
          }
          style={{
            color: "black",
            fontSize: "18px",
            paddingLeft: "10%",
            opacity: "0.7",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Dropado
        </a>
      </Menu.Item>
    </Menu>
  );
};
