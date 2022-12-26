import React, { useEffect, useState, useCallback, useRef } from "react";
import enviado from "../img/check.png";
const CtaSection = () => {
  const [compraVenta, setCompraVenta] = useState([0, 0]);
  const [cardSegment, setCardSegment] = useState("comprar");
  const [oferta, setOferta] = useState(0);
  const [venta, setVenta] = useState(0);
  const [vigencia, setVigencia] = useState(0);
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [height, setHeight] = useState("auto");
  const formRef = useRef();

  useEffect(() => {
    setHeight(formRef.current.getBoundingClientRect().height);
    fetch("http://localhost:3001/currencies")
      .then((response) => {
        console.log(response)
        return response.json();
      })
      .then((res) => {
        setCompraVenta([res.usdpen, 1 / res.usdpen]);
      })
      .catch((err) => {
        console.log("No se pudo recuperar la tasa", err);
      });
  }, []);
  const enviarForm = useCallback(() => {
    if(email && oferta && venta && vigencia) {
      let data = JSON.stringify({
        to: email,
        type: cardSegment,
        offering: oferta,
        asking: venta,
        time: vigencia,
      });
      fetch("https://currency.betriax.com/sendEmail", {
        method: "post",
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((e) => {
          setEmail("");
          setOferta(0);
          setVenta(0);
          setVigencia(0);
          setDone(true);
          //console.log(e);
          formRef.current.reset();
          let url;
          let callback = function () {
            if (typeof(url) != 'undefined') {
                window.location = url;
            }
          };
          window.dataLayer.push({'event': 'conversion',
              'send_to': 'AW-10813077027/mADECLyf7ZUBEICqjusC',
              'event_callback': callback
          });
        })
        .catch(console.error);
    }
  }, [cardSegment, email, oferta, venta, vigencia]);

  return (
    <main className="container-fluid cta-container">
      <svg
        viewBox="0 0 1005 776"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.2">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M551.51 326.459C764.219 268.422 1004.12 266.003 1004.12 266.003C1004.12 266.003 920.729 240.008 766.636 227.917C604.083 215.221 503.772 224.894 503.772 224.894L390.166 0L269.309 253.308C269.309 253.308 124.884 271.444 -28 332.504L187.126 493.92C187.126 493.92 333.363 385.705 551.51 326.459Z"
            fill="#1243E3"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M266.287 535.029C107.36 642.035 35.45 775.642 35.45 775.642C33.0329 782.292 208.276 635.99 405.877 635.99C582.933 635.99 744.882 765.969 744.882 765.969L567.222 395.982C567.222 395.982 425.215 428.628 266.287 535.029Z"
            fill="#1243E3"
          />
        </g>
      </svg>
      <div className="row">
        <div className="col-md-6 col-sm-12 cta-text-column">
          <h1 className="cta-title">
          Ponle el precio a tus dólares <br /> ¿Qué esperas?
          </h1>
          <h3 className="cta-subtitle">
            Somos una innovación financiera, transparente y <br />
            segura del mercado de cambio de divisas. <br />
            Tú pones el precio a tus dólares.
          </h3>
          <a href="https://app.betriax.com/register">
            <button className="cta-button">Entra ahora, es gratis</button>
          </a>
          <a href="https://app.betriax.com/">
            <span className="cta-enter">O ingresa ahora</span>
          </a>
        </div>
        <div className="col-md-6 col-sm-12 cta-card-column">
          <div className="cta-card">
            <div className="cta-card-head">
              <button
                className={
                  "cta-card-head-segment " +
                  (cardSegment === "comprar" ? "active" : "")
                }
                onClick={() => {
                  setCardSegment("comprar");
                }}
              >
                Comprar dólares
              </button>
              <button
                className={
                  "cta-card-head-segment " +
                  (cardSegment === "vender" ? "active" : "")
                }
                onClick={() => {
                  setCardSegment("vender");
                }}
              >
                Vender dólares
              </button>
            </div>
            <div className="cta-card-body-form">
              <form className={"cta-card-form-compra " + (done? "d-none" : "")} ref={formRef}>
                <h6>Cantidad a {cardSegment}</h6>
                <div className="cta-value-input">
                  <label htmlFor="">USD</label>
                  <input
                    type="number"
                    min="0"
                    placeholder="Ingrese un valor"
                    step="0.01"
                    id="cantidad"
                    onChange={(e) => setOferta(e.target.value)}
                  />
                </div>
                <div className="cta-input cambio">
                  <div className="cta-input-label">
                    <label htmlFor="">Tipo de cambio</label>
                    <i className="tooltip">i</i>
                  </div>
                  <input
                    type="number"
                    min="0"
                    placeholder="Ingrese un valor"
                    id="valor"
                    step="0.01"
                    onChange={(e) => setVenta(e.target.value)}
                  />
                </div>
                <div className="cta-input vigencia">
                  <div className="cta-input-label">
                    <label htmlFor="">Vigencia</label>
                    <i className="tooltip">i</i>
                  </div>
                  <input
                    type="number"
                    min="0"
                    max="4"
                    placeholder="0hr"
                    id="vigencia"
                    onChange={(e) => setVigencia(e.target.value)}
                  />
                </div>
                <div className="cta-input" style={{ width: "100%" }}>
                  <div className="cta-input-label">
                    <label htmlFor="">Por último, tu correo </label>
                    <i className="tooltip">i</i>
                  </div>
                  <input
                    type="email"
                    placeholder="Ingrese su correo"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    enviarForm();
                  }}
                  className="cta-send"
                >
                  Publica tu oferta
                </button>
              </form>
              <div className={"cta-card-confirmation " + (done? "" : "d-none")} style={{height: height}}>
                <img src={enviado} alt="Confirmación envío información"/>
                <p>
                  <span className="conf">¡Gracias!</span>
                  <br/>
                  Revisa tu correo electrónico para iniciar tu proceso en Betriax.
                </p>
              </div>
            </div>
          </div>
          <p
            className="cta-exchange-rate"
            style={{ width: "100%", textAlign: "center" }}
          >
            Tasa referencial: {compraVenta[0].toString().slice(0, 4)}
            <br />
            (Fuente: <a href="https://currencylayer.com/">currencylayer.com</a>)
          </p>
        </div>
      </div>
    </main>
  );
};

export default CtaSection;
