import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { notification } from "antd";

const theme = {
  swiper: {
    width: 260,
    height: 450,
    border: "10px solid #515255",
    background: "#515255",
    border_radius: "10px 10px",
  },
};

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
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

  const [animesSeasons, setAnimesSeasons] = useState([]);
  const [seasonsUpcoming, setSeasonsUpcoming] = useState([]);
  const [anime, setAnime] = useState([]);
  const [character, setCharacter] = useState([]);
  const [nameAnime, setNameAnime] = useState();
  const [search, setSearch] = useState([]);
  const [menuMobile, setMenuMobile] = useState("none");
  // const [imgs, setImgs] = useState([]);
  const [valueInputAnimes, setValueInputAnimes] = useState("");
  const [colorStar, setColorStar] = useState("");
  const [animesRecommended, setAnimesRecommended] = useState([]);
  const [newEpisodes, setNewEpisodes] = useState([]);
  // const [animesSundays, setAnimesSundays] = useState([]);
  const [visible, setVisible] = useState(false);
  const [visibleMenuLateral, setVisibleMenuLateral] = useState(false);
  const [topAnimes, setTopAnimes] = useState([]);

  useEffect(() => {
    axios.get("https://api.jikan.moe/v4/seasons/now").then((response) => {
      const result = response.data.data.map((data) => {
        return {
          image: data.images.jpg.image_url,
          small_image: data.images.jpg.small_image_url,
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
          source: data.source,
          // studio: data[0].studios[0].name,
          favorites: data.favorites,
          fromDay: data.aired.prop.from.day,
          fromMonth: data.aired.prop.from.month,
          fromYear: data.aired.prop.from.year,
          toDay: data.aired.prop.to.day,
          toMonth: data.aired.prop.to.month,
          toYear: data.aired.prop.to.year,
          genres: data.producers,
          day: data.broadcast.day,
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
          small_image: data.entry.images.jpg.small_image_url,
          title: data.entry.title,
          image_large: data.entry.images.jpg.large_image_url,
          episodes: data.episodes[0].title,
        };
      });

      setNewEpisodes(resultNewEpisodes);
    });

    axios.get("https://api.jikan.moe/v4/seasons/upcoming").then((response) => {
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
          // studio: data[0].studios[0].name,
          favorites: data.favorites,
          fromDay: data.aired.prop.from.day,
          fromMonth: data.aired.prop.from.month,
          fromYear: data.aired.prop.from.year,
          toDay: data.aired.prop.to.day,
          toMonth: data.aired.prop.to.month,
          toYear: data.aired.prop.to.year,
        };
      });
      setSeasonsUpcoming(result);
    });

    axios.get("https://api.jikan.moe/v4/top/anime").then((response) => {
      const result = response.data.data.map((data) => {
        return {
          image: data.images.jpg.image_url,
          small_image: data.images.jpg.small_image_url,
          image_large: data.images.jpg.large_image_url,
          banner: data.trailer.images.maximum_image_url,
          title: data.title,
          title_japonese: data.title_japanese,
          id: data.mal_id,
          trailer: data.trailer.embed_url,
          synopsis: data.synopsis,
          duration: data.duration,
          rank: data.rank,
          popularity: data.popularity,
          members: data.members,
          origin: data.broadcast.timezone,
          episodes: data.episodes,
          type: data.type,
          source: data.source,
          // studio: data[0].studios[0].name,
          favorites: data.favorites,
          fromDay: data.aired.prop.from.day,
          fromMonth: data.aired.prop.from.month,
          fromYear: data.aired.prop.from.year,
          toDay: data.aired.prop.to.day,
          toMonth: data.aired.prop.to.month,
          toYear: data.aired.prop.to.year,
          genres: data.producers,
          day: data.broadcast.day,
        };
      });
      setTopAnimes(result);
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

  const menuSx = () => {
    menuMobile === "none" ? setMenuMobile("inline") : setMenuMobile("none");
  };

  const onClose = () => {
    setVisible(false);
  };
  const showDrawer = () => {
    setVisible(true);
  };
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
    const random = Math.floor(Math.random() * animesSeasons.length);
    const randomm = animesSeasons[random];

    setAnime(randomm);
  };

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

  

  return (
    <AuthContext.Provider
      value={{
        animesSeasons,
        favorites,
        animesWatching,
        animesComplete,
        animesDrop,
        anime,
        search,
        character,
        nameAnime,
        menuMobile,
        // imgs,
        valueInputAnimes,
        colorStar,
        animesRecommended,
        newEpisodes,
        seasonsUpcoming,
        // animesSundays,
        theme,
        randomColor,
        visible,
        visibleMenuLateral,
        topAnimes,

        // deleteFavorite,

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
        menuSx,
        onClose,
        showDrawer,
        showDrawerMenuLateral,
        onCloseMenuLateral,
        randomAnime,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
