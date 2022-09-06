import axios from "axios";
import { useEffect, useState } from "react";

export const GetCharacter = (id) => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.jikan.moe/v4/anime/${id}/characters`)
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
  }, [id]);

  return character;
};
