import { useContext } from "react";
import { Button, Card } from "antd";
import { UserAddOutlined, MenuOutlined } from "@ant-design/icons";
import ButtonsDrop from "../ButtonsDropDown";
import Logo from "../../../assets/img/logo.png";
import Drawerr from "../../Animes/FoundAnime/Drawer";
import DrawerMenuLateral from "../DrawerMenuLateral";
import { AuthContext } from "../../../providers/provider";
import "antd/dist/antd.css";
import "./index.css";
import "./responsive.css";
import { Link } from "react-router-dom";
import { routes } from "../../../routes/routes";

const Menu = () => {
  const { randomAnime } = useContext(AuthContext);
  const { path } = routes.infoAnime;

  return (
    <div className="menu">
      <div className="container-drawer">
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
      </div>
    </div>
  );
};

export default Menu;
