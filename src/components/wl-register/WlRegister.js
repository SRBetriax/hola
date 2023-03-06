import { Link } from "react-router-dom";
import Aside from "../aside/Aside";
import IconPersona from "../../icons/Sign/wl-register/icon-persona";
import IconEmpresa from "../../icons/Sign/wl-register/icon-empresa";

const WlRegister = () => {
  return (
    <div className="register-container">
      <Aside />
      <div>
        <h1 className="register-title">Regístrate en Betriax</h1>
        <h2 className="register-subtitle">¿Con qué perfil quieres operar?</h2>
      </div>

      <div className="container-person">
        <h3 className="person">PERSONA</h3>
        <p className="p-person">
          Si compras o vendes dólares con fines personales
        </p>
        <div className="rectangle-person">
          <IconPersona />
        </div>
      </div>

      <Link to="/sign/register/form">
        <div className="container-corporation">
          <h3 className="corporation">EMPRESA</h3>
          <p className="p-corporation">
            Si compras o vendes dólares a nombre de una empresa (RUC)
          </p>
          <div className="rectangle-corporation">
            <IconEmpresa />
          </div>
        </div>
      </Link>
      <div className="section-login">
        <p className="p-register">¿Ya tienes una cuenta en Betriax?</p>
        <Link to="/sign/login">
          <p className="p-s">Ingresa aquí</p>
        </Link>
      </div>
    </div>
  );
};

export default WlRegister;
