import React from "react";
import AnimesSeason from "../../components/Animes/AnimesSeason";
import MenuMobile from "../../components/Menu/MenuMobile";
import AnimesCalendar from "../../components/Animes/AnimesCalendar";
import AnimesRecommended from "../../components/Animes/AnimesRecommended";
import NewEpisodes from "../../components/Animes/NewEpisodes";
import SeasonUpcoming from "../../components/Animes/SeasonsUpcoming";
import Carousell from "../../components/Carousell";
import TopAnimes from "../../components/Animes/TopAnimes";
// import Theme from "../../styles/Theme";

const ContentHome = () => {
  return (
    <>
      {/* o problema da repetição de key ta no componente AnimesRecommended */}
      <MenuMobile />
      <Carousell />
      <AnimesCalendar />
      <NewEpisodes />
      <AnimesSeason />
      <AnimesRecommended />
      <SeasonUpcoming />
      <TopAnimes />
    </>
  );
};

export default ContentHome;
