import React from "react";
import DetailsAnime from "../../components/AnimeInformation/DetailsAnime";
import LibraryAnime from "../../components/AnimeInformation/LibraryAnime";
import AnimeData from "../../components/AnimeInformation/AnimeData";
import CommentList from "../../components/CommentList";

const InfoAnime = () => {
  return (
    <>
      <AnimeData />
      <LibraryAnime />
      <DetailsAnime />
      <CommentList />
    </>
  );
};
export default InfoAnime;
