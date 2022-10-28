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
import "./responsive.css";
import { useContext } from "react";
import { AuthContext } from "../../providers/provider";
import { Link } from "react-router-dom";
import { GetAnimesSeasons } from "../../api/animes";
import { routes } from "../../routes/routes";
import { Button } from "antd";

const Carousel = () => {
  const { setAnime } = useContext(AuthContext);

  const animeSeason = GetAnimesSeasons();
  const { path } = routes.infoAnime;

  SwiperCore.use([Autoplay]);
  return (
    <Swiper
      className="carousel-anime-swiper"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 6000,
        disableOnInteraction: true,
      }}
    >
      {animeSeason?.map((dataAnimeSeason) => {
        const { id, banner, title, synopsis, type, duration, toYear } =
          dataAnimeSeason;
        return (
          <SwiperSlide key={`carousel-${id}`}>
            <div
              className="carousel-anime"
              style={{
                background: `url(${banner}) `,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100%",
              }}
            >
              <div className="gradient">
                <div className="carousel-data">
                  <span className="carousel-title-anime">{title}</span>
                  <br />
                  <>
                    <span className="carousel-text-anime">{synopsis}</span>
                    <br />
                  </>
                  <div className="carousel-details">
                    <Link to={path} onClick={() => setAnime(dataAnimeSeason)}>
                      {/* <button className="carousel-button">
                        <PlayCircleOutlined className="icon-play" />
                        {"Detalhes..."}
                      </button> */}

                      <Button className="carousel-button ">
                        <PlayCircleOutlined className="icon-play" />
                        Detalhes
                      </Button>
                    </Link>
                    <PlayCircleOutlined className="carousel-icon" />
                    <span className="carousel-data">{type}</span>
                    <ClockCircleOutlined className="carousel-icon" />
                    <span className="carousel-data">{duration}</span>
                    <CalendarOutlined className="carousel-icon" />
                    <span className="carousel-data">{toYear}</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Carousel;
