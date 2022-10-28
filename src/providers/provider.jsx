import React, { createContext, useState } from "react";
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
  const [search, setSearch] = useState([]);
  const [valueInputAnimes, setValueInputAnimes] = useState("");
  const [colorStar, setColorStar] = useState("");
  const [visibleMenuLateral, setVisibleMenuLateral] = useState(false);
  const [topAnimes, setTopAnimes] = useState([]);

  const animesSeason = GetAnimesSeasons();
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
    const random = Math.floor(Math.random() * animesSeason.length);
    const randomm = animesSeason[random];
    setAnime(randomm);
  };
  console.log(search);

  return (
    <AuthContext.Provider
      value={{
        favorites,
        animesWatching,
        animesComplete,
        animesDrop,
        anime,
        search,
        valueInputAnimes,
        colorStar,
        visibleMenuLateral,
        topAnimes,
        setAnime,
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
