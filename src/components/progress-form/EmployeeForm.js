import { useState } from "react";
import { useForm } from "react-hook-form";
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

const EmployeeForm = ({ handleClick }) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>{
    handleClick("next")
    console.log("SUBMIT: ", data);
  }

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="container">
      <h2>Registro de empleado/apoderado</h2>
      <ImgLogo />
      <p>Foto de perfil empleado/apoderado</p>
      <span>
        <Tooltip
          title="Evita siempre la suplantación de identidad y riesgos relacionados a tu información personal."
          placement="top-start"
        >
          <HelpOutlineIcon />
        </Tooltip>
      </span>
      <button>Subir foto</button>
      <p>Verifique que la foto sea clara y con una buena iluminación.</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nombre completo</label>
        <span>*</span>
        <input
          name="name"
          className=""
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
          name="celphone"
          className=""
          placeholder="123 456 789"
          type="text"
          {...register("cellphone", {
            required: true,
          })}
        />
        {errors.celphone && <span>Campo requerido</span>}

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
          <option value="Bogota">Perú</option>
          <option value="Cartagena">Colombia</option>
          <option value="Medellin">Bolivia</option>
          <option value="Flexible">Chile</option>
        </select>
        {errors.email && <span>Campo requerido</span>}

        <h4>Documento de identificación</h4>
        <p>Suba su documento de identificación en imagen o PDF.</p>
        <input type="file" accept="image/*,.pdf" />
        <div>
          <Button type="button" variant="outlined" onClick={handleClickOpen}>
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
            style={{fontWeight: "700", 
            fontFamily: "Poppins",
            textAlign:"center",
            marginLeft:"20%"}} id="alert-dialog-title">
              {"Cancelar registro"}
              <Button onClick={handleClose}>
                <span style={{
                  marginLeft:"4em",
                  color: "#aaaaaa"
                }}>
                  <CloseIcon />
                </span>
              </Button>
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description" 
              style={{fontFamily: "Poppins",
              fontSize: "18px",
              width:"25em",
              textAlign:"center"
              }}>
                Al darle click a este botón se cancelará el registro actual
                ¿Seguro que desea continuar?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Link to="/">
                <Button onClick={handleClose} 
                style={{fontWeight: "700", 
                fontFamily: "Poppins", 
                backgroundColor: "#1243e3",
                color: "#fff",
                width:"25em",
                marginRight:"4em",
                marginBottom:"1em"}}>
                  Aceptar
                  </Button>
              </Link>
            </DialogActions>
          </Dialog>
        </div>
        <button type="submit" >
          Continuar
          <span>
            <ArrowForwardIcon />
          </span>
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
