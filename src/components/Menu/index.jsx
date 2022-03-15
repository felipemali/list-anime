import { Card } from "antd";
import "antd/dist/antd.css";
import "./index.css";
import { Row, Col, Divider } from "antd";
import Logo from "../../img/logo.png";
import { SearchOutlined, UserAddOutlined } from "@ant-design/icons";
import ButtonsDrop from "../ButtonsDropDown";

const { Meta } = Card;

const Menu = () => {
  return (
    <div className="menu">
      <img className="menu-logo" src={Logo} alt="" />
      <div className="menu-buttons">
        <ButtonsDrop />
        {/* <button className="menu-buttons-center">animes</button>
        <button className="menu-buttons-center">Filmes</button> */}
        {/* <button className="menu-buttons-center">Leitor</button> */}
        {/* <button className="menu-buttons-center">Hentais</button> */}
        {/* <button className="menu-buttons-center">Calendários</button> */}
        {/* <button className="menu-buttons-center">Animes ON</button> */}
      </div>
      <div className="menu-icons">
        <SearchOutlined className="icons" />
        <UserAddOutlined className="icons" />
      </div>
    </div>
  );
};

export default Menu;
