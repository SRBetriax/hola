import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { Link } from "react-router-dom";
import ImgLogo from "../../icons/Sign/register/imgLogo";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Tooltip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const countries = [
  { code: "AD", label: "Andorra", phone: "376" },
  {
    code: "AE",
    label: "United Arab Emirates",
    phone: "971",
  },
  { code: "AF", label: "Afghanistan", phone: "93" },
  {
    code: "AG",
    label: "Antigua and Barbuda",
    phone: "1-268",
  },
  { code: "AI", label: "Anguilla", phone: "1-264" },
  { code: "AL", label: "Albania", phone: "355" },
  { code: "AM", label: "Armenia", phone: "374" },
  { code: "AO", label: "Angola", phone: "244" },
  { code: "AQ", label: "Antarctica", phone: "672" },
  { code: "AR", label: "Argentina", phone: "54" },
  { code: "AS", label: "American Samoa", phone: "1-684" },
  { code: "AT", label: "Austria", phone: "43" },
];

const required = {
  value: true,
  message: "Este campo es requerido",
};

const Forms = ({ handleClick, activeStep }) => {
  
  const {
    register,
    control,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();

  const {
    fields: cuentaInterbancariaSolesFields,
    append: cuentaInterbancariaSolesAppend,
    remove: cuentaInterbancariaSolesRemove,
  } = useFieldArray({ control, name: "cuentaInterbancariaSoles" });

  const {
    fields: cuentaInterbancariaDolaresFields,
    append: cuentaInterbancariaDolaresAppend,
    remove: cuentaInterbancariaDolaresRemove,
  } = useFieldArray({ control, name: "cuentaInterbancariaDolares" });

  const onSubmit = (data) => {
    console.log("SUBMIT: ", data);
  };

  const handleNext = async () => {
    let isValid = false;

    if (activeStep === 0){
      isValid = await trigger(["name", "lastName", "id", "cellphone","email","country",]);
    }else if(activeStep === 1){
      isValid = await trigger(["companyName","ruc", "legalRep","city", "address", "companyCellphone","webSite"])
    }else if(activeStep === 2){
      isValid = await trigger(["solesBank", "solesBankNumber", "CCICode", "dolaresBank", "CCICodeDolares"])
    }

    if (isValid) handleClick("next");
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        {activeStep === 0 && (
          <section className="step1-container">
            <h2 className="step1-title">Registro de empleado/apoderado</h2>
            <div className="profile-pic-container">
                <div className="step1-logo-img">
                    <ImgLogo />
                </div>
                <div className="">
                  <div className="tooltip-container">
                    <p className="step1-profile-title">Foto de perfil empleado/apoderado</p><span className="step1-profile-title-tooltip">
                      <Tooltip
                        title="Verifique que la foto sea clara, con una buena iluminación, sin lentes ni sombreros."
                        placement="top-start"
                      >
                        <HelpOutlineIcon />
                      </Tooltip>
                    </span>
                  </div>
                  <button type="button" className="step1-profile-btn">Subir foto</button>
                </div>
              
            </div>

            <label className="step1-label-names">Nombre completo</label>
            <span>*</span>
            <div className="names-container">
                <input
                  name="name"
                  className="step1-name-input"
                  placeholder="Nombres"
                  type="text"
                  {...register("name", {
                    required: true,
                  })}
                />
                {errors.name && <span>Campo requerido</span>}
                
                <input
                  name="lastName"
                  className=""
                  placeholder="Apellidos"
                  type="text"
                  {...register("lastName", {
                    required: true,
                  })}
                />
                {errors.lastName && <span>Campo requerido</span>}
                
                <label>Identificación</label>
                <span>*</span>
                <input
                  name="id"
                  className=""
                  placeholder="Escriba su identificación"
                  type="text"
                  {...register("id", {
                    required: true,
                  })}
                />
                {errors.id && <span>Campo requerido</span>}
                
            </div>
            <label>Celular</label>
            <span>*</span>
            <Autocomplete
              id="country-select-demo"
              sx={{ width: 300 }}
              options={countries}
              autoHighlight
              getOptionLabel={(option) => option.label}
              renderOption={(props, option) => (
                <Box
                  component="li"
                  sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                  {...props}
                >
                  <img
                    loading="lazy"
                    width="20"
                    src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                    srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                    alt=""
                  />
                  {option.label} ({option.code}) +{option.phone}
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Choose a country"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password", // disable autocomplete and autofill
                  }}
                />
              )}
            />

            <input
              name="cellphone"
              className=""
              placeholder="123 456 789"
              type="text"
              {...register("cellphone", {
                required: true,
              })}
            />
            {errors.cellphone && <span>Campo requerido</span>}

            <label>Correo electrónico</label>
            <span>*</span>
            <input
              name="email"
              className=""
              placeholder="go@betriax.com"
              type="text"
              {...register("email", {
                required: true,
              })}
            />
            {errors.email && <span>Campo requerido</span>}

            <label>País</label>
            <span>*</span>
            <select
              {...register("country", {
                required: true,
              })}
            >
              <option value="Peru">Perú</option>
              <option value="Colombia">Colombia</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Chile">Chile</option>
            </select>
            {errors.country && <span>Campo requerido</span>}

            <h4>Documento de identificación</h4>
            <p>Suba su documento de identificación en imagen o PDF.</p>
            <input type="file" accept="image/*,.pdf" />
            <div>
              <Button
                type="button"
                variant="outlined"
                onClick={handleClickOpen}
              >
                <span>
                  <CloseIcon />
                </span>{" "}
                Cancelar
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle
                  style={{
                    fontWeight: "700",
                    fontFamily: "Poppins",
                    textAlign: "center",
                    marginLeft: "20%",
                  }}
                  id="alert-dialog-title"
                >
                  {"Cancelar registro"}
                  <Button type="button" onClick={handleClose}>
                    <span
                      style={{
                        marginLeft: "4em",
                        color: "#aaaaaa",
                      }}
                    >
                      <CloseIcon />
                    </span>
                  </Button>
                </DialogTitle>
                <DialogContent>
                  <DialogContentText
                    id="alert-dialog-description"
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "18px",
                      width: "25em",
                      textAlign: "center",
                    }}
                  >
                    Al darle click a este botón se cancelará el registro actual
                    ¿Seguro que desea continuar?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Link to="/">
                    <Button
                      onClick={handleClose}
                      style={{
                        fontWeight: "700",
                        fontFamily: "Poppins",
                        backgroundColor: "#1243e3",
                        color: "#fff",
                        width: "25em",
                        marginRight: "4em",
                        marginBottom: "1em",
                      }}
                      type="button"
                    >
                      Aceptar
                    </Button>
                  </Link>
                </DialogActions>
              </Dialog>
            </div>
            <button type="button" onClick={handleNext}>
              Continuar
              <span>
                <ArrowForwardIcon />
              </span>
            </button>
          </section>
        )}
        {activeStep === 1 && (
          <section>
            <label>Nombre de la empresa</label>
            <span>*</span>
            <input
              name="name"
              className=""
              placeholder="Nombre de la empresa"
              type="text"
              {...register("companyName", {
                required: true,
              })}
            />
            {errors.companyName && <span>Campo requerido</span>}

            <label>RUC de la empresa</label>
            <span>*</span>
            <input
              name="name"
              className=""
              placeholder="Ingrese número de identificación RUC"
              type="number"
              {...register("ruc", {
                required: true,
              })}
            />
            {errors.ruc && <span>Campo requerido</span>}

            <label>Representante legal</label>
            <span>*</span>
            <input
              name="name"
              className=""
              placeholder="Ingrese nombre completo"
              type="text"
              {...register("legalRep", {
                required: true,
              })}
            />
            {errors.legalRep && <span>Campo requerido</span>}

            <label>Ciudad</label>
            <span>*</span>
            <select
              {...register("city", {
                required: true,
              })}
            >
              <option value="Lima">Lima</option>
              <option value="San Martin">San Martín de Porres</option>
              <option value="Comas">Comas</option>
              <option value="Villa Maria">Villa María del Triunfo</option>
            </select>
            {errors.city && <span>Campo requerido</span>}

            <label>Dirección</label>
            <span>*</span>
            <input
              name="name"
              className=""
              placeholder="Dirección completa"
              type="text"
              {...register("address", {
                required: true,
              })}
            />
            {errors.address && <span>Campo requerido</span>}

            {/* <label>Segunda dirección</label>
            <span>*</span>
            <input
              name="name"
              className=""
              placeholder="Segunda dirección"
              type="text"
              {...register("secondAddress", {
                required: true,
              })}
            />
            {errors.secAddress && <span>Campo requerido</span>} */}

            <label>Celular</label>
            <span>*</span>
            <Autocomplete
              id="country-select-demo"
              sx={{ width: 300 }}
              options={countries}
              autoHighlight
              getOptionLabel={(option) => option.label}
              renderOption={(props, option) => (
                <Box
                  component="li"
                  sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                  {...props}
                >
                  <img
                    loading="lazy"
                    width="20"
                    src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                    srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                    alt=""
                  />
                  {option.label} ({option.code}) +{option.phone}
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Choose a country"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password",
                  }}
                />
              )}
            />

            <input
              name="companyCellphone"
              className=""
              placeholder="123 456 789"
              type="text"
              {...register("companyCellphone", {
                required: true,
              })}
            />
            {errors.companyCellphone && <span>Campo requerido</span>}

            <label>Página web</label>
            <span>*</span>
            <input
              name="email"
              className=""
              placeholder="www.betriax.com"
              type="text"
              {...register("webSite", {
                required: true,
              })}
            />
            {errors.webSite && <span>Campo requerido</span>}

            <h4>Documentos de la empresa</h4>
            <p>
              Documentos en PDF o imagen serán usados estrictamente durante el
              proceso de verificación
            </p>
            <h4>Poder</h4>
            <span>*</span>
            <p>Menor a 90 días</p>
            <input type="file" accept="image/*,.pdf" />
            <h4>Recibo de servicios públicos</h4>
            <span>*</span>
            <p>Agua, luz, celular</p>
            <input type="file" accept="image/*,.pdf" />
            <h4>Poder</h4>
            <span>*</span>
            <p>Menor a 90 días</p>
            <input type="file" accept="image/*,.pdf" />

            <button type="button" onClick={() => handleClick()}>
              <span>
                <ArrowBackIcon />
              </span>
              Atrás
            </button>
            <button type="button" onClick={handleNext}>
              Continuar
              <span>
                <ArrowForwardIcon />
              </span>
            </button>
          </section>
        )}
        {activeStep === 2 && (
          <section>
            <h2>Registro de Cuenta Bancaria</h2>
            <h4>Cuenta bancaria Soles</h4>

            <label>Banco</label>
            <span>*</span>
            <select
              {...register("solesBank", {
                required: true,
              })}
            >
              <option value="Falabella">Banco Falabella</option>
              <option value="GNB">Banco GNB</option>
              <option value="Credito">Banco de Crédito del Perú</option>
            </select>
            {errors.solesBank && <span>Campo requerido</span>}

            <label>Número de cuenta</label>
            <span>*</span>
            <input
              name="email"
              className=""
              placeholder="Ingrese número de cuenta"
              type="number"
              {...register("solesBankNumber", {
                required: true,
              })}
            />
            {errors.solesBankNumber && <span>Campo requerido</span>}

            <label>Código de cuenta interbancaria CCI</label>
            <span>*</span>
            <input
              name="email"
              className=""
              placeholder="Ingrese código CCI"
              type="number"
              {...register("CCICode", {
                required: true,
              })}
            />
            <ul>
              {cuentaInterbancariaSolesFields.map((item, index) => (
                <li key={item.id}>
                  <input
                    {...register(
                      `cuentaInterbancariaSoles.${index}.CCICodeSoles`
                    )}
                  />
                  <button
                    type="button"
                    onClick={() => cuentaInterbancariaSolesRemove(index)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => cuentaInterbancariaSolesAppend()}
            >
              + Agregar otra cuenta
            </button>
            {errors.email && <span>Campo requerido</span>}

            <h4>Cuenta bancaria Dolares</h4>

            <label>Banco</label>
            <span>*</span>
            <select
              {...register("dolaresBank", {
                required: true,
              })}
            >
              <option value="Falabella">Banco Falabella</option>
              <option value="GNB">Banco GNB</option>
              <option value="Credito">Banco de Crédito del Perú</option>
            </select>
            {errors.dolaresBank && <span>Campo requerido</span>}

            <label>Código de cuenta interbancaria CCI</label>
            <span>*</span>
            <input
              name="email"
              className=""
              placeholder="Ingrese código CCI"
              type="number"
              {...register("CCICodeDolares", {
                required: true,
              })}
            />
            <ul>
              {cuentaInterbancariaDolaresFields.map((item, index) => (
                <li key={item.id}>
                  <input
                    {...register(
                      `cuentaInterbancariaDolares.${index}.CCICodeDolares`
                    )}
                  />
                  <button
                    type="button"
                    onClick={() => cuentaInterbancariaDolaresRemove(index)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => cuentaInterbancariaDolaresAppend()}
            >
              + Agregar otra cuenta
            </button>
            {errors.email && <span>Campo requerido</span>}

            <input name="email" type="checkbox" />
            <p>Acepto los Terminos y condiciones y Políticas de privacidad</p>

            <button type="button" onClick={() => handleClick()}>
              <span>
                <ArrowBackIcon />
              </span>
              Atrás
            </button>
            <button type="submit" onClick={handleNext}>Finalizar</button>
          </section>
        )}
      </form>
    </div>
  );
};

export default Forms;
