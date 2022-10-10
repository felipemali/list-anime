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
import { routes } from "../../../routes/routes";

// const { Meta } = Card;

const Menu = () => {
  const { menuSx, randomAnime } = useContext(AuthContext);
  const { path } = routes.infoAnime;

  return (
    <>
      <div className="menu">
        <div className="e">
          <DrawerMenuLateral />
          <img className="menu-logo" src={Logo} alt="icone do site" />
        </div>

        <div className="menu-buttons">
          <ButtonsDrop />
        </div>

        <div className="div-menu-input"></div>

        <div className="menu-icons">
          <Link to={path}>
            <Button className="button-random-anime" onClick={randomAnime}>
              Anime alatorio
            </Button>
          </Link>
          <Drawerr />
          <UserAddOutlined className="user" />

          {/* {window.innerWidth <= 1002 ? (
            <MenuOutlined className="menu-mobilee" onClick={menuSx} />
          ) : (
            ""
          )} */}
        </div>
      </div>
    </>
  );
};

export default Menu;
