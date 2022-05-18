import { useContext, useState } from "react";

import { Menu, Modal } from "antd";
import { Link } from "react-router-dom";

import {
  StarOutlined,
  UndoOutlined,
  DeleteOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

import { AuthContext } from "../../../providers/auth";
import "./index.css";

const { SubMenu } = Menu;

const LateralMenu = () => {
  const {
    favorites,
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
  const animesWatching_id = "animesWatching";
  const animesDrop_id = "animesDrop";
  const favorites_id = "favorites";

  const handleOk = (nameAnime) => {
    const exclued = favorites.filter((name) => name.id !== nameAnime);
    setFavorites(exclued);
    localStorage.setItem("favorites", JSON.stringify(exclued));

    setModalText("Excluindo Anime...");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleOkWatching = (nameAnime) => {
    const exclued = animesWatching.filter((name) => name.id !== nameAnime.id);
    console.log(exclued);

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
    const exclued = animesDrop.filter((name) => name.id !== nameAnime.id);
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
            color: "#222629",

            marginTop: "0px",
          }}
          defaultOpenKeys={["sub1"]}
          mode="inline"
        >
          <SubMenu
            style={{
              color: "#4d5155",
              background: "#faf6f6",
            }}
            icon={<UndoOutlined />}
            title="Assistindo"
          >
            {animesWatching?.map((anime) => (
              <div key={`${animesWatching_id}_${anime.id}`}>
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
              </div>
            ))}
          </SubMenu>

          <SubMenu
            style={{
              color: "#4d5155",
              background: "#faf6f6",
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
                  onOk={() => handleOkComplete(anime)}
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
              color: "#4d5155",
              background: "#faf6f6",
            }}
            icon={<CloseCircleOutlined style={{ color: "red" }} />}
            title="Dropado"
          >
            {animesDrop?.map((anime) => (
              <div key={`${animesDrop_id}_${anime.id}`}>
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
                  onOk={() => handleOkDrop(anime)}
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
              </div>
            ))}
          </SubMenu>

          <SubMenu
            style={{
              color: "#4d5155",
              background: "#faf6f6",
            }}
            key="sub4"
            icon={<StarOutlined style={{ color: "rgb(158, 139, 29)" }} />}
            title="Preferidos"
          >
            {favorites?.map((anime) => (
              <div key={`${favorites_id}_${anime.id}`}>
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
                  onOk={() => handleOk(anime.id)}
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
              </div>
            ))}
          </SubMenu>
        </Menu>
      </div>
    </>
  );
};

export default LateralMenu;
