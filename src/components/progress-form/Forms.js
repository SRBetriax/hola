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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import Checked from "../../icons/Sign/register/checked";

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
    }

    if (isValid) handleClick("next");
  };

  const handleLast = async () =>{
    let isValid = false;
    
    if(activeStep === 2){
      isValid = await trigger(["solesBank", "solesBankNumber", "CCICode", "dolaresBank", "CCICodeDolares"])
    }

    if (isValid) setOpen(true);
  }

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
                  <p className="step1-profile-title">
                    Foto de perfil empleado/apoderado
                  </p>
                  <span className="step1-profile-title-tooltip">
                    <Tooltip
                      title="Verifique que la foto sea clara, con una buena iluminación, sin lentes ni sombreros."
                      placement="top-start"
                    >
                      <HelpOutlineIcon />
                    </Tooltip>
                  </span>
                </div>
                <button type="button" className="step1-profile-btn">
                  Subir foto
                </button>
              </div>
            </div>

            <label className="step1-label-names">Nombre completo</label>
            <span>*</span>
            <div className="names-container">
              <input true
                name="name"
                className="step1-name-input"
                placeholder="Nombres"
                type="text"
                {...register("name", {
                  required: true,
                })}
              />
              {errors.name && (
                <span className="error-span-name">Campo requerido</span>
              )}

              <input
                name="lastName"
                className=""
                placeholder="Apellidos"
                type="text"
                {...register("lastName", {
                  required: true,
                })}
              />
              {errors.lastName && (
                <span className="error-span-last">Campo requerido</span>
              )}
            </div>

            <label className="id-label">Identificación</label>
            <span>*</span>
            <div className="id-container">
              <input
                name="id"
                className="id-input"
                placeholder="Escriba su identificación"
                type="text"
                {...register("id", {
                  required: true,
                })}
              />
              {errors.id && <span className="error-span">Campo requerido</span>}
            </div>

            <label className="cellphone-label">Celular</label>
            <span>*</span>
            <div className="cellphone-container">
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
                className="cell-input"
                placeholder="123 456 789"
                type="text"
                {...register("cellphone", {
                  required: true,
                })}
              />
              {errors.cellphone && (
                <div className="error-span-cell">Campo requerido</div>
              )}
            </div>

            <label className="email-label">Correo electrónico</label>
            <span>*</span>
            <div className="email-container">
              <input
                name="email"
                className=""
                placeholder="go@betriax.com"
                type="text"
                {...register("email", {
                  required: true,
                })}
              />
              {errors.email && (
                <span className="error-span">Campo requerido</span>
              )}
            </div>

            <label className="country-label">País</label>
            <span>*</span>
            <div className="country-container">
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
              {errors.country && (
                <span className="error-span">Campo requerido</span>
              )}
            </div>

            <div className="id-img-container">
              <div className="id-tooltip-container">
                <h4>Documento de identificación</h4>
                <span className="step1-profile-title-tooltip">
                  <Tooltip
                    title="Cédula de ciudadanía, cédula de extranjería"
                    placement="top-start"
                  >
                    <HelpOutlineIcon />
                  </Tooltip>
                </span>
              </div>
              <input type="file" accept="image/*,.pdf" />
            </div>

            <label className="receipt-label">Recibo de servicios</label>
            <span>*</span>
            <input
              type="file"
              accept="image/*,.pdf"
              {...register("receipt", {
                required: true,
              })}
              className="receipt-input"
            />
            {errors.receipt && (
              <span className="error-span">Campo requerido</span>
            )}

            <div className="btns-container">
              <div className="cancel-btn">
                <Button
                  type="button"
                  variant="text"
                  onClick={handleClickOpen}
                  sx={{
                    width: 100,
                    color: "#4F4F4F",
                    fontWeight: "700",
                    fontSize: "12px",
                    border: "none",
                  }}
                >
                  <span>
                    <CloseIcon />
                  </span>
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
                      Al darle click a este botón se cancelará el registro
                      actual.
                      <br/>
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
              <button type="button" onClick={handleNext} className="next-btn">
                Continuar
                <span>
                  <ArrowForwardIcon />
                </span>
              </button>
            </div>
          </section>
        )}
        {activeStep === 1 && (
          <section className="step2-container">
            <h2 className="step2-title">Registro de la empresa</h2>

            <label className="company-label">Nombre de la empresa</label>
            <span>*</span>
            <div className="company-container">
              <input
                name="name"
                className=""
                placeholder="Nombre de la empresa"
                type="text"
                {...register("companyName", {
                  required: true,
                })}
              />
              {errors.companyName && (
                <span className="error-span">Campo requerido</span>
              )}
            </div>

            <label className="ruc-label">RUC de la empresa</label>
            <span>*</span>
            <div className="ruc-container">
              <input
                name="name"
                className=""
                placeholder="Ingrese número de identificación RUC"
                type="number"
                {...register("ruc", {
                  required: true,
                })}
              />
              {errors.ruc && (
                <span className="error-span">Campo requerido</span>
              )}
            </div>

            <label className="rep-label">Representante legal</label>
            <span>*</span>
            <div className="rep-container">
              <input
                name="name"
                className=""
                placeholder="Ingrese nombre completo"
                type="text"
                {...register("legalRep", {
                  required: true,
                })}
              />
              {errors.legalRep && (
                <span className="error-span">Campo requerido</span>
              )}
            </div>

            <label className="city-label">Ciudad</label>
            <span>*</span>
            <div className="city-container">
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
              {errors.city && (
                <span className="error-span">Campo requerido</span>
              )}
            </div>

            <label className="address-label">Dirección</label>
            <span>*</span>
            <div className="address-container">
              <input
                name="name"
                className=""
                placeholder="Dirección completa"
                type="text"
                {...register("address", {
                  required: true,
                })}
              />
              {errors.address && (
                <span className="error-span">Campo requerido</span>
              )}
            </div>

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

            <label className="cellphone-label">Celular</label>
            <span>*</span>
            <div className="cellphone-container">
              <Autocomplete
                id="country-select-demo"
                sx={{ width: 300 }}
                options={countries}
                autoHighlight
                getOptionLabel={(option) => option.label}
                renderOption={(props, option) => (
                  <Box
                    component="li"
                    sx={{ "& > img": { flexShrink: 0 } }}
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
                className="cellphone-input"
                placeholder="123 456 789"
                type="text"
                {...register("companyCellphone", {
                  required: true,
                })}
              />
              {errors.companyCellphone && (
                <span className="error-span">Campo requerido</span>
              )}
            </div>

            <label className="web-label">Página web</label>
            <span>*</span>
            <div className="web-container">
              <input
                name="email"
                className=""
                placeholder="www.betriax.com"
                type="text"
                {...register("webSite", {
                  required: true,
                })}
              />
              {errors.webSite && (
                <span className="error-span">Campo requerido</span>
              )}
            </div>

            <div className="tooltip-container">
              <h4 className="docs-title">Documentos de la empresa</h4>
              <span className="step2-docs-tooltip">
                <Tooltip
                  title="Documentos en PDF o imagen serán usados estrictamente durante el proceso de verificación"
                  placement="top-start"
                >
                  <HelpOutlineIcon />
                </Tooltip>
              </span>
            </div>

            <div className="poder-container">
              <div>
                <label className="poder-label">Poder</label>
                <span>*</span>
                <p className="p-container">Menor a 90 días</p>
              </div>
              <div className="input-con">
                <input type="file" accept="image/*,.pdf" />
              </div>
            </div>

            <div className="receipt-container">
              <div>
                <label className="receipt-label">
                  Recibo de servicios públicos
                </label>
                <span>*</span>
                <p className="p-container">Agua, luz, celular</p>
              </div>
              <div className="input-container">
                <input type="file" accept="image/*,.pdf" />
              </div>
            </div>

            {/* <h4>Poder</h4>
            <span>*</span>
            <p>Menor a 90 días</p>
            <input type="file" accept="image/*,.pdf" /> */}

            <div className="btn-container">
              <button
                type="button"
                onClick={() => handleClick()}
                className="back-btn"
              >
                <span>
                  <ArrowBackIcon />
                </span>
                Atrás
              </button>
              <button type="button" onClick={handleNext} className="next-btn">
                Continuar
                <span>
                  <ArrowForwardIcon />
                </span>
              </button>
            </div>
          </section>
        )}
        {activeStep === 2 && (
          <section className="step3-container">
            <h2 className="step3-title">Registro de Cuenta Bancaria</h2>
            <div className="step3-tooltip-container">
              <h4 className="step3-subtitle-soles">Cuenta bancaria Soles</h4>
              <span className="step3-title-tooltip">
                <Tooltip
                  title="Para elevar el nivel de seguridad no usaremos otras cuentas no registradas por tu empresa."
                  placement="top-start"
                >
                  <HelpOutlineIcon />
                </Tooltip>
              </span>
            </div>

            <label className="bank-label">Banco</label>
            <span>*</span>
            <div className="bank-container">
              <select
                {...register("solesBank", {
                  required: true,
                })}
              >
                <option value="Falabella">Banco Falabella</option>
                <option value="GNB">Banco GNB</option>
                <option value="Credito">Banco de Crédito del Perú</option>
              </select>
              {errors.solesBank && (
                <span className="error-span">Campo requerido</span>
              )}
            </div>

            <label className="account-number-label">Número de cuenta</label>
            <span>*</span>
            <div className="account-number-container">
              <input
                name="email"
                className=""
                placeholder="Ingrese número de cuenta"
                type="number"
                {...register("solesBankNumber", {
                  required: true,
                })}
              />
              {errors.solesBankNumber && (
                <span className="error-span">Campo requerido</span>
              )}
            </div>

            <label className="CCI-soles-label">
              Código de cuenta interbancaria CCI
            </label>
            <span>*</span>
            <div className="CCI-soles-container">
              <input
                name="email"
                className=""
                placeholder="Ingrese código CCI"
                type="number"
                {...register("CCICode", {
                  required: true,
                })}
              />
              <ul className="add-ul">
                {cuentaInterbancariaSolesFields.map((item, index) => (
                  <li key={item.id} className="add-li">
                    <input
                      {...register(
                        `cuentaInterbancariaSoles.${index}.CCICodeSoles`
                      )}
                      className="add-input"
                    />
                    <button
                      type="button"
                      onClick={() => cuentaInterbancariaSolesRemove(index)}
                      className="delete-btn"
                    >
                      <DeleteOutlineRoundedIcon />
                    </button>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => cuentaInterbancariaSolesAppend()}
                className="add-btn"
              >
                + Agregar otra cuenta
              </button>
              {errors.email && (
                <span className="error-span">Campo requerido</span>
              )}
            </div>

            <div className="step3-tooltip-container">
              <h4 className="step3-subtitle-dolares">
                Cuenta bancaria Dolares
              </h4>
              <span className="step3-title-tooltip-dolares">
                <Tooltip
                  title="Para elevar el nivel de seguridad no usaremos otras cuentas no registradas por tu empresa."
                  placement="top-start"
                >
                  <HelpOutlineIcon />
                </Tooltip>
              </span>
            </div>

            <label className="bank-label">Banco</label>
            <span>*</span>
            <div className="bank-container">
              <select
                {...register("dolaresBank", {
                  required: true,
                })}
              >
                <option value="Falabella">Banco Falabella</option>
                <option value="GNB">Banco GNB</option>
                <option value="Credito">Banco de Crédito del Perú</option>
              </select>
              {errors.dolaresBank && (
                <span className="error-span">Campo requerido</span>
              )}
            </div>

            <label className="CCI-dolar-label">
              Código de cuenta interbancaria CCI
            </label>
            <span>*</span>
            <div className="CCI-dolar-container">
              <input
                name="email"
                className=""
                placeholder="Ingrese código CCI"
                type="number"
                {...register("CCICodeDolares", {
                  required: true,
                })}
              />
              <ul className="add-ul">
                {cuentaInterbancariaDolaresFields.map((item, index) => (
                  <li key={item.id} className="add-li">
                    <input
                      {...register(
                        `cuentaInterbancariaDolares.${index}.CCICodeDolares`
                      )}
                      className="add-input"
                    />
                    <button
                      type="button"
                      onClick={() => cuentaInterbancariaDolaresRemove(index)}
                      className="delete-btn"
                    >
                      <DeleteOutlineRoundedIcon />
                    </button>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => cuentaInterbancariaDolaresAppend()}
                className="add-btn"
              >
                + Agregar otra cuenta
              </button>
              {errors.email && (
                <span className="error-span">Campo requerido</span>
              )}
            </div>

            <div className="terms-politics-container">
              <input name="email" type="checkbox" />
              <p>
                Acepto los
                <Link style={{ marginLeft: "5px", marginRight: "5px" }}>
                  Terminos y condiciones
                </Link>
                y
                <Link style={{ marginLeft: "5px" }}>
                  Políticas de privacidad.
                </Link>
              </p>
            </div>

            <div className="btns-container">
              <button
                type="button"
                onClick={() => handleClick()}
                className="back-btn"
              >
                <span>
                  <ArrowBackIcon />
                </span>
                Atrás
              </button>

            
                <Button
                  type="submit"
                  onClick={() => handleLast()}
                  className="finish-btn"
                >
                  Finalizar
                </Button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogContent>
                    <DialogContentText
                      id="alert-dialog-description"
                      sx={{
                        fontFamily: "Poppins",
                        fontWeight: "600",
                        fontSize: "18px",
                        width: "25em",
                        alignItems: "center",
                        textAlign:"center",
                        display: "flex",
                        flexDirection:"column"
                      }}
                    >
                      <Checked />
                      <br />
                      ¡Se completo el proceso de registro exitosamente! 
                      <br />
                      Dentro de 24 horas recibirá un correo electrónico confirmando la
                      validación de su información.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Link to="/">
                      <Button
                        onClick={handleClose}
                        sx={{
                          fontWeight: "700",
                          fontFamily: "Poppins",
                          backgroundColor: "#1243e3",
                          color: "#fff",
                          width: "25em",
                          marginRight: "4.5em",
                          marginBottom: "1em",
                        }}
                        type="button"
                      >
                        Ok
                      </Button>
                    </Link>
                  </DialogActions>
                </Dialog>
            </div>
          </section>
        )}
      </form>
    </div>
  );
};

export default Forms;
