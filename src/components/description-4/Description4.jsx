import React from "react";

export default function Description4() {
  return (
    <article className="container-fluid desc-4">
      <div className="row">
        <div className="desc-4-title">
          <h2>¿Por qué somos diferentes?</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-12 desc-4-content-left">
          <svg
            width="182"
            height="182"
            viewBox="0 0 182 182"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="91" cy="91" r="91" fill="#1243E3" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M107.869 84.3218C132.413 77.6279 160.095 77.349 160.095 77.349C160.095 77.349 150.473 74.3507 132.692 72.9561C113.935 71.4918 102.361 72.6075 102.361 72.6075L89.2517 46.6687L75.3061 75.8847C75.3061 75.8847 58.6412 77.9765 41 85.0191L65.8231 103.636C65.8231 103.636 82.6973 91.1551 107.869 84.3218Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M74.9575 108.378C56.6191 120.72 48.3215 136.13 48.3215 136.13C48.0425 136.897 68.2636 120.023 91.0647 120.023C111.495 120.023 130.182 135.014 130.182 135.014L109.682 92.3406C109.682 92.3406 93.296 96.1059 74.9575 108.378Z"
              fill="white"
            />
          </svg>
          <h3><span role="img" aria-label="emoji felicidad">😊</span> Betriax</h3>
          <p>
            Somos más transparentes: puedes ver todas las operaciones en tiempo
            real y pones el precio a tus dólares.
          </p>
        </div>
        <div className="col-lg-8 col-12 desc-4-content-right">
          <h3><span role="img" aria-label="emoji triste lágrima">😢</span> Casas de cambio (digitales)</h3>
          <p>
            Pagan poco por tus dólares. Luego, intentan vendértelos mucho más
            caros. No hay como ponerle precio a tu dólar.
          </p>
          <h3><span role="img" aria-label="emoji asustado">😱</span> Bancos</h3>
          <p>
            Depende de la cantidad de dólares que tienes en tu poder y del tipo
            de cliente que les representas. Ya sabemos de qué hablamos.
          </p>
          <h3><span role="img" aria-label="emoji adolorido">🤕</span> Cambistas</h3>
          <p>
            Puedes simular que negocias con ellos. Ya conocemos el nivel de
            inseguridad en las calles y lo que pasa cuando recibes un billete
            falso.
          </p>
        </div>
      </div>
      <div className="row mt-3 registered-info">
        <div className="col-12">
          <p>
            Betriax está registada en la Superintendencia de Banca, Seguros y AFP, Resolución S.B.S. 3008 - 2020.
          </p>
        </div>
      </div>
    </article>
  );
}
