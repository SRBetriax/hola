import React from "react";
import Aside from "../aside/Aside";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="login-container">
      <Aside />
      <h1 className="login-title">Ingresa a tu cuenta</h1>

      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <label>Correo electrónico *</label>
        <input
          type="text"
          placeholder="Ingrese su correo electrónico"
          {...register("email", {
            pattern: regex,
          })}
        />
        {/* Manejo de errores */}
        {/*{errors.email?.type === "pattern" && (
            <p role="alert">"Ingrese un correo electrónico válido"</p>
        )}*/}
        <label>Contraseña *</label>
        <input
          type="password"
          placeholder="Ingrese su contraseña"
          {...register("password", { required: true })}
        />
        {/* Manejo de errores */}
        {/*{errors.password?.type === "required" && (
            <p role="alert">"Campo obligatorio"</p>
        )}*/}
        <input type="checkbox" />
        <span>Recuérdame</span>
        <Link to="/dashboard">
          <input type="submit" className="btn" value="Iniciar sesión" />
        </Link>
      </form>

      <div className="p-forgotten-password">
        <Link to="/sign/passwordRecovery">
          <p>¿Olvidaste tu contraseña?</p>
        </Link>
      </div>

      <div className="register-container">
        <p>¿No tienes una cuenta para operar?</p>
        <p>Crea una cuenta </p>
        <Link to="/sign/register">
          <p>aquí</p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
