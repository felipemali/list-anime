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

import { Link } from "react-router-dom";
import { PlayCircleOutlined, StarOutlined } from "@ant-design/icons";
import { Popover } from "antd";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";

import { AuthContext } from "../../../providers/auth";

const AnimesRecommended = () => {
  const { animesRecommended, setNameAnime, favorites } =
    useContext(AuthContext);

  const [dataAnime, setDataAnime] = useState([]);

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
        <span>Animes Recomendados</span>
      </Title>

      <ContainerSwiperMedium>
        <Swiper
          style={{ heigth: "400px" }}
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={3.9}
          navigation
        >
          {animesRecommended.map((recommended) => (
            <>
              {/* aqui tem um if */}

              {window.innerWidth <= 768 ? (
                <SwiperSlide style={{ marginLeft: "50%" }}>
                  <Popover placement="top" content={content} title="Anime">
                    <Link to={"/sinopse"}>
                      <ContainerSwiperSlide
                        onMouseEnter={() => setDataAnime(recommended)}
                      >
                        <Slide
                          onClick={() => setNameAnime(recommended.title)}
                          // onMouseLeave={() => setDisPlayIcon("inline")}
                          style={{
                            backgroundImage: `url(${recommended.image})`,
                          }}
                        >
                          {/* <PlayCircleOutlined /> */}
                        </Slide>
                        <Description>
                          {favorites.find(
                            (favorite) => favorite.name === recommended.title
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
                        <NameAnime>{recommended.title}</NameAnime>

                        <Description>
                          <Button> Detalhes </Button>
                        </Description>
                      </ContainerSwiperSlide>
                    </Link>
                  </Popover>
                </SwiperSlide>
              ) : (
                <SwiperSlide>
                  <Popover placement="top" content={content} title="Anime">
                    <Link to={"/sinopse"}>
                      <ContainerSwiperSlide
                        onMouseEnter={() => setDataAnime(recommended)}
                      >
                        <Slide
                          onClick={() => setNameAnime(recommended.title)}
                          // onMouseLeave={() => setDisPlayIcon("inline")}
                          style={{
                            backgroundImage: `url(${recommended.image})`,
                          }}
                        >
                          {/* <PlayCircleOutlined /> */}
                        </Slide>
                        <Description>
                          {favorites.find(
                            (favorite) => favorite.name === recommended.title
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
                        <NameAnime>{recommended.title}</NameAnime>

                        <Description>
                          <Button> Detalhes </Button>
                        </Description>
                      </ContainerSwiperSlide>
                    </Link>
                  </Popover>
                </SwiperSlide>
              )}
            </>
          ))}
        </Swiper>
      </ContainerSwiperMedium>
    </Container>
  );
};
export default AnimesRecommended;
