import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "../../components/Menu/MenuMaximum";
import InfoAnime from "../../components/AnimeInformation/InfoAnime";
import Footer from "../../components/Footer";
import ListWatch from "../../components/Menu/ListWatch";
import { BackTop } from "antd";
import ContentHome from "../ContentHome";
import AuthProvider from "../../providers/auth";

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

  return (
    <BrowserRouter>
      <div className="home">
        <AuthProvider>
          <Menu />

          <Routes>
            <Route exact path="/search" element={<ListWatch />} />
            <Route exact path="/" element={<ContentHome />} />
            <Route exact path="/sinopse" element={<InfoAnime />} />
          </Routes>
        </AuthProvider>

        <BackTop>
          <div style={style}>Topo</div>
        </BackTop>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Home;
