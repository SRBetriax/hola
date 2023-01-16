import LogoM from "../../icons/Landing/LogoM";

const Description4 = () => {
  return (
    <article className="container-fluid desc-4">
      <div className="row">
        <div className="desc-4-title">
          <h2>¿Por qué somos diferentes?</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-12 desc-4-content-left">
          <LogoM />
          <h3>
            <span role="img" aria-label="emoji felicidad">
              😊
            </span>{" "}
            Betriax
          </h3>
          <p>
            Somos más transparentes: puedes ver todas las operaciones en tiempo
            real y pones el precio a tus dólares.
          </p>
        </div>
        <div className="col-lg-8 col-12 desc-4-content-right">
          <h3>
            <span role="img" aria-label="emoji triste lágrima">
              😢
            </span>{" "}
            Casas de cambio (digitales)
          </h3>
          <p>
            Pagan poco por tus dólares. Luego, intentan vendértelos mucho más
            caros. No hay como ponerle precio a tu dólar.
          </p>
          <h3>
            <span role="img" aria-label="emoji asustado">
              😱
            </span>{" "}
            Bancos
          </h3>
          <p>
            Depende de la cantidad de dólares que tienes en tu poder y del tipo
            de cliente que les representas. Ya sabemos de qué hablamos.
          </p>
          <h3>
            <span role="img" aria-label="emoji adolorido">
              🤕
            </span>{" "}
            Cambistas
          </h3>
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
            Betriax está registada en la Superintendencia de Banca, Seguros y
            AFP, Resolución S.B.S. 3008 - 2020.
          </p>
        </div>
      </div>
    </article>
  );
};

export default Description4;
