import React, { useContext, useState } from "react";
import { AuthContext } from "../../../providers/auth";
import { CaretRightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./index.css";

const AnimesCalendar = () => {
  const { animesSeasons, setAnime } = useContext(AuthContext);
  const [selectedDay, setSelectedDay] = useState();

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
          animesSeasons
            .filter((anime) => anime.day === selectedDay.en)
            .map((anime) => (
              <div className="anime-calendar-animes">
                <div>
                  <img src={anime.small_image} alt="" />
                  <span>{anime.title}</span>
                </div>
                <Link to="/sinopse" onClick={() => setAnime(anime)}>
                  <button>
                    <CaretRightOutlined style={{ fontSize: "17px" }} />
                    {""} Detalhes
                  </button>
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
};

export default AnimesCalendar;
