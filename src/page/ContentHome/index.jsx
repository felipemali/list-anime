import React from "react";
import AnimesSeason from "../../components/Animes/AnimesSeason";
import AnimesCalendar from "../../components/Animes/AnimesCalendar";
import AnimesRecommended from "../../components/Animes/AnimesRecommended";
import NewEpisodes from "../../components/Animes/NewEpisodes";
import SeasonUpcoming from "../../components/Animes/SeasonsUpcoming";
import Footer from "../../components/Footer";
import Carousel from "../../components/Carousel";

const ContentHome = () => {
  return (
    <div>
      {/* o problema da repetição de key ta no componente AnimesRecommended */}
      <Carousel />
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
