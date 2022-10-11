import React, { useContext, useState } from "react";
import { AuthContext } from "../../../providers/auth";
import { CaretRightOutlined, ContactsOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { GetAnimesSeasons } from "../../../api/animes";
import { routes } from "../../../routes/routes";
import "./index.css";

const AnimesCalendar = () => {
  const { setAnime } = useContext(AuthContext);
  const [selectedDay, setSelectedDay] = useState();
  const animeSeason = GetAnimesSeasons();
  const buttons = [
    { pt: "Segunda", en: "Monday", id: "btMonday" },
    { pt: "Terça", en: "Tuesdays", id: "btTuesdays" },
    { pt: "Quarta", en: "Wednesdays", id: "btWednesdays" },
    { pt: "Quinta", en: "Thursdays", id: "btThursdays" },
    { pt: "Sexta", en: "Fridays", id: "btFridays" },
    { pt: "Sábado", en: "Saturdays", id: "btSaturdays" },
    { pt: "Domingo", en: "Sunday", id: "btSunday" },
  ];
  const { path } = routes.infoAnime;

  return (
    <div className="animes-calendar">
      <h1 className="animes-calendar-title">Calendário da Semana</h1>
      <div className="div-anime-calendar-buttons">
        <div className="anime-calendar-buttons">
          {buttons.map((button) => (
            <button key={button.id} onClick={() => setSelectedDay(button)}>
              {button.pt}
            </button>
          ))}
        </div>
        {selectedDay &&
          animeSeason
            .filter((anime) => anime.day === selectedDay.en)
            .map((anime) => {
              const { small_image, title, id } = anime;
              console.log(id);
              return (
                <div key={id} className="anime-calendar-animes">
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
