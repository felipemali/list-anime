import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "../../components/Menu/Menu";
import InfoAnime from "../InfoAnime";
import Footer from "../../components/Footer";
import SearchAnimeMenu from "../SearchAnimeMenu";
import { BackTop } from "antd";
import ContentHome from "../ContentHome";
import ProviderAnime from "../../providers/auth";
import { routes } from "../../routes/routes";

const Home = () => {
  const style = {
    height: 40,
    width: 40,
    lineHeight: "40px",
    borderRadius: 4,
    backgroundColor: "#d9011d",
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
  };
  const { path } = routes.infoAnime;
  console.log(path);

  return (
    <BrowserRouter>
      <div>
        <ProviderAnime>
          <Routes>
            <Route
              exact
              path={routes.searchMenu.path}
              element={<SearchAnimeMenu />}
            />
            <Route exact path={routes.inicio.path} element={<ContentHome />} />
            <Route exact path={routes.infoAnime.path} element={<InfoAnime />} />
          </Routes>
        </ProviderAnime>

        <BackTop>
          <div style={style}>Topo</div>
        </BackTop>
      </div>
    </BrowserRouter>
  );
};

export default Home;
