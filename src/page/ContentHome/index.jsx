import React from "react";
import Animes from "../../components/Animes";
import LateralMenu from "../../components/LateralMenu";

import MenuMobile from "../../components/MenuMobile";
import AnimesCalendar from "../../components/AnimesCalendar";
import "./index.css";

import AnimesRecommended from "../../components/AnimesRecommended";
import NewEpisodes from "../../components/NewEpisodes";
import SeasonUpcoming from "../../components/SeasonsUpcoming";
import { ArrowsAltOutlined } from "@ant-design/icons";
import DrawerMenuLateral from "../../components/DrawerMenuLateral";
import Carousell from "../../components/Carousell";
import TopAnimes from "../../components/TopAnimes";

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
