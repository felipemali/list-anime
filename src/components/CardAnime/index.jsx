import "./index.css";

const CardAnime = ({ img, title }) => {
  return (
    <div
      className="card-anime"
      //   onMouseEnter={() => setDataAnime(newEpisodes)}
    >
      <div
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></div>

      <span>{title}</span>
      <button>Detalhes</button>
    </div>
  );
};
export default CardAnime;
