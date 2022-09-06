import React from "react";
import DetailsAnime from "../../components/AnimeInformation/DetailsAnime";
import MenuMobile from "../../components/Menu/MenuMobile";
import LibraryAnime from "../../components/AnimeInformation/LibraryAnime";
import AnimeData from "../../components/AnimeInformation/AnimeData";
import CommentList from "../../components/CommentList";


const InfoAnime = () => {
  return (
    <>
      <MenuMobile />
      <AnimeData />
      <LibraryAnime />
      <DetailsAnime />
      <CommentList />
    </>
  );
};
export default InfoAnime;
