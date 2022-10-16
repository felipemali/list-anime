import React from "react";
import AnimesSeason from "../../components/Animes/AnimesSeason";
import AnimesCalendar from "../../components/Animes/AnimesCalendar";
import AnimesRecommended from "../../components/Animes/AnimesRecommended";
import NewEpisodes from "../../components/Animes/NewEpisodes";
import SeasonUpcoming from "../../components/Animes/SeasonsUpcoming";
import Carousell from "../../components/Carousell";
import TopAnimes from "../../components/Animes/TopAnimes";
import Footer from "../../components/Footer";

const ContentHome = () => {
  return (
    <div>
      {/* o problema da repetição de key ta no componente AnimesRecommended */}
      <Carousell />
      <AnimesCalendar />
      <NewEpisodes />
      <AnimesRecommended />
      <AnimesSeason />
      <SeasonUpcoming />
      <Footer />
      {/* <TopAnimes /> */}
    </div>
  );
};

export default ContentHome;
