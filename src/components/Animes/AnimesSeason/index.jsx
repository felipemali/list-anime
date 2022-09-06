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
import { ContainerAnimeSeason } from "../../../styles/SwiperStyles/ContainerAnimeSeason/styles";
import { Link } from "react-router-dom";
import { StarOutlined } from "@ant-design/icons";
import { Popover } from "antd";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { AuthContext } from "../../../providers/auth";
import { GetAnimesSeasons } from "../../../api/animes";
import { routes } from "../../../routes/routes";

const Animes = () => {
  const { setAnime, valueInputAnimes, favorites } = useContext(AuthContext);

  const [color, setColor] = useState();

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
  const animesSeason = GetAnimesSeasons();

  const filter = animesSeason.filter((anime) => {
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

  const randomColor = () => {
    const colors = [
      "#002545",
      "#14808c", //
      "#ed874f",
      "#781e1a",
      "#6f72e3",
      "#674075 ",
      "#703064 ",
      "#2f091e ", //
      "#bc6021",
      "#512948", //
      "#122b4d",
    ];

    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];

    setColor(randomColor);
  };

  return (
    <Container background={color}>
      <Title>
        <span>Animes da Temporada</span>
      </Title>

      <ContainerAnimeSeason>
        <Swiper
          style={{
            heigth: "400px",
            width: "69%",
            marginLeft: "2%",
            marginTop: "3%",
          }}
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={4}
          navigation
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
        >
          {filter.map((dataAnimeSeason) => {
            const { id, image, title } = dataAnimeSeason;
            return (
              <>
                <SwiperSlide key={`${idAnime}_${id}`}>
                  <Popover placement="top" content={content} title="Anime">
                    <Link to={routes.infoAnime.path}>
                      <ContainerSwiperSlide
                        onMouseEnter={() => setDataAnime(dataAnimeSeason)}
                      >
                        <Slide
                          onClick={() => setAnime(dataAnimeSeason)}
                          style={{
                            backgroundImage: `url(${image})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            width: "205px",
                            height: "100px",
                            opacity: "0.9",
                          }}
                        >
                          <Description>
                            {favorites.find(({ id: idd }) => idd === id) && (
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
                        <NameAnime>{title}</NameAnime>

                        <Description>
                          <Button> Detalhes </Button>
                        </Description>
                      </ContainerSwiperSlide>
                    </Link>
                  </Popover>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
        {window.innerWidth > 768 ? (
          <ContainerGenres>
            <TitleGenres color={color}>GÊNEROS</TitleGenres>
            <button
              style={{ color: "black", cursor: "pointer" }}
              onClick={randomColor}
            >
              change color
            </button>
            <ContainerButton>
              {buttons.map(({ color, genre }) => (
                <Genres style={{ color: color }}>{genre}</Genres>
              ))}
            </ContainerButton>
          </ContainerGenres>
        ) : (
          ""
        )}
      </ContainerAnimeSeason>
    </Container>
  );
};
export default Animes;
