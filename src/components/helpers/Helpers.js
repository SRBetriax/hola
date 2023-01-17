import React from "react";
import factorya from "../../assets/img/factorya.png";
import startup from "../../assets/img/startup-chile.png";
import contexto from "../../assets/img/contexto.png";
import nearshore from "../../assets/img/nearshore.png";
import entrepeneur from "../../assets/img/entrepeneur.png";
import radiolab from "../../assets/img/radiolab.png";
import wild from "../../assets/img/wild.png";
import tec from "../../assets/img/tecmonterrey.png";
import utecventures from "../../assets/img/utecventures.png";
import foundersinstitute from "../../assets/img/foundersinstitute.png";

//import Swiper from "react-id-swiper";
import { Swiper, SwiperSlide } from "swiper/react";

//import "swiper/swiper.scss";
import "swiper/css";
import { Autoplay } from "swiper";

export default function Helpers() {
  return (
    <article className="container-fluid helpers">
      <div className="row helpers-apoyo">
        <div className="col-12">
          <h2>Con el apoyo de:</h2>
          <div>
            <div className="d-md-flex img-fluid align-items-center justify-content-between">
              <img src={startup} alt="" />
              <img src={factorya} alt="" />
            </div>
            <div className="d-md-flex img-fluid align-items-center justify-content-between">
              <img src={utecventures} className="utec" alt="" />
              <img src={foundersinstitute} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="row helpers-brands">
        <div className="col-12">
          <h2>Betriax en los medios</h2>
        </div>
        <div className="col-12 images">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.contxto.com/es/colombia-es/15-fintechs-ganando-traccion-en-bogota/"
              >
                <img src={contexto} alt="" className="swiper-img" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://nearshoreamericas.com/scotiabank-selects-10-latam-fintech-startups-acceleration-program/"
              >
                <img src={nearshore} alt="" className="swiper-img" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.entrepreneur.com/article/338725"
              >
                <img src={entrepeneur} alt="" className="swiper-img" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/watch?v=3EBRn2D6o4U"
              >
                <img src={radiolab} alt="" className="swiper-img" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://wildentrepreneur.org/conoce-las-9-empresas-fintech-que-participaron-en-el-investor-day-de-factorya/"
              >
                <img src={wild} alt="" className="swiper-img" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://tec.mx/es/noticias/nacional/emprendedores/con-adn-emprendedor-las-startups-apoyadas-por-el-tec-y-scotiabank"
              >
                <img src={tec} alt="" className="swiper-img" />
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </article>
  );
}
