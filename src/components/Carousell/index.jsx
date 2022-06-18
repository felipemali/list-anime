import {
  ClockCircleOutlined,
  CalendarOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import "./index.css";

import { useContext } from "react";
import { AuthContext } from "../../providers/auth";
import { Link } from "react-router-dom";

const Carousell = () => {
  const { animesSeasons, setAnime } = useContext(AuthContext);

  SwiperCore.use([Autoplay]);
  console.log(window.innerWidth);
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 6000,
        disableOnInteraction: true,
      }}
    >
      {animesSeasons?.map((dataAnimeSeason) => (
        <SwiperSlide key={dataAnimeSeason.id} style={{}}>
          {window.innerWidth > 768 ? (
            <div
              className="carousel-anime"
              style={{
                background: `url(${dataAnimeSeason.banner}) `,
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                height: "80vh",
              }}
            >
              <div className="gradient">
                <div className="carousel-data">
                  <span className="carousel-title-anime">
                    {dataAnimeSeason.title}
                  </span>
                  <br />
                  {window.innerWidth <= 768 ? (
                    ""
                  ) : (
                    <>
                      <span className="carousel-text-anime">
                        {dataAnimeSeason.synopsis}
                      </span>
                      <br />
                    </>
                  )}

                  <Link
                    to={"/sinopse"}
                    onClick={() => setAnime(dataAnimeSeason)}
                  >
                    <button className="carousel-button">
                      <PlayCircleOutlined
                        style={{
                          marginRight: "1rem",
                          fontSize: "1rem",
                          color: "red",
                        }}
                      />
                      {"Detalhes..."}
                    </button>
                  </Link>

                  <PlayCircleOutlined className="carousel-icon" />
                  <span style={{ color: "#fff", marginLeft: "1%" }}>
                    {dataAnimeSeason.type}
                  </span>

                  <ClockCircleOutlined className="carousel-icon" />
                  <span style={{ color: "#fff", marginLeft: "1%" }}>
                    {dataAnimeSeason.duration}
                  </span>
                  <CalendarOutlined className="carousel-icon" />
                  <span style={{ color: "#fff", marginLeft: "1%" }}>
                    {dataAnimeSeason.toYear}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="carousel-anime"
              style={{
                background: `url(${dataAnimeSeason.banner}) `,
                backgroundSize: "800px",
                height: "58vh",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="gradient">
                <div className="carousel-data">
                  <span className="carousel-title-anime">
                    {dataAnimeSeason.title}
                  </span>
                  <br />
                  {window.innerWidth <= 768 ? (
                    ""
                  ) : (
                    <>
                      <span className="carousel-text-anime">
                        {dataAnimeSeason.synopsis}
                      </span>
                      <br />
                    </>
                  )}

                  <Link
                    to={"/sinopse"}
                    onClick={() => setAnime(dataAnimeSeason)}
                  >
                    <button className="carousel-button">
                      <PlayCircleOutlined
                        style={{
                          marginRight: "1rem",
                          fontSize: "1rem",
                          color: "red",
                        }}
                      />
                      {"Detalhes..."}
                    </button>
                  </Link>

                  <PlayCircleOutlined className="carousel-icon" />
                  <span style={{ color: "#fff", marginLeft: "1%" }}>
                    {dataAnimeSeason.type}
                  </span>

                  <ClockCircleOutlined className="carousel-icon" />
                  <span
                    style={{
                      color: "#fff",
                      marginLeft: "1%",
                    }}
                  >
                    {dataAnimeSeason.duration}
                  </span>

                  <CalendarOutlined className="carousel-icon" />
                  <span style={{ color: "#fff", marginLeft: "1%" }}>
                    {dataAnimeSeason.toYear}
                  </span>
                </div>
              </div>
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousell;
