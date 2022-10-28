import React from "react";
import DetailsAnime from "../../components/AnimeInformation/DetailsAnime";
import LibraryAnime from "../../components/AnimeInformation/LibraryAnime";
import AnimeData from "../../components/AnimeInformation/AnimeData";
import CommentList from "../../components/CommentList";
import Footer from "../../components/Footer";

const InfoAnime = () => {
  return (
    <div
      style={{
        background:
          "#0f181d  linear-gradient(180deg, #1b2730, #131d24, #131d24, #1a2931)",
      }}
    >
      <AnimeData />
      <LibraryAnime />
      <DetailsAnime />
      <CommentList />
      <Footer />
    </div>
  );
};
export default InfoAnime;
