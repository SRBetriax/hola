import Equity from "../icons/Landing/Equity";
import ExchangeRate from "../icons/Landing/ExchangeRate";
import Security from "../icons/Landing/Security";

const Description3 =() => {
  return (
    <article className="container-fluid desc-3" id="porque-betriax">
      <div className="row desc-3-title">
        <div className="col-12">
          <h2>¿Cuáles son los beneficios de Betriax?</h2>
        </div>
      </div>
      <div className="row desc-3-content">
        <div className="col-lg-8 col-12 desc-3-content-text">
          <h3>La mejor tasa de cambio</h3>
          <p>
            Ponle el precio a tus dólares. Betriax reunirá a personas para
            obtener el mejor tipo de cambio posible, entre ellas. Nuestros
            clientes interactúan en un mercado de cambio sin intermediarios. ¡Sí
            puedes obtener más con nosotros!
          </p>
        </div>
        <div className="col-lg-4 col-12 desc-3-content-icon">
        <ExchangeRate/>
        </div>
      </div>
      <div className="row desc-3-content">
        <div className="col-lg-4 col-12 desc-3-content-icon">
        <Security/>
        </div>
        <div className="col-lg-8 col-12 desc-3-content-text">
          <h3>Seguridad siempre</h3>
          <p>
            Las transacciones son bancarizadas y 100% digitales. Elevamos los
            niveles de eficiencia y transparencia, la seguridad física y la
            ciberseguridad para ti. Tus operaciones son seguras, privadas y
            contarás con un servicio gratuito para administrar tus operaciones.
          </p>
        </div>
      </div>
      <div className="row desc-3-content">
        <div className="col-lg-8 col-12 desc-3-content-text">
          <h3>Mercado basado en la equidad</h3>
          <p>
            Todas las personas son bienvenidas y respetadas. La tecnología nos
            permite operar sin discriminar por volumen negociado o tipo de
            cambio. Sé parte de esta comunidad y aprópiate de la plataforma
            tecnológica. Somos neutrales en el trato y servicio con todos
            ustedes.
          </p>
        </div>
        <div className="col-lg-4 col-12 desc-3-content-icon">
        <Equity/>
        </div>
      </div>
    </article>
  );
}

export default Description3