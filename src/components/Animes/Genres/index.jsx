import { useState } from "react";
import "./index.css";

const Genres = () => {
  const [color, setColor] = useState();
  const buttons = [
    {
      genre: "Acao",
      color: "#be5175",
      id: "genre1",
    },
    {
      genre: "Artes Marci...",
      color: "#14808c",
      id: "genre2",
    },
    {
      genre: "Aventura",
      color: "#ed874f",
      id: "genre3",
    },
    {
      genre: "Comedia",
      color: "#be5175",
      id: "genre4",
    },
    {
      genre: "Drama",
      color: "#6f72e3",
      id: "genre5",
    },
    {
      genre: "Ecchi",
      color: "#5eb6cc",
      id: "genre6",
    },
    {
      genre: "Escolar",
      color: "#5eb6cc",
      id: "genre7",
    },
    {
      genre: "Esporte",
      color: "#44dd4c",
      id: "genre8",
    },
    {
      genre: "Fantasia",
      color: "#bc6021",
      id: "genre9",
    },
    {
      genre: "Ficcao Cien..",
      color: "#ed874f",
      id: "genre10",
    },
    {
      genre: "Harem",
      color: "#c26ea2",
      id: "genre11",
    },
    {
      genre: "Mecha",
      color: "#44dd4c",
      id: "genre12",
    },
    {
      genre: "Misterio",
      color: "#ed874f",
      id: "genre13",
    },
    {
      genre: "Psicologico",
      color: "#c26ea2",
      id: "genre14",
    },
    {
      genre: "Romance",
      color: "#5eb6cc",
      id: "genre15",
    },
    {
      genre: "Seinen",
      color: "#3e9c7d",
      id: "genre16",
    },
    {
      genre: "Shounen",
      color: "#5eb6cc",
      id: "genre17",
    },
    {
      genre: "Slice of Life",
      color: "#3e9c7d",
      id: "genre18",
    },
    {
      genre: "Sobrenatural",
      color: "#5eb6cc",
      id: "genre19",
    },
    {
      genre: "Superpoderes",
      color: "#be5175",
      id: "genre19",
    },
    {
      genre: "Guerra",
      color: "#6f72e3",
      id: "genre20",
    },
  ];
  return (
    <div className="container-genres">
      <span style={{ color: `${color}` }}>GÊNEROS</span>
      <div className="container-button">
        {buttons.map(({ color, genre, id }) => (
          <button key={id} style={{ color: `${color}` }}>
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Genres;
