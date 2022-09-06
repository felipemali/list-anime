import React, { useContext, useState } from "react";
import { AuthContext } from "../../../providers/auth";
import { CaretRightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./index.css";
import { GetAnimesSeasons } from "../../../api/animes";
import { routes } from "../../../routes/routes";

const AnimesCalendar = () => {
  const { setAnime } = useContext(AuthContext);
  const [selectedDay, setSelectedDay] = useState();

  const animeSeason = GetAnimesSeasons();

  const animesCalendar_id = "calendar";
  const buttons = [
    { pt: "Segunda-feira", en: "Monday" },
    { pt: "Terça-feira", en: "Tuesdays" },
    { pt: "Quarta-feira", en: "Wednesdays" },
    { pt: "Quinta-feira", en: "Thursdays" },
    { pt: "Sexta-feira", en: "Fridays" },
    { pt: "Sábado", en: "Saturdays" },
    { pt: "Domingo", en: "Sunday" },
  ];
  const { path } = routes.infoAnime;

  return (
    <div className="animes-calendar">
      <div className="animes-calendar-title">Calendário da Semana</div>
      <div className="div-anime-calendar-buttons">
        <div className="anime-calendar-buttons">
          {buttons.map((button) => (
            <button onClick={() => setSelectedDay(button)}>{button.pt}</button>
          ))}
        </div>
        {selectedDay &&
          animeSeason
            .filter((anime) => anime.day === selectedDay.en)
            .map((anime) => {
              const { small_image, title } = anime;
              return (
                <div className="anime-calendar-animes">
                  <div>
                    <img src={small_image} alt="" />
                    <span>{title}</span>
                  </div>
                  <Link to={path} onClick={() => setAnime(anime)}>
                    <button>
                      <CaretRightOutlined style={{ fontSize: "17px" }} />
                      {""} Detalhes
                    </button>
                  </Link>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default AnimesCalendar;
