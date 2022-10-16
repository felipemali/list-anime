import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { notification } from "antd";
import { GetAnimesSeasons } from "../api/animes";

export const AuthContext = createContext({});

const ProviderAnime = ({ children }) => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites") || "[]")
  );
  const [animesWatching, setAnimesWatching] = useState(
    JSON.parse(localStorage.getItem("watching") || "[]")
  );
  const [animesComplete, setAnimesComplete] = useState(
    JSON.parse(localStorage.getItem("complete") || "[]")
  );
  const [animesDrop, setAnimesDrop] = useState(
    JSON.parse(localStorage.getItem("drop") || "[]")
  );

  const [anime, setAnime] = useState([]);
  const [nameAnime, setNameAnime] = useState();
  const [search, setSearch] = useState([]);
  const [menuMobile, setMenuMobile] = useState("none");
  const [valueInputAnimes, setValueInputAnimes] = useState("");
  const [colorStar, setColorStar] = useState("");
  const [visibleMenuLateral, setVisibleMenuLateral] = useState(false);
  const [topAnimes, setTopAnimes] = useState([]);

  useEffect(() => {
    if (nameAnime) {
      axios
        .get(`https://api.jikan.moe/v4/anime?q=${nameAnime}`)
        .then((response) => {
          // const data = response.data.data[0].trailer.images.large_image_url;
          const data = response.data.data[0];

          // const result = response.data.data.map((data) => {
          //   return {
          //     image_large: data.trailer.images.large_image_url,
          //   };
          // });

          setAnime({
            banner: data.trailer.images.maximum_image_url,
            image: data.images.jpg.image_url,
            title: data.title,
            image_large: data.trailer.images.large_image_url,
            id: data.mal_id,
            synopsis: data.synopsis,
            duration: data.duration,
            trailer: data.trailer.embed_url,
            rank: data.rank,
            origin: data.broadcast.timezone,
            episodes: data.episodes,
            type: data.type,
            studio: data.studios.name,
            favorites: data.favorites,
            fromDay: data.aired.prop.from.day,
            fromMonth: data.aired.prop.from.month,
            fromYear: data.aired.prop.from.year,
            toDay: data.aired.prop.to.day,
            toMonth: data.aired.prop.to.month,
            toYear: data.aired.prop.to.year,
          });

          setSearch({
            // image: data.trailer.images.image_url,
            title: data.title,
            image: data.images.jpg.image_url,
            id: data.mal_id,
          });
        });
    }
  }, [nameAnime]);

  const showDrawerMenuLateral = () => {
    setVisibleMenuLateral(true);
  };
  const onCloseMenuLateral = () => {
    setVisibleMenuLateral(false);
  };

  const openNotification = (type, obj, e) => {
    notification[type]({
      message: `${obj.messagee}`,
      description: `${obj.descriptionn} `,
      e,
    });
  };
  const animes = (newAnime) => {
    if (favorites.find((favorite) => favorite.name === newAnime.name)) {
      openNotification(
        "error",
        {
          messagee: `${anime.title} já foi adicionado há lista de Preferidos`,
          descriptionn:
            "Para removê-lo vá há lista de preferidos na página Inicial",
        },
        "top"
      );
    } else {
      openNotification(
        "success",
        {
          messagee: `${anime.title}  Adicionado há lista Preferidos`,
          descriptionn: "Confira a lista de Favoritos na página Inicial",
        },
        "top"
      );

      setFavorites([...favorites, newAnime]);
      localStorage.setItem(
        "favorites",
        JSON.stringify([...favorites, newAnime])
      );
      setColorStar({ color: "gold", shadow: "1px 0.2px 5px 1px gold" });
    }
  };

  const watching = (newAnime) => {
    if (animesWatching.find((watching) => watching.name === newAnime.name)) {
      openNotification(
        "error",
        {
          messagee: `${anime.title} já foi adicionado há lista  Assistindo`,
          descriptionn: "Para removê-lo vá ao Menu na página Inicial",
        },
        "top"
      );
    } else {
      openNotification(
        "success",
        {
          messagee: `${anime.title}  Adicionado há lista Assistindo`,
          descriptionn: "Confira a lista  Assistindo na página Inicial",
        },
        "top"
      );

      setAnimesWatching([...animesWatching, newAnime]);
      localStorage.setItem(
        "watching",
        JSON.stringify([...animesWatching, newAnime])
      );
    }
  };
  const complete = (newAnime) => {
    if (animesComplete.find((complete) => complete.name === newAnime.name)) {
      openNotification(
        "error",
        {
          messagee: `${anime.title} já foi adicionado há lista de Completos`,
          descriptionn: "Para removê-lo vá ao Menu na página Inicial",
        },
        "top"
      );
    } else {
      openNotification(
        "success",
        {
          messagee: `${anime.title}  Adicionado há lista Completos`,
          descriptionn: "Confira a lista de Completos na página Inicial",
        },
        "top"
      );

      setAnimesComplete([...animesComplete, newAnime]);
      localStorage.setItem(
        "complete",
        JSON.stringify([...animesComplete, newAnime])
      );
    }
  };
  const drop = (newAnime) => {
    if (animesDrop.find((drop) => drop.name === newAnime.name)) {
      openNotification(
        "error",
        {
          messagee: `${anime.title} já foi adicionado há lista de Completos`,
          descriptionn: "Para removê-lo vá ao Menu na página Inicial",
        },
        "top"
      );
    } else {
      openNotification(
        "success",
        {
          messagee: `${anime.title}  Adicionado há lista Completos`,
          descriptionn: "Confira a lista de Completos na página Inicial",
        },
        "top"
      );

      setAnimesDrop([...animesDrop, newAnime]);
      localStorage.setItem("drop", JSON.stringify([...animesDrop, newAnime]));
    }
  };

  const randomAnime = () => {
    const random = Math.floor(Math.random() * GetAnimesSeasons().length);
    const randomm = GetAnimesSeasons()[random];

    setAnime(randomm);
  };

  const colors = [
    "#002545",
    "#14808c",
    "#ed874f",
    "#781e1a",
    "#6f72e3",
    "#674075 ",
    "#703064 ",
    "#2f091e ",
    "#bc6021",
    "#512948",
    "#122b4d",
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];

  return (
    <AuthContext.Provider
      value={{
        favorites,
        animesWatching,
        animesComplete,
        animesDrop,
        anime,
        search,
        nameAnime,
        menuMobile,
        valueInputAnimes,
        colorStar,
        randomColor,
        visibleMenuLateral,
        topAnimes,
        setAnime,
        setNameAnime,
        setFavorites,
        setSearch,
        setAnimesWatching,
        setAnimesComplete,
        setValueInputAnimes,
        setAnimesDrop,
        animes,
        watching,
        complete,
        drop,
        showDrawerMenuLateral,
        onCloseMenuLateral,
        randomAnime,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default ProviderAnime;
