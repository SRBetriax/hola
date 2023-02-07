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
        <label className="label-email">Correo electrónico *</label>
        <input
          type="text"
          placeholder="Ingrese su correo electrónico"
          {...register("email", {
            pattern: regex,
          })}
          className="input-email"
        />
        {/* Manejo de errores */}
        {/*{errors.email?.type === "pattern" && (
            <p role="alert">"Ingrese un correo electrónico válido"</p>
        )}*/}
        <label className="label-password">Contraseña *</label>
        <input
          type="password"
          placeholder="Ingrese su contraseña"
          {...register("password", { required: true })}
          className="input-password"
        />
        {/* Manejo de errores */}
        {/*{errors.password?.type === "required" && (
            <p role="alert">"Campo obligatorio"</p>
        )}*/}
        <input type="checkbox" className="checkbox" />
        <span className="checkbox-span">Recuérdame</span>
        <Link to="/dashboard">
          <input type="submit" className="btn" value="Iniciar sesión" />
        </Link>
      </form>

      <Link to="/sign/passwordRecovery">
        <p className="p-forgotten-password">¿Olvidaste tu contraseña?</p>
      </Link>

      <p className="p-register">
        ¿No tienes una cuenta para operar? Crea una cuenta
      </p>
      <Link to="/sign/register">
        <span className="p-span">aquí</span>
      </Link>
    </div>
  );
};

export default Login;
