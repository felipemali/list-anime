import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "../../components/Menu";
import InfoAnime from "../../components/InfoAnime";
import Footer from "../../components/Footer";
import ListWatch from "../../components/ListWatch";
import { BackTop } from "antd";
import "./index.css";
import ContentStart from "../ContentStart";
import AuthProvider from "../../providers/auth";

const Home = () => {
  const style = {
    height: 40,
    width: 40,
    lineHeight: "40px",
    borderRadius: 4,
    backgroundColor: "#3f7a7e",
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
            <Route exact path="/" element={<ContentStart />} />
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
