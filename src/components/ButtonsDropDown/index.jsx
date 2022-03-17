import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import React from "react";
import "./index.css";

const animes = (
  <Menu className="menu-background">
    <Menu.Item className="link-buttons">
      <a
        style={{ color: "#fff" }}
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        lengendados
      </a>
    </Menu.Item>
    <Menu.Item className="link-buttons">
      <a
        style={{ color: "#fff" }}
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        dublados
      </a>
    </Menu.Item>
  </Menu>
);

const movies = (
  <Menu className="menu-background">
    <Menu.Item className="link-buttons">
      <a
        style={{ color: "#fff" }}
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        lengendados
      </a>
    </Menu.Item>
  </Menu>
);
const reader = (
  <Menu className="menu-background">
    <Menu.Item className="link-buttons">
      <a
        style={{ color: "#fff" }}
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Em breve
      </a>
    </Menu.Item>
  </Menu>
);
const animesOn = (
  <Menu className="menu-background">
    <Menu.Item className="link-buttons">
      <a
        style={{ color: "#fff" }}
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Canal
      </a>
    </Menu.Item>
    <Menu.Item className="link-buttons">
      <a
        style={{ color: "#fff" }}
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Discord
      </a>
    </Menu.Item>
  </Menu>
);
const ButtonsDrop = () => {
  return (
    <>
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
      <Dropdown overlay={animesOn}>
        <a
          className="ant-dropdown-link menu-links"
          onClick={(e) => e.preventDefault()}
        >
          Calendários <DownOutlined />
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
    </>
  );
};

export default ButtonsDrop;
