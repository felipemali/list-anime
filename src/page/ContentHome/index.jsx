import React from "react";
import AnimesSeason from "../../components/Animes/AnimesSeason";
import AnimesCalendar from "../../components/Animes/AnimesCalendar";
import AnimesRecommended from "../../components/Animes/AnimesRecommended";
import NewEpisodes from "../../components/Animes/NewEpisodes";
import SeasonUpcoming from "../../components/Animes/SeasonsUpcoming";
import Footer from "../../components/Footer";
import Carousel from "../../components/Carousel";
import FavoritesAnimes from "../../components/Animes/FavoritesAnimes";

const ContentHome = () => {
  return (
    <main>
      {/* o problema da repetição de key ta no componente AnimesRecommended */}
      <Carousel />
      <AnimesCalendar />
      <NewEpisodes />
      <AnimesRecommended />
      <AnimesSeason />
      <SeasonUpcoming />
      <Footer />
      {/* <TopAnimes /> */}
    </main>
  );
};

export default ContentHome;
