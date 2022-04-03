import { Menu, Switch } from "antd";
import {
  StarOutlined,
  UndoOutlined,
  DeleteOutlined,
  MenuOutlined,
  CheckCircleOutlined,
  ArrowsAltOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { Modal, Button } from "antd";

import { AuthContext } from "../../providers/auth";
import Carousell from "../Carousell";

const { SubMenu } = Menu;

const LateralMenu = () => {
  const {
    favorites,
    deleteFavorite,
    setNameAnime,
    setFavorites,
    setAnimesWatching,
    animesWatching,
    animesComplete,
    setAnimesComplete,
    animesDrop,
    setAnimesDrop,
  } = useContext(AuthContext);

  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("");
  const [colorText, setColorText] = useState("");
  const [menuSize, setMenuSize] = useState("70px");

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (nameAnime) => {
    const exclued = favorites.filter((name) => name.name !== nameAnime);
    setFavorites(exclued);
    localStorage.setItem("favorites", JSON.stringify(exclued));
    console.log(nameAnime);

    setModalText("Excluindo Anime...");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };
  console.log(animesWatching);
  const handleOkWatching = (nameAnime) => {
    const exclued = animesWatching.filter((name) => name.id !== nameAnime.id);
    console.log(exclued);
    console.log(nameAnime);
    console.log(animesWatching);
    setAnimesWatching(exclued);
    localStorage.setItem("watching", JSON.stringify(exclued));

    setModalText("Excluindo Anime...");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleOkComplete = (nameAnime) => {
    const exclued = animesComplete.filter((name) => name.name !== nameAnime);
    setAnimesComplete(exclued);
    localStorage.setItem("complete", JSON.stringify(exclued));

    setModalText("Excluindo Anime...");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleOkDrop = (nameAnime) => {
    const exclued = animesDrop.filter((name) => name.name !== nameAnime);
    setAnimesDrop(exclued);
    localStorage.setItem("drop", JSON.stringify(exclued));

    setModalText("Excluindo Anime...");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    // console.log("Clicked cancel button");
    setVisible(false);
  };
  const menu = () => {
    menuSize == "70px" ? setMenuSize("370px") : setMenuSize("70px");
  };

  return (
    <>
      <div className="lateral-menu">
        <Menu
          style={{
            minWidth: `${menuSize}`,
            color: "#fff",
            background: "#e2e2e2",

            // background: "#fff",
            marginTop: "0px",
          }}
          defaultOpenKeys={["sub1"]}
          mode="inline"
        >
          <ArrowsAltOutlined className="lateral-menu-icon" onClick={menu} />
          <SubMenu
            style={{
              color: "black",
              background: "#fff",
              opacity: "0.7",
            }}
            icon={<UndoOutlined />}
            title="Assistindo"
          >
            {animesWatching?.map((anime) => (
              <>
                <div className="div-lateral-menu-item">
                  <Link to={"/sinopse"}>
                    <Menu.Item
                      className="lateral-menu-item"
                      // key={}
                      onClick={() => {
                        setNameAnime(anime.name);
                      }}
                    >
                      <span className="lateral-menu-name">{anime.name}</span>
                    </Menu.Item>
                  </Link>

                  <DeleteOutlined
                    style={{
                      marginLeft: "1em",
                      margin: "auto 0px",
                    }}
                    onClick={() => {
                      showModal();
                      setModalText(`Deseja excluir ${anime.name}?`);
                      setColorText({ color: "#5e1403", size: "18px" });
                    }}
                  />
                  {/* <div className="menu-lateral-data"></div> */}
                </div>
                <Modal
                  title={<DeleteOutlined />}
                  visible={visible}
                  onOk={() => handleOkWatching(anime)}
                  confirmLoading={confirmLoading}
                  onCancel={handleCancel}
                >
                  <p
                    style={{
                      color: `${colorText.color}`,
                      fontSize: `${colorText.size}`,
                    }}
                  >
                    {modalText}
                  </p>
                </Modal>
              </>
            ))}
          </SubMenu>

          <SubMenu
            style={{
              color: "black",
              background: "#fff",
              opacity: "0.7",
            }}
            icon={<CheckCircleOutlined style={{ color: "green" }} />}
            title="Completo"
          >
            {animesComplete?.map((anime) => (
              <>
                <div className="div-lateral-menu-item">
                  <Link to={"/sinopse"}>
                    <Menu.Item
                      className="lateral-menu-item"
                      // key={}
                      onClick={() => {
                        setNameAnime(anime.name);
                      }}
                    >
                      <span className="lateral-menu-name">{anime.name}</span>
                    </Menu.Item>
                  </Link>

                  <DeleteOutlined
                    style={{
                      marginLeft: "1em",
                      margin: "auto 0px",
                    }}
                    onClick={() => {
                      showModal();
                      setModalText(`Deseja excluir ${anime.name}?`);
                      setColorText({ color: "#5e1403", size: "18px" });
                    }}
                  />
                  {/* <div className="menu-lateral-data"></div> */}
                </div>
                <Modal
                  title={<DeleteOutlined />}
                  visible={visible}
                  onOk={() => handleOkComplete(anime.name)}
                  confirmLoading={confirmLoading}
                  onCancel={handleCancel}
                >
                  <p
                    style={{
                      color: `${colorText.color}`,
                      fontSize: `${colorText.size}`,
                    }}
                  >
                    {modalText}
                  </p>
                </Modal>
              </>
            ))}
          </SubMenu>

          <SubMenu
            style={{
              color: "black",
              background: "#fff",
              opacity: "0.7",
            }}
            icon={<CloseCircleOutlined style={{ color: "red" }} />}
            title="Dropado"
          >
            {animesDrop?.map((anime) => (
              <>
                <div className="div-lateral-menu-item">
                  <Link to={"/sinopse"}>
                    <Menu.Item
                      className="lateral-menu-item"
                      // key={}
                      onClick={() => {
                        setNameAnime(anime.name);
                      }}
                    >
                      <span className="lateral-menu-name">{anime.name}</span>
                    </Menu.Item>
                  </Link>

                  <DeleteOutlined
                    style={{
                      marginLeft: "1em",
                      margin: "auto 0px",
                    }}
                    onClick={() => {
                      showModal();
                      setModalText(`Deseja excluir ${anime.name}?`);
                      setColorText({ color: "#5e1403", size: "18px" });
                    }}
                  />
                  {/* <div className="menu-lateral-data"></div> */}
                </div>
                <Modal
                  title={<DeleteOutlined />}
                  visible={visible}
                  onOk={() => handleOkDrop(anime.name)}
                  confirmLoading={confirmLoading}
                  onCancel={handleCancel}
                >
                  <p
                    style={{
                      color: `${colorText.color}`,
                      fontSize: `${colorText.size}`,
                    }}
                  >
                    {modalText}
                  </p>
                </Modal>
              </>
            ))}
          </SubMenu>

          <SubMenu
            style={{
              overflow: "hidden",
              background: "#fff",
              color: "black",
              opacity: "0.7",
            }}
            key="sub4"
            icon={<StarOutlined style={{ color: "rgb(158, 139, 29)" }} />}
            title="Preferidos"
          >
            {favorites?.map((anime) => (
              <>
                <div className="div-lateral-menu-item">
                  <Link to={"/sinopse"}>
                    <Menu.Item
                      className="lateral-menu-item"
                      // key={}
                      onClick={() => {
                        setNameAnime(anime.name);
                      }}
                    >
                      <span className="lateral-menu-name">{anime.name}</span>
                    </Menu.Item>
                  </Link>

                  <DeleteOutlined
                    style={{
                      marginLeft: "1em",
                      margin: "auto 0px",
                    }}
                    onClick={() => {
                      showModal();
                      setModalText(`Deseja excluir ${anime.name}?`);
                      setColorText({ color: "#5e1403", size: "18px" });
                    }}
                  />
                  {/* <div className="menu-lateral-data"></div> */}
                </div>
                <Modal
                  title={<DeleteOutlined />}
                  visible={visible}
                  onOk={() => handleOk(anime.name)}
                  confirmLoading={confirmLoading}
                  onCancel={handleCancel}
                >
                  <p
                    style={{
                      color: `${colorText.color}`,
                      fontSize: `${colorText.size}`,
                    }}
                  >
                    {modalText}
                  </p>
                </Modal>
              </>
            ))}
          </SubMenu>
        </Menu>
        <Carousell />
      </div>
    </>
  );
};

export default LateralMenu;
