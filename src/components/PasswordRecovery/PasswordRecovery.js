import BlueLogo from "../../icons/Sign/BlueLogo";
import form from "../../assets/img/signForm.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const PasswordRecovery = () => {
  const [cardSegment, setCardSegment] = useState("-");
  const [btnSegment, setBtnSegment] = useState("Continuar");

  const handleClick = () => {
    setCardSegment(!cardSegment);
    setBtnSegment("Volver al inicio de sesión");
  };

  return (
    <div className="main-container">
      <div className="container-logo">
        <BlueLogo />
      </div>
      <h1 className="title">Recuperar contraseña</h1>
      {cardSegment ? (
        <div className="form-container">
          <label>Numero de DNI</label>
          <input placeholder="Ingrese su numero DNI" />
          <button onClick={() => handleClick()} className="btn">
            {btnSegment}
          </button>
        </div>
      ) : (
        <div className="form-container">
          <p className="p-ternary">
            Hemos enviado un link de recuperación de contraseña al correo
            asociado a su DNI
          </p>
          <Link to="/sign/login">
            <button onClick={() => handleClick()} className="btn">
            {btnSegment}
          </button>
          </Link>
        </div>
      )}
      <div className="info-container">
        <Link to="/sign/login">
          <p className="back-to-signIn">Volver al inicio de sesión</p>
        </Link>
        <p className="politics">
          Politica de privacidad - Terminos y condiciones
        </p>
      </div>
      <img src={form} alt="form" className="img" />
    </div>
  );
};

export default PasswordRecovery;
