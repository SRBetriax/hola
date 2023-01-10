import Group1 from "../icons/Landing/Group1";
import Group2 from "../icons/Landing/Group2";

const FinalCta = () => {
  return (
    <article className="container-fluid final-cta">
      <div className="row">
      <Group1/>

      <Group2/>

        <div className="col-12">
          <h2>Compra o vende tus dólares ahora.</h2>
          <a href="https://app.betriax.com/register">
            <button className="cta-button">Regístrate gratis</button>
          </a>
        </div>
      </div>
    </article>
  );
}

export default FinalCta
