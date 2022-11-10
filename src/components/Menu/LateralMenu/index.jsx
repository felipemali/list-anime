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
import { AnimeContext } from "../../../providers/provider";
import "./index.css";
import "./responsive.css";
import { routes } from "../../../routes/routes";

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
  } = useContext(AnimeContext);

  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("");
  const [colorText, setColorText] = useState("");
  const [animeSelect, setAnimeSelect] = useState();

  const showModal = (anime) => {
    setVisible(true);
    setAnimeSelect(anime);
  };

  const handleOk = (nameAnime) => {
    const exclued = favorites.filter((name) => name.name !== nameAnime);
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
    const exclued = animesWatching.filter((name) => name.name !== nameAnime);
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
    console.log(nameAnime);
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
    setVisible(false);
  };

  const { path } = routes.infoAnime;
  return (
    <aside className="lateral-menu">
      <Menu
        style={{
          color: "#222629",

          marginTop: "0",
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
          {animesWatching?.map((anime) => {
            const { id, name } = anime;
            return (
              <div key={`animesWatching-${id}`}>
                <div className="div-lateral-menu-item">
                  <Link to={path}>
                    <Menu.Item
                      className="lateral-menu-item"
                      // key={}
                      onClick={() => {
                        setNameAnime(name);
                      }}
                    >
                      <span className="lateral-menu-name">{name}</span>
                    </Menu.Item>
                  </Link>

                  <DeleteOutlined
                    style={{
                      marginLeft: "1em",
                      margin: "auto 0px",
                    }}
                    onClick={() => {
                      showModal(name);
                      setModalText(`Deseja excluir ${name}?`);
                      setColorText({ color: "#5e1403", size: "18px" });
                    }}
                  />
                  {/* <div className="menu-lateral-data"></div> */}
                </div>
                <Modal
                  title={<DeleteOutlined />}
                  visible={visible}
                  onOk={() => handleOkWatching(animeSelect)}
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
            );
          })}
        </SubMenu>

        <SubMenu
          style={{
            color: "#4d5155",
            background: "#faf6f6",
          }}
          icon={<CheckCircleOutlined style={{ color: "green" }} />}
          title="Completo"
        >
          {animesComplete?.map((anime) => {
            const { name, id } = anime;
            return (
              <div key={`animesComplete-${id}`}>
                <div className="div-lateral-menu-item">
                  <Link to={path}>
                    <Menu.Item
                      className="lateral-menu-item"
                      // key={}
                      onClick={() => {
                        setNameAnime(name);
                      }}
                    >
                      <span className="lateral-menu-name">{name}</span>
                    </Menu.Item>
                  </Link>

                  <DeleteOutlined
                    style={{
                      marginLeft: "1em",
                      margin: "auto 0px",
                    }}
                    onClick={() => {
                      showModal(name);
                      setModalText(`Deseja excluir ${name}?`);
                      setColorText({ color: "#5e1403", size: "18px" });
                    }}
                  />
                  {/* <div className="menu-lateral-data"></div> */}
                </div>
                <Modal
                  title={<DeleteOutlined />}
                  visible={visible}
                  onOk={() => handleOkComplete(animeSelect)}
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
            );
          })}
        </SubMenu>

        <SubMenu
          style={{
            color: "#4d5155",
            background: "#faf6f6",
          }}
          icon={<CloseCircleOutlined style={{ color: "red" }} />}
          title="Dropado"
        >
          {animesDrop?.map((anime) => {
            const { id, name } = anime;
            return (
              <div key={`animesDrop-${id}`}>
                <div className="div-lateral-menu-item">
                  <Link to={path}>
                    <Menu.Item
                      className="lateral-menu-item"
                      // key={}
                      onClick={() => {
                        setNameAnime(name);
                      }}
                    >
                      <span className="lateral-menu-name">{name}</span>
                    </Menu.Item>
                  </Link>

                  <DeleteOutlined
                    style={{
                      marginLeft: "1em",
                      margin: "auto 0px",
                    }}
                    onClick={() => {
                      showModal(name);
                      setModalText(`Deseja excluir ${name}?`);
                      setColorText({ color: "#5e1403", size: "18px" });
                    }}
                  />
                  {/* <div className="menu-lateral-data"></div> */}
                </div>
                <Modal
                  title={<DeleteOutlined />}
                  visible={visible}
                  onOk={() => handleOkDrop(animeSelect)}
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
            );
          })}
        </SubMenu>

        <SubMenu
          style={{
            color: "#4d5155",
            background: "#faf6f6",
          }}
          key="sub4"
          icon={<StarOutlined style={{ color: "rgb(158, 139, 29)" }} />}
          title="Favoritos"
        >
          {favorites?.map((anime) => {
            const { id, name } = anime;
            return (
              <div key={`favorites-${id}`}>
                <div className="div-lateral-menu-item">
                  <Link to={path}>
                    <Menu.Item
                      className="lateral-menu-item"
                      // key={}
                      onClick={() => {
                        setNameAnime(name);
                      }}
                    >
                      <span className="lateral-menu-name">{name}</span>
                    </Menu.Item>
                  </Link>

                  <DeleteOutlined
                    style={{
                      marginLeft: "1em",
                      margin: "auto 0px",
                    }}
                    onClick={() => {
                      showModal(name);
                      setModalText(`Deseja excluir ${name}?`);
                      setColorText({ color: "#5e1403", size: "18px" });
                    }}
                  />
                  {/* <div className="menu-lateral-data"></div> */}
                </div>
                <Modal
                  title={<DeleteOutlined />}
                  visible={visible}
                  onOk={() => handleOk(animeSelect)}
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
            );
          })}
        </SubMenu>
      </Menu>
    </aside>
  );
};

export default LateralMenu;
