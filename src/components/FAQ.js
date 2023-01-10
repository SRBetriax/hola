import { useState, useCallback } from "react";
import ArrowFAQ from "../icons/Landing/ArrowFAQ";

const FAQ = () => {
  const [question, setQuestion] = useState("");
  const seccionPressed = useCallback((str) => {
    switch (str) {
      case "cuanto":
        question === "cuanto" ? setQuestion("") : setQuestion("cuanto");
        break;
      case "que":
        question === "que" ? setQuestion("") : setQuestion("que");
        break;
      case "casa":
        question === "casa" ? setQuestion("") : setQuestion("casa");
        break;
      case "protege":
        question === "protege" ? setQuestion("") : setQuestion("protege");
        break;
      case "funciona":
        question === "funciona" ? setQuestion("") : setQuestion("funciona");
        break;

      default:
        setQuestion("");
        break;
    }
  }, [question]);
  return (
    <article className="container-fluid faq" id="preguntas-frecuentes">
      <div className="row">
        <div className="col-12 faq-title">
          <h2>Preguntas frecuentes</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-bewtween flex-column">
          <div className="faq-question">
            <div
              className="faq-question-header"
              onClick={() => {
                seccionPressed("cuanto");
              }}
            >
              <h3>¿Cuánto cobra Betriax?</h3>
              <ArrowFAQ/>
            </div>
            <div
              className={
                "faq-question-body " + (question === "cuanto" ? "active" : "")
              }
            >
              <p>
                No cobraremos ninguna comisión los primeros meses para
                contribuir a la reactivación de la economía en Perú.
                Posteriormente, las personas que compran/venden dólares pagarán
                una comisión cercana a cero cada una. Somos la opción más
                competitiva del mercado.
              </p>
            </div>
          </div>
          <div className="faq-question">
            <div
              className="faq-question-header"
              onClick={() => {
                seccionPressed("casa");
              }}
            >
              <h3>¿Betriax es una casa de cambio digital?</h3>
              <ArrowFAQ/>
            </div>
            <div
              className={
                "faq-question-body " + (question === "casa" ? "active" : "")
              }
            >
              <p>
                Somos un modelo sofisticado de mercado de divisas (dólar) donde
                cada cliente pone el precio de sus dólares (tipo de cambio),
                volumen que cambia y duración de su oferta. Betriax te permite
                plantear una propuesta con tu tipo de cambio y los clientes
                deciden cuál es el mejor tipo de cambio, en cada caso. Nosotros
                no participamos en el cambio de moneda dado que lo realizan los
                clientes, entre sí.
                <br></br>
                Las casas de cambio y las casas de cambio digitales te cotizan
                un tipo de cambio arbitrariamente. Se trata de un modelo de
                negocio que te impone un tipo de cambio. Estos negocios ganan
                comprando dólares lo más barato posible y luego te los revenden
                al máximo precio posible.
              </p>
            </div>
          </div>
          <div className="faq-question">
            <div
              className="faq-question-header"
              onClick={() => {
                seccionPressed("protege");
              }}
            >
              <h3>¿Cómo protege Betriax mi dinero?</h3>
              <ArrowFAQ/>
            </div>
            <div
              className={
                "faq-question-body " + (question === "protege" ? "active" : "")
              }
            >
              <p>
                Cumplimos con informarte sobre todas las transacciones
                realizadas históricamente en la plataforma, es decir, te
                brindamos TODA la información disponible para que tomes una
                buena decisión y no pierdas dinero. Además, cumplimos con los
                estándares de seguridad de almacenamiento de datos en la nube,
                protegemos la información encriptándola y la identidad de las
                personas gracias a otro partner tecnológico global.
                <br />
                En el proceso de la liquidación de las operaciones, utilizamos
                el sistema de transferencias interbancarias online para realizar
                los pagos. Los bancos aliados realizarán dicha acción
                directamente a la cuenta que hayas designado en tu registro en
                Betriax. Si en algún caso, una de las dos partes incumple su
                compromiso de pago, te devolveremos tu dinero en minutos, una
                vez confirmada tu transferencia a nuestra cuenta bancaria.
              </p>
            </div>
          </div>
          <div className="faq-question">
            <div
              className="faq-question-header"
              onClick={() => {
                seccionPressed("funciona");
              }}
            >
              <h3>¿Cómo funciona Betriax?</h3>
              <ArrowFAQ/>
            </div>
            <div
              className={
                "faq-question-body " + (question === "funciona" ? "active" : "")
              }
            >
              <p>
                Es muy fácil. Somos un facilitador para el cambio de divisas
                entre personas que venden y compran dólares, entre ellas. Se
                registran y colocan sus ofertas de manera gratuita indicando el
                tipo de cambio, la cantidad y la duración de tiempo. Luego,
                cuando hay un match, ambos clientes nos envían una transferencia
                electrónica bancaria incluyendo nuestra comisión y el costo de
                la transferencia. Finalmente, luego de verificar las
                transferencias, devolvemos los fondos en la moneda cambiada a la
                cuenta indicada.
              </p>
            </div>
          </div>
          <div className="faq-question">
            <div
              className="faq-question-header"
              onClick={() => {
                seccionPressed("que");
              }}
            >
              <h3>¿Qué es Betriax?</h3>
              <ArrowFAQ/>
            </div>
            <div
              className={
                "faq-question-body " + (question === "que" ? "active" : "")
              }
            >
              <p>
                Betriax es un nuevo mercado de cambio de divisas donde los
                clientes determinan, entre ellos, la tasa de cambio en cada
                transacción. Inyectamos una alta dosis de transparencia para
                provocar la competencia y contamos con los mejores elementos de
                seguridad de datos personales e informática para proteger el
                mercado.
                <br />
                Cuidamos mucho nuestro mercado. Por eso, hemos implementado
                altos estándares para la identificación de las personas, evitar
                el lavado de dinero y el fraude.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default FAQ