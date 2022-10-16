import axios from "axios";
import { useEffect, useState } from "react";

export const GetAnimesSeasons = () => {
  const [animesSeasons, setAnimesSeasons] = useState([]);
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
  }, []);
  return animesSeasons;
};
export const GetAnimesRecommended = () => {
  const [recommended, setRecommended] = useState([]);
  useEffect(() => {
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
        setRecommended(animesRecommended);
      });
  }, []);
  return recommended;
};

export const GetAnimesNextSeason = () => {
  const [nextSeason, setNextSeason] = useState([]);
  useEffect(() => {
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
          //studio: data[0].studios[0].name,
          favorites: data.favorites,
          fromDay: data.aired.prop.from.day,
          fromMonth: data.aired.prop.from.month,
          fromYear: data.aired.prop.from.year,
          toDay: data.aired.prop.to.day,
          toMonth: data.aired.prop.to.month,
          toYear: data.aired.prop.to.year,
        };
      });
      setNextSeason(result);
    });
  }, []);
  return nextSeason;
};

export const GetTopAnimes = () => {
  const [topAnimes, setTopAnimes] = useState([]);
  useEffect(() => {
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
          source: data.source, //         // studio: data[0].studios[0].name,
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
  });
  return topAnimes;
};

export const SearchAnime = (nameAnime) => {
  const [foundAnime, setFoundAnime] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.jikan.moe/v4/anime?q=${nameAnime}`)
      .then((response) => {
        const result = response.data.data.map((data) => ({
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
        }));
        setFoundAnime(result);
      });
  });

  return foundAnime;
};

export const GetEpisodes = (id) => {
  const [episodes, setEpisodes] = useState([]);
  useEffect(() => {
    if (id) {
      axios
        .get(`https://api.jikan.moe/v4/anime/${id}/videos`)
        .then((response) => {
          const result = response.data.data.episodes?.map((ep) => {
            return {
              episodio: ep.mal_id,
              images: ep.images.jpg.image_url,
            };
          });
          setEpisodes(result.reverse());
        });
    }
  }, [id !== undefined]);

  return episodes;
};
