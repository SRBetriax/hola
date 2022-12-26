import React, { useEffect, useRef } from "react";
import factorya from "../img/factorya.png";
import startup from "../img/startup-chile.png";
import contexto from "../img/contexto.png";
import nearshore from "../img/nearshore.png";
import entrepeneur from "../img/entrepeneur.png";
import radiolab from "../img/radiolab.png";
import wild from "../img/wild.png";
import tec from "../img/tecmonterrey.png";
import utecventures from "../img/utecventures.png";
import foundersinstitute from "../img/foundersinstitute.png";
//import Swiper from "react-id-swiper";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
//import "swiper/swiper.scss";

export default function Helpers() {
  const gallerySwiperRef = useRef(null);
  const params = {
    slidesPerView: window.innerWidth > 800 ? 4.5 : 1.8,
    spaceBetween: window.innerWidth > 800 ? 100 : 30,
    slidesPerGroup: 1,
    loop: true,
  };

  useEffect(() => {
    const gallerySwiper = gallerySwiperRef.current.swiper;
    setInterval(() => {
      gallerySwiper.slideNext(500, false);
    }, 2000);
  }, []);
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
          <Swiper {...params} ref={gallerySwiperRef}>
          <SwiperSlide>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.contxto.com/es/colombia-es/15-fintechs-ganando-traccion-en-bogota/"
              >
              <img src={contexto} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://nearshoreamericas.com/scotiabank-selects-10-latam-fintech-startups-acceleration-program/"
              >
              <img src={nearshore} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.entrepreneur.com/article/338725"
              >
              <img src={entrepeneur} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/watch?v=3EBRn2D6o4U"
              >
              <img src={radiolab} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wildentrepreneur.org/conoce-las-9-empresas-fintech-que-participaron-en-el-investor-day-de-factorya/"
              >
              <img src={wild} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://tec.mx/es/noticias/nacional/emprendedores/con-adn-emprendedor-las-startups-apoyadas-por-el-tec-y-scotiabank"
              >
              <img src={tec} alt="" />
            </a>
          </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </article>
  );
}
