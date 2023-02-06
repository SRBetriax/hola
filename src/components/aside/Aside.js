import React from "react";
import logo from "../../assets/img/whiteLogo.png";

const Aside = () => {
  return (
    <aside className="aside">
      <img src={logo} alt="logo" className="logo" />
      <h1>Siempre puedes ganarle</h1>
      <h3>A las casas de cambio con Betriax</h3>
    </aside>
  );
};

export default Aside;
