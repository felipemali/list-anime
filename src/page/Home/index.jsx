import axios from "axios";
import { useEffect, useState } from "react";
import Menu from "../../components/Menu";
import ListWatch from "../../components/ListWatch";
import InfoAnime from "../../components/InfoAnime";

const Home = () => {
  const [imgs, setImgs] = useState([]);
  const [nameAnime, setNameAnime] = useState();
  useEffect(() => {
    axios
      .get(`https://api.jikan.moe/v4/anime?q=${nameAnime}`)
      .then((response) => {
        const result = response.data.data.map((e) => {
          return {
            url: e.images,
          };
        });
        // setImgs(result);
        setImgs(response.data.data);
        console.log(response.data.data[0].trailer.embed_url);
      });
  }, [nameAnime]);
  console.log(imgs);
  console.log(nameAnime);

  return (
    <>
      <Menu nameAnime={setNameAnime} />
      {nameAnime && <ListWatch imgs={imgs} />}
      {nameAnime && <InfoAnime imgs={imgs} />}
    </>
  );
};

export default Home;
