import React, { useContext } from "react";
import Animes from "../../components/Animes";
import LateralMenu from "../../components/LateralMenu";
import ListWatch from "../../components/ListWatch";
import MenuMobile from "../../components/MenuMobile";
import "./index.css";

import { AuthContext } from "../../providers/auth";
import AnimesRecommended from "../../components/AnimesRecommended";
import NewEpisodes from "../../components/NewEpisodes";
import SeasonUpcoming from "../../components/SeasonsUpcoming";
const ContentStart = () => {
  const { favorites, search } = useContext(AuthContext);
  return (
    <>
      <MenuMobile />

      <LateralMenu />
      <NewEpisodes />
      <Animes />
      <AnimesRecommended />
      <SeasonUpcoming />
    </>
  );
};

export default ContentStart;
