import React, { useContext, useState } from "react";
import "./index.css";
import ButtonsDrop from "../../components/ButtonsDropDown";
import { AuthContext } from "../../providers/auth";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";

const MenuMobile = () => {
  const { menuMobile, setNameAnime } = useContext(AuthContext);
  const [valueInput, setValueInput] = useState("");

  const buttons = [
    "Animes",
    "Filmes",
    "Leitor",
    "Hentais",
    "Calendários",
    "Animer On",
  ];
  return (
    <>
      <div
        style={{
          display: `${menuMobile}`,
          margin: "auto",
          flexWrap: "wrap",
          height: "50vh",
          width: "100%",
          color: "#fff",
        }}
      >
        <div
          className="a"
          style={{
            backgroundColor: "#181717",
            paddingTop: "3%",
            marginTop: "12px",
            paddingBottom: "1em",
          }}
        >
          <div className="div-menu-input-sx">
            <Link to={"/"}>
              <SearchOutlined
                onClick={() => {
                  setNameAnime(valueInput);
                  setValueInput("");
                }}
                className="icon-search-sx"
              />
            </Link>
            <input
              value={valueInput}
              onChange={(e) => setValueInput(e.target.value)}
              className="menu-input"
              type="text"
              placeholder="Buscar por Animes"
            />
          </div>
        </div>
        <div className="menu-mobile-buttons">
          {buttons.map((button) => (
            <button className="buttons">{button}</button>
          ))}
        </div>
      </div>
    </>
  );
};

export default MenuMobile;
