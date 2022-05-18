import React, { useContext, useState } from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Container } from "../../../styles/Container/styles";
import { Title } from "../../../styles/StylesBasics/Title/styles";
import { ContainerSwiper } from "../../../styles/SwiperStyles/ContainerSwiper/styles";
import { ContainerSwiperSlide } from "../../../styles/SwiperStyles/ContainerSwiperSlide/styles";
import { Button } from "../../../styles/StylesBasics/Button/styles";
import { Slide } from "../../../styles/SwiperStyles/Slide/styles";
import { NameAnime } from "../../../styles/DescriptionAnime/NameAnime/styles";
import { Description } from "../../../styles/DescriptionAnime/Description/styles";
import { ContainerGenres } from "../../../styles/Genres/ContainerGenres/styles";
import { TitleGenres } from "../../../styles/Genres/TitleGenres/styles";
import { ContainerButton } from "../../../styles/StylesBasics/ContainerButton/styles";
import { Genres } from "../../../styles/Genres/GenresItem/styles";

import { Link } from "react-router-dom";
import { StarOutlined } from "@ant-design/icons";
import { Popover } from "antd";

import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";

import { AuthContext } from "../../../providers/auth";

const Animes = () => {
  const { animesSeasons, setAnime, valueInputAnimes, favorites } =
    useContext(AuthContext);

  const [dataAnime, setDataAnime] = useState([]);
  const idAnime = "Animes";
  const buttons = [
    {
      genre: "Acao",
      color: "#be5175",
    },
    {
      genre: "Artes Marci...",
      color: "#14808c",
    },
    {
      genre: "Aventura",
      color: "#ed874f",
    },
    {
      genre: "Comedia",
      color: "#be5175",
    },
    {
      genre: "Drama",
      color: "#6f72e3",
    },
    {
      genre: "Ecchi",
      color: "#5eb6cc",
    },
    {
      genre: "Escolar",
      color: "#5eb6cc",
    },
    {
      genre: "Esporte",
      color: "#44dd4c",
    },
    {
      genre: "Fantasia",
      color: "#bc6021",
    },
    {
      genre: "Ficcao Cien..",
      color: "#ed874f",
    },
    {
      genre: "Harem",
      color: "#c26ea2",
    },
    {
      genre: "Mecha",
      color: "#44dd4c",
    },
    {
      genre: "Misterio",
      color: "#ed874f",
    },
    {
      genre: "Psicologico",
      color: "#c26ea2",
    },
    {
      genre: "Romance",
      color: "#5eb6cc",
    },
    {
      genre: "Seinen",
      color: "#3e9c7d",
    },
    {
      genre: "Shounen",
      color: "#5eb6cc",
    },
    {
      genre: "Slice of Life",
      color: "#3e9c7d",
    },
    {
      genre: "Sobrenatural",
      color: "#5eb6cc",
    },
    {
      genre: "Superpoderes",
      color: "#be5175",
    },
    {
      genre: "Guerra",
      color: "#6f72e3",
    },
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
  ];

  SwiperCore.use([Autoplay]);

  const filter = animesSeasons.filter((anime) => {
    return anime.title.toLowerCase().includes(valueInputAnimes);
  });
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
        <span>Animes da Temporada</span>
      </Title>

      <ContainerSwiper>
        <Swiper
          style={{
            heigth: "400px",
            width: "70%",
            marginLeft: "2%",
            marginTop: "3%",
          }}
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={2}
          slidesPerView={4}
          navigation
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
        >
          {filter.map((dataAnimeSeason) => (
            <SwiperSlide key={`${idAnime}_${dataAnimeSeason.id}`}>
              <Popover placement="rightTop" content={content} title="Anime">
                <Link to={"/sinopse"}>
                  <ContainerSwiperSlide
                    onMouseEnter={() => setDataAnime(dataAnimeSeason)}
                  >
                    <Slide
                      onClick={() => setAnime(dataAnimeSeason)}
                      style={{
                        backgroundImage: `url(${dataAnimeSeason.image})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        width: "205px",
                        height: "100px",
                        opacity: "0.9",
                      }}
                    >
                      <Description>
                        {favorites.find(
                          (favorite) => favorite.id === dataAnimeSeason.id
                        ) && (
                          <StarOutlined
                            style={{
                              color: "#fffb57",
                              fontSize: "30px",
                              display: "flex",
                              justifyContent: "end",
                            }}
                          />
                        )}
                      </Description>
                    </Slide>
                    <NameAnime>{dataAnimeSeason.title}</NameAnime>

                    <Description>
                      <Button> Detalhes </Button>
                    </Description>
                  </ContainerSwiperSlide>
                </Link>
              </Popover>
            </SwiperSlide>
          ))}
        </Swiper>
        <ContainerGenres>
          <TitleGenres>GÊNEROS</TitleGenres>{" "}
          <ContainerButton>
            {buttons.map((button) => (
              <Genres style={{ color: button.color }}>{button.genre}</Genres>
            ))}
          </ContainerButton>
        </ContainerGenres>
      </ContainerSwiper>
    </Container>
  );
};
export default Animes;
