import axios from "axios";
import { useEffect, useState } from "react";

export const GetNewEpisodes = () => {
  const [newEpisodes, setNewEpisodes] = useState([]);

  useEffect(() => {
    axios.get("https://api.jikan.moe/v4/watch/episodes").then((response) => {
      const result = response.data.data.map((data) => {
        return {
          id: data.entry.mal_id,
          image: data.entry.images.jpg.image_url,
          small_image: data.entry.images.jpg.small_image_url,
          title: data.entry.title,
          image_large: data.entry.images.jpg.large_image_url,
          episodes: data.episodes[0].title,
        };
      });
      setNewEpisodes(result);
    });
  }, []);
  return newEpisodes;
};
