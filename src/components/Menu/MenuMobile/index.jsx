import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";

import { SearchOutlined } from "@ant-design/icons";

import { AuthContext } from "../../../providers/auth";
import "./index.css";

const MenuMobile = () => {
  const { menuMobile, setNameAnime } = useContext(AuthContext);
  const [valueInput, setValueInput] = useState("");

  const buttons = [
    {
      buttonn: "Animes",
      id: "animes_1",
    },
    {
      buttonn: "Filmes",
      id: "animes_2",
    },
    {
      buttonn: "Leitor",
      id: "animes_3",
    },
    {
      buttonn: "Hentais",
      id: "animes_4",
    },
    {
      buttonn: "Calendário",
      id: "animes_5",
    },
    {
      buttonn: "Animer On",
      id: "animes_6",
    },
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
          {/* <div className="div-menu-input-sx">
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
          </div> */}
        </div>
        <div className="menu-mobile-buttons">
          {buttons.map((button) => {
            const { id, buttonn } = button;
            return (
              <button key={id} className="buttons">
                {buttonn}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MenuMobile;
