import React from "react";
import plataforma from "../../assets/img/Plataforma1.png";
export default function Description1() {
  return (
    <article className="container-fluid desc-1" id="producto">
      <div className="row">
        <div className="col-12">
          <h2 className="desc1-title">
            Ayudamos a personas y empresas a obtener más
            <br className="desktop" /> cada vez que venden o compran dólares.
          </h2>
        </div>
      </div>
      <div className="row content">
        <div className="col-lg-4 col-12 desc1-text">
          <p>
            Somos el punto de encuentro para que obtengas el máximo valor por
            tus dólares de una manera eficiente, simple y segura.
            <br />
            <br />
            El corazón de nuestro mercado son las personas y las empresas.
            Creamos tecnología accesible para conectarlas entre ellas, en un
            entorno de confianza y alta transparencia.
          </p>
        </div>
        <div className="col-lg-8 col-12 desc1-image">
          <img
            className=""
            src={plataforma}
            alt="Plataforma de Betriax en el marketplace"
          />
        </div>
      </div>
    </article>
  );
}
