import React from "react";

import Animes from "../../components/Animes/AnimesNow";
import MenuMobile from "../../components/Menu/MenuMobile";
import AnimesCalendar from "../../components/Animes/AnimesCalendar";
import AnimesRecommended from "../../components/Animes/AnimesRecommended";
import NewEpisodes from "../../components/Animes/NewEpisodes";
import SeasonUpcoming from "../../components/Animes/SeasonsUpcoming";
import Carousell from "../../components/Carousell";
import TopAnimes from "../../components/Animes/TopAnimes";
import "./index.css";

const ContentHome = () => {
  return (
    <>
      <MenuMobile />

      <Carousell />
      <AnimesCalendar />
      <NewEpisodes />
      <Animes />
      <AnimesRecommended />
      <SeasonUpcoming />
      <TopAnimes />
    </>
  );
};

export default ContentHome;
