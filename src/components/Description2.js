import Register from "../icons/Landing/Register";
import Create from "../icons/Landing/Create";
import Match from "../icons/Landing/Match";
import SendOrRecibe from "../icons/Landing/SendOrRecibe";


const Description2 = () => {
  return (
    <article className="container-fluid desc-2">
      <div className="row">
        <div className="col-lg-3 col-12">
          <Register />
          <h2>Regístrate</h2>
          <p>
            Te ofrecemos tecnología de punta para verificar tu identidad y la de
            todas las personas. Cumplimos altos estándares de seguridad con
            proveedores globales.
          </p>
        </div>
        <div className="col-lg-3 col-12">
          <Create />
          <h2>Crea tu oferta</h2>
          <p>
            Sólo necesitas saber 3 variables: la cantidad de dólares, el tipo de
            cambio (precio) y la duración de tu oferta. No necesitas gurúes para
            aprender muy rápido.
          </p>
        </div>
        <div className="col-lg-3 col-12">
          <Match />
          <h2>Haz match</h2>
          <p>
            Todos participan porque no hay costo de entrada. Encuentra tu match.
            Por ejemplo si vendes USD 1000, otra persona puede tomar tu oferta.
            ¡Así de simple!
          </p>
        </div>
        <div className="col-lg-3 col-12">
          <SendOrRecibe />

          <h2>Envía/recibe el dinero</h2>
          <p>
            Después del match, te acompañamos en todo momento. Envía y recibe
            tus fondos de manera 100% bancarizada, por medio de transferencias
            en línea.
          </p>
        </div>
      </div>
    </article>
  );
}

export default Description2;
