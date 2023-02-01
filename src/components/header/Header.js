import React, { useState, useRef, useCallback, useEffect } from "react";
import { useIntersection } from "react-use";
import LogoS from "../../icons/Landing/LogoS";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuVisible, setmenuVisible] = useState(false);
  const [fade, setfade] = useState("");
  const sectionRef = useRef();

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  const fadeOut = useCallback(() => {
    setfade("scrolled");
  }, []);
  const fadeIn = useCallback(() => {
    setfade("");
  }, []);
  useEffect(() => {
    intersection &&
    intersection.intersectionRatio < 0.1 &&
    window.innerWidth > 1000
      ? fadeOut()
      : fadeIn();
  });

  return (
    <>
      <header className={"container-fluid navigation " + fade}>
        <nav className="row justify-content-between">
          <div className="col-lg-3 col-6">
            <a href="https://www.betriax.com/">
              <LogoS />
            </a>
          </div>
          {window.innerWidth < 1000 && 
          // !menuVisible ?
           (
            <div className="col-6 btn-menu">
              <span onClick={() => setmenuVisible(!menuVisible)} className="btn-bar ">
                <FontAwesomeIcon icon={faBars}  className="bar-icon "/>
              </span>
            </div>
          )
          // :
          // <div className="col-6 btn-menu">
          //   <span onClick={() => setmenuVisible(!menuVisible)}>
          //     <FontAwesomeIcon icon={faXmark}  className="close-icon "/>
          //   </span>
          // </div>
        }
          <ul
            className={
              "col-lg-8 col-6 d-flex justify-content-between mobile" 
              +(menuVisible ? " active" : "")
            }
          >
            <li className="header-link-box ">
              <a href="#porque-betriax">¿Qué es Betriax?</a>
            </li>
            <li className="header-link-box ">
              <a href="#producto">Beneficios</a>
            </li>
            <li className="header-link-box ">
              <a href="#nosotros">Nosotros</a>
            </li>
            <li className="header-link-box ">
              <a href="#preguntas-frecuentes">Preguntas frecuentes</a>
            </li>
            <li className="header-link-box ">
              <a href="#blog">Blog</a>
            </li>
            <li className="header-link-box cta personas">
              <Link to="/sign/login">Iniciar sesión</Link>
            </li>
            <li className="header-link-box cta">
              <Link to="/sign/register">Registrate</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="spacing" ref={sectionRef}></div>
    </>
  );
};

export default Header;
