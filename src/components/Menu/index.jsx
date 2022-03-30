import { Card } from "antd";
import "antd/dist/antd.css";
import "./index.css";
import Logo from "../../img/logo.png";
import {
  SearchOutlined,
  UserAddOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import ButtonsDrop from "../ButtonsDropDown";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../providers/auth";

const { Meta } = Card;

const Menu = () => {
  const { menuSx, setNameAnime } = useContext(AuthContext);

  const [valueInput, setValueInput] = useState("");

  return (
    <>
      <div className="menu">
        <img className="menu-logo" src={Logo} alt="" />

        <div className="menu-buttons">
          <ButtonsDrop />
        </div>
        <div className="div-menu-input">
          <Link to={"/sinopse"}>
            <SearchOutlined
              onClick={() => {
                setNameAnime(valueInput);
                setValueInput("");
              }}
              className="icon-search"
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
        <div className="menu-icons">
          <UserAddOutlined className="icons" />
          <MenuOutlined className="menu-mobilee" onClick={menuSx} />
        </div>
      </div>
    </>
  );
};

export default Menu;
