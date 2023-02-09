import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/whiteLogo.png";

const Aside = () => {
  return (
    <aside className="aside">
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <h1>Siempre puedes ganarle</h1>
      <h3>A las casas de cambio con Betriax</h3>
    </aside>
  );
};

export default Aside;
