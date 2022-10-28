import { Menu, Dropdown } from "antd";
import { DownOutlined, CalendarOutlined } from "@ant-design/icons";
import React from "react";
import "./index.css";
import "./responsive.css";

const animes = (
  <Menu className="menu-background">
    <Menu.Item className="link-buttons">
      <a style={{ color: "#000" }}>lengendados</a>
    </Menu.Item>
    <Menu.Item className="link-buttons">
      <a style={{ color: "#000" }}>dublados</a>
    </Menu.Item>
  </Menu>
);

const movies = (
  <Menu className="menu-background">
    <Menu.Item className="link-buttons">
      <a style={{ color: "#000" }}>lengendados</a>
    </Menu.Item>
  </Menu>
);
const reader = (
  <Menu className="menu-background">
    <Menu.Item className="link-buttons">
      <a style={{ color: "#000" }}>Em breve</a>
    </Menu.Item>
  </Menu>
);
const calendar = (
  <Menu className="menu-background">
    <Menu.Item className="link-buttons">
      <a style={{ color: "#000" }}>
        <CalendarOutlined />
        {""} Domingo
      </a>
    </Menu.Item>
    <Menu.Item className="link-buttons">
      <a style={{ color: "#000" }}>
        <CalendarOutlined />
        {""} Segunda-Feira
      </a>
    </Menu.Item>
    <Menu.Item className="link-buttons">
      <a style={{ color: "#000" }}>
        <CalendarOutlined />
        {""} Terça-Feira
      </a>
    </Menu.Item>
    <Menu.Item className="link-buttons">
      <a style={{ color: "#000" }}>
        <CalendarOutlined />
        {""} Quarta-Feira
      </a>
    </Menu.Item>
    <Menu.Item className="link-buttons">
      <a style={{ color: "#000" }}>
        <CalendarOutlined />
        {""} Quinta-Feira
      </a>
    </Menu.Item>
    <Menu.Item className="link-buttons">
      <a style={{ color: "#000" }}>
        <CalendarOutlined />
        {""} Sexta-Feira
      </a>
    </Menu.Item>
    <Menu.Item className="link-buttons">
      <a style={{ color: "#000" }}>
        <CalendarOutlined />
        {""} Sábado
      </a>
    </Menu.Item>
  </Menu>
);

const animesOn = (
  <Menu className="menu-background">
    <Menu.Item className="link-buttons">
      <a style={{ color: "#fff" }}>Canal</a>
    </Menu.Item>
    <Menu.Item className="link-buttons">
      <a style={{ color: "#fff" }}>Discord</a>
    </Menu.Item>
  </Menu>
);
const ButtonsDrop = () => {
  return (
    <div className="container-buttonsDrop">
      <Dropdown overlay={animes}>
        <a
          className="ant-dropdown-link menu-links"
          onClick={(e) => e.preventDefault()}
        >
          Animes <DownOutlined />
        </a>
      </Dropdown>
      <Dropdown overlay={movies}>
        <a
          className="ant-dropdown-link menu-links"
          onClick={(e) => e.preventDefault()}
        >
          Filmes <DownOutlined />
        </a>
      </Dropdown>
      <Dropdown overlay={reader}>
        <a
          className="ant-dropdown-link menu-links"
          onClick={(e) => e.preventDefault()}
        >
          Leitor <DownOutlined />
        </a>
      </Dropdown>
      <Dropdown overlay={movies}>
        <a
          className="ant-dropdown-link menu-links"
          onClick={(e) => e.preventDefault()}
        >
          Hentais <DownOutlined />
        </a>
      </Dropdown>
      <Dropdown overlay={calendar}>
        <a
          className="ant-dropdown-link menu-links"
          onClick={(e) => e.preventDefault()}
        >
          Calendário <DownOutlined />
        </a>
      </Dropdown>
      <Dropdown overlay={reader}>
        <a
          className="ant-dropdown-link menu-links"
          onClick={(e) => e.preventDefault()}
        >
          Animes On <DownOutlined />
        </a>
      </Dropdown>
    </div>
  );
};

export default ButtonsDrop;
