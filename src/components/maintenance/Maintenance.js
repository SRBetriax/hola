import React from "react";
import logoBetriax from "../../assets/img/logo.png";
import P2P from "../../assets/img/Plataforma1.png";
import { Link } from "react-router-dom";
import BarLoader from "react-spinners/BarLoader";

const Maintenance = () => {
  return (
    <div className="maintenance">
      <div className="card">
        <Link className="link-to-main" to={"/"}>
          <img alt="logo-betriax" className="logo-betriax" src={logoBetriax} />
        </Link>
        <h3>Página en mantenimiento</h3>
        
        <BarLoader
          color="#1243e3"
          cssOverride={{
            marginRight: "auto",
            marginLeft: "auto",
          }}
          height={4}
          speedMultiplier={0}
        />
      </div>
      <div className="blur"></div>
      <img alt="maintence-view" className="img-p2p" src={P2P} />
    </div>
  );
};

export default Maintenance;
