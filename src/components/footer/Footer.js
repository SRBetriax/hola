import LogoFooter from "../../icons/Landing/LogoFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Facebook from "../../icons/Footer/Facebook";
import Instagram from "../../icons/Footer/Instagram";
import Twitter from "../../icons/Footer/Twitter";
import Linkedin from "../../icons/Footer/Linkedin";
import Youtube from "../../icons/Footer/Youtube";

const Footer = () => {
  return (
    <footer className="container-fluid footer">
      <div className="row">

        <div className="col-12">
          <LogoFooter />
          <h3 className="legend">
            Betriax es un nuevo mercado de cambio de divisas donde los clientes
            determinan, entre ellos, la tasa de cambio en cada transacción.
          </h3>
          <h3 className="copyright">All © Copyright by Betriax. All Rights Reserved.</h3>
        </div>

        <div className="col-13">
          <h3 className="second-row">Ayuda</h3>
          <h3 className="second-row">Terminos y Condiciones</h3>
          <h3 className="second-row">Politicas de Privacidad</h3>
          <h3 className="second-row">Soporte Técnico</h3>
        </div>

        <div className="col-14">

          <div className="facebook-circle">
            <Facebook/>
          </div>
          <div className="instagram-circle">
            <Instagram/>
          </div>
          <div className="twitter-circle">
            <Twitter/>
          </div>
          <div className="linkedin-circle">
            <Linkedin  />
          </div>
          <div className="yt-circle">
            <Youtube/>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
