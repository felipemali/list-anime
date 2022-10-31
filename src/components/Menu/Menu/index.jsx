import { useContext } from "react";
import { Button, Card } from "antd";
import { UserAddOutlined, MenuOutlined } from "@ant-design/icons";
import ButtonsDrop from "../ButtonsDropDown";
import Logo from "../../../assets/img/logo.png";
import Drawerr from "../../Animes/FoundAnime/Drawer";
import DrawerMenuLateral from "../DrawerMenuLateral";
import { AnimeContext } from "../../../providers/provider";
import "antd/dist/antd.css";
import "./index.css";
import "./responsive.css";
import { Link } from "react-router-dom";
import { routes } from "../../../routes/routes";

const Menu = () => {
  const { randomAnime } = useContext(AnimeContext);
  const { path } = routes.infoAnime;

  return (
    <header className="menu">
      <div className="container-drawer">
        <DrawerMenuLateral />

        <Link to={"/"}>
          <img className="menu-logo" src={Logo} alt="icone do site" />
        </Link>
      </div>

      <nav className="menu-buttons">
        <ButtonsDrop />
      </nav>

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
    </header>
  );
};

export default Menu;
