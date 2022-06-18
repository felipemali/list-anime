import { useContext } from "react";

import { Button, Card } from "antd";
import { UserAddOutlined, MenuOutlined } from "@ant-design/icons";

import ButtonsDrop from "../ButtonsDropDown";
import Logo from "../../../assets/img/logo.png";
import Drawerr from "../../Menu/Drawer";
import DrawerMenuLateral from "../../Menu/DrawerMenuLateral";

import { AuthContext } from "../../../providers/auth";
import "antd/dist/antd.css";
import "./index.css";
import { Link } from "react-router-dom";

// const { Meta } = Card;

const Menu = () => {
  const { menuSx, randomAnime } = useContext(AuthContext);

  return (
    <>
      <div className="menu">
        <DrawerMenuLateral />

        <img className="menu-logo" src={Logo} alt="" />

        <div className="menu-buttons">
          <ButtonsDrop />
        </div>

        <div className="div-menu-input">
          <Link to={"/sinopse"}>
            <Button
              onClick={randomAnime}
              style={{
                marginRight: "1rem",
                background: "#1b1b1b",
                border: "1px solid #1890ff",
                color: "#1890ff",
                borderRadius: "5px 5px",
              }}
            >
              Anime alatorio
            </Button>
          </Link>

          <Drawerr />
        </div>

        <div className="menu-icons">
          <UserAddOutlined className="icons" />
          {window.innerWidth <= 1002 ? (
            <MenuOutlined className="menu-mobilee" onClick={menuSx} />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Menu;
