import React from "react";
import { Link } from "react-router-dom";
import Aside from "../aside/Aside";
import Persona from "../../icons/Sign/wl-register/persona";
import Empresa from "../../icons/Sign/wl-register/empresa";
import IconPersona from "../../icons/Sign/wl-register/icon-persona";
import IconEmpresa from "../../icons/Sign/wl-register/icon-empresa";

const WlRegister = () => {
  return (
    <div className="register-container">
      <Aside />

      <h1 className="register-title">Regístrate en Betriax</h1>
      <h2 className="register-subtitle">¿Con qué perfil quieres operar?</h2>

      <div className="container-person">
        <h3 className="h2-person">PERSONA</h3>
        <p className="p-person">
          Si compras o vendes dólares con fines personales
        </p>
        <div className="rectangle-person">
          <IconPersona />
        </div>
      </div>
      {/* Falta Link al /form */}
      <Link to="/sign/form">
        <div className="container-corporation">
          <h3 className="h2-corporation">EMPRESA</h3>
          <p className="p-corporation">
            Si compras o vendes dólares a nombre de una empresa (RUC)
          </p>
          <div className="rectangle-corporation">
            <IconEmpresa />
          </div>
        </div>
      </Link>

      <p className="p-register">¿Ya tienes una cuenta en Betriax?</p>
      <Link to="/sign/login">
        <span className="p-span">Ingresa aquí</span>
      </Link>
    </div>
  );
};

export default WlRegister;
