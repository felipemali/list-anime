import { Button, Carousel } from "antd";
import {
  ClockCircleOutlined,
  CalendarOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";
import { useContext } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./index.css";
import { AuthContext } from "../../providers/auth";
import LateralMenu from "../LateralMenu";
const Carousell = () => {
  const { animesSeasons } = useContext(AuthContext);

  SwiperCore.use([Autoplay]);
  return (
    <Swiper
      style={{ height: "80vh" }}
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      autoplay={{
        delay: 6000,
        disableOnInteraction: true,
      }}
    >
      {animesSeasons?.map((dataAnimeSeason) => (
        <SwiperSlide key={dataAnimeSeason.id}>
          <div
            // onMouseEnter={() => setDisPlayIcon("block")}

            className="carousel-anime"
            style={{
              background: `url(${dataAnimeSeason.banner}) `,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100%",
              width: "100%",
              height: "100%",
              margin: "auto",
            }}
          >
            <div className="gradient">
              <div className="carousel-data">
                <span className="carousel-title-anime">
                  {dataAnimeSeason.title}
                </span>
                <br />
                <span className="carousel-text-anime">
                  {dataAnimeSeason.synopsis}
                </span>
                <br />
                <button className="carousel-button">{"Saiba Mais..."}</button>

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
          {/* <span className="animes-name">{dataAnimeSeason.title}</span> */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousell;
