import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { notification } from "antd";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites") || [])
  );
  const [animesSeasons, setAnimesSeasons] = useState([]);
  const [anime, setAnime] = useState([]);
  const [character, setCharacter] = useState([]);
  const [nameAnime, setNameAnime] = useState("");
  const [menuMobile, setMenuMobile] = useState("none");
  const [imgs, setImgs] = useState([]);
  const [valueInputAnimes, setValueInputAnimes] = useState("");
  const [colorStar, setColorStar] = useState("");
  const [animesRecommended, setAnimesRecommended] = useState([]);
  const [newEpisodes, setNewEpisodes] = useState([]);

  useEffect(() => {
    axios.get("https://api.jikan.moe/v4/seasons/now").then((response) => {
      const result = response.data.data.map((data) => {
        return {
          image: data.images.jpg.image_url,
          image_large: data.images.jpg.large_image_url,
          banner: data.trailer.images.maximum_image_url,
          title: data.title,
          title_japonese: data.title_japanese,
          id: data.mal_id,
          trailer: data.trailer.embed_url,
          synopsis: data.synopsis,
          duration: data.duration,
          rank: data.rank,
          origin: data.broadcast.timezone,
          episodes: data.episodes,
          type: data.type,
          studio: data.studios[0].name,
          favorites: data.favorites,
          fromDay: data.aired.prop.from.day,
          fromMonth: data.aired.prop.from.month,
          fromYear: data.aired.prop.from.year,
          toDay: data.aired.prop.to.day,
          toMonth: data.aired.prop.to.month,
          toYear: data.aired.prop.to.year,
        };
      });
      setAnimesSeasons(result);
    });
    axios
      .get("https://api.jikan.moe/v4/recommendations/anime")
      .then((response) => {
        const animesRecommended = response.data.data.map((data) => {
          return {
            image: data.entry[0].images.jpg.image_url,
            image_large: data.entry[0].images.jpg.large_image_url,
            title: data.entry[0].title,
            id: data.mal_id,
            date: data.date,
            username: data.user.username,
          };
        });
        setAnimesRecommended(animesRecommended);
      });
    axios.get("https://api.jikan.moe/v4/watch/episodes").then((response) => {
      const resultNewEpisodes = response.data.data.map((data) => {
        return {
          id: data.entry.mal_id,
          image: data.entry.images.jpg.image_url,
          title: data.entry.title,
          image_large: data.entry.images.jpg.large_image_url,
        };
      });
      setNewEpisodes(resultNewEpisodes);
    });
  }, []);

  useEffect(() => {
    axios
      .get(`https://api.jikan.moe/v4/anime/${anime.id}/characters`)
      .then((response) => {
        const result = response.data.data.map((character) => {
          return {
            character: character.character.images.jpg.image_url,
            name: character.character.name,
            id: character.character.mal_id,
          };
        });
        setCharacter(result.slice(1, 8));
      });
  }, [anime]);

  useEffect(() => {
    axios
      .get(`https://api.jikan.moe/v4/anime?q=${nameAnime}`)
      .then((response) => {
        const data = response.data.data[0];
        // const result = response.data.data.map((data) => {

        setAnime({
          banner: data.trailer.images.maximum_image_url,
          image: data.trailer.images.image_url,
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
      });
  }, [nameAnime]);

  const menuSx = () => {
    menuMobile === "none" ? setMenuMobile("inline") : setMenuMobile("none");
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

  return (
    <AuthContext.Provider
      value={{
        animesSeasons: animesSeasons,
        favorites: favorites,
        anime: anime,
        character: character,
        nameAnime: nameAnime,
        menuMobile: menuMobile,
        imgs: imgs,
        valueInputAnimes: valueInputAnimes,
        colorStar: colorStar,
        animesRecommended: animesRecommended,
        newEpisodes: newEpisodes,
        // deleteFavorite,
        setAnime,
        setNameAnime,
        setFavorites,
        setValueInputAnimes,
        animes,
        menuSx,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
