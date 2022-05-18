import { useContext } from "react";

import { Card } from "antd";
import { UserAddOutlined, MenuOutlined } from "@ant-design/icons";

import ButtonsDrop from "../ButtonsDropDown";
import Logo from "../../../assets/img/logo.png";
import Drawerr from "../../Drawer";
import DrawerMenuLateral from "../../Menu/DrawerMenuLateral";

import { AuthContext } from "../../../providers/auth";
import "antd/dist/antd.css";
import "./index.css";

const { Meta } = Card;

const Menu = () => {
  const { menuSx } = useContext(AuthContext);

  return (
    <>
      <div className="menu">
        <DrawerMenuLateral />

        <img className="menu-logo" src={Logo} alt="" />

        <div className="menu-buttons">
          <ButtonsDrop />
        </div>

        <div className="div-menu-input">
          <Drawerr />
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
