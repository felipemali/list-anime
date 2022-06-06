import React, { useContext, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Container } from "../../../styles/Container/styles";
import { Title } from "../../../styles/StylesBasics/Title/styles";
import { ContainerSwiperSlide } from "../../../styles/SwiperStyles/ContainerSwiperSlide/styles";
import { Button } from "../../../styles/StylesBasics/Button/styles";
import { Slide } from "../../../styles/SwiperStyles/Slide/styles";
import { NameAnime } from "../../../styles/DescriptionAnime/NameAnime/styles";
import { Description } from "../../../styles/DescriptionAnime/Description/styles";
import { ContainerSwiperMedium } from "../../../styles/SwiperStyles/ContainerSwiperMedium/styles";
import { AuthContext } from "../../../providers/auth";

import { Link } from "react-router-dom";
import { PlayCircleOutlined, StarOutlined } from "@ant-design/icons";
import { Popover } from "antd";

import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";

const SeasonUpcoming = () => {
  const { seasonsUpcoming, setAnime, favorites } = useContext(AuthContext);
  const [displayIcon, setDisPlayIcon] = useState("none");
  const [dataAnime, setDataAnime] = useState([]);
  const seasonsUpcoming_Id = "seasonUpcomming";

  SwiperCore.use([Autoplay]);

  const content = (
    <>
      <div>
        <span
          style={{
            display: "flex",
            justifyContent: "end",
            fontSize: "16px",
            color: "gray",
          }}
        >
          😀 {dataAnime.favorites}
        </span>
        <span style={{ fontSize: "16px", color: "#a02c3f " }}>Episodes :</span>{" "}
        <span style={{ color: "gray" }}> {dataAnime.episodes}</span>
        <div
          style={{
            display: "flex",
            marginTop: "2%",
            justifyContent: "space-around",
          }}
        >
          <span style={{ color: "#7dc20b" }}>{dataAnime.type}</span>
          {""} /<span style={{ color: "#7dc20b" }}>{dataAnime.source}</span>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <Title>
        <span>Próxima Temporada</span>
      </Title>

      <ContainerSwiperMedium>
        <Swiper
          className="swiper"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={3.9}
          navigation
        >
          {seasonsUpcoming.map((dataAnimeSeason) => (
            <SwiperSlide key={`${seasonsUpcoming_Id}_${dataAnimeSeason.id}`}>
              <Popover placement="top" content={content} title="Anime">
                <Link to={"/sinopse"}>
                  <ContainerSwiperSlide
                    onMouseEnter={() => setDataAnime(dataAnimeSeason)}
                  >
                    <Slide
                      onClick={() => setAnime(dataAnimeSeason)}
                      onMouseLeave={() => setDisPlayIcon("none")}
                      style={{
                        backgroundImage: `url(${dataAnimeSeason.image})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        width: "205px",
                        height: "100px",
                      }}
                    >
                      <PlayCircleOutlined
                        style={{
                          color: "red",
                          fontSize: "100px",
                          paddingTop: "1em",
                          display: `${displayIcon}`,
                        }}
                      />
                    </Slide>
                    <NameAnime>{dataAnimeSeason.title}</NameAnime>

                    <Description>
                      <Button> Detalhes </Button>
                    </Description>
                    <Description>
                      {favorites.find(
                        (favorite) => favorite.name === dataAnimeSeason.title
                      ) && (
                        <StarOutlined
                          style={{
                            color: "gold",
                            fontSize: "40px",
                            display: "flex",
                            justifyContent: "end",
                          }}
                        />
                      )}
                    </Description>
                  </ContainerSwiperSlide>
                </Link>
              </Popover>
            </SwiperSlide>
          ))}
        </Swiper>
      </ContainerSwiperMedium>
    </Container>
  );
};
export default SeasonUpcoming;
