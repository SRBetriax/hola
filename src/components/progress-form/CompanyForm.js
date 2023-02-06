import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CompanyForm = ({ handleClick }) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>{
    handleClick("next")
    console.log("SUBMIT: ", data);
  }

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

  return (
    <div>
      <h2>Registro de la empresa</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <option value="Bogota">Lima</option>
          <option value="Cartagena">San Martín de Porres</option>
          <option value="Medellin">Comas</option>
          <option value="Flexible">Villa María del Triunfo</option>
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

        <label>Segunda dirección</label>
        <span>*</span>
        <input
          name="name"
          className=""
          placeholder="Segunda dirección"
          type="text"
          {...register("secAddress", {
            required: true,
          })}
        />
        {errors.secAddress && <span>Campo requerido</span>}

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
          {...register("celphone", {
            required: true,
          })}
        />
        {errors.celphone && <span>Campo requerido</span>}

        <label>Página web</label>
        <span>*</span>
        <input
          name="email"
          className=""
          placeholder="www.betriax.com"
          type="text"
          {...register("email", {
            required: true,
          })}
        />
        {errors.email && <span>Campo requerido</span>}

        <h4>Documentos de la empresa</h4>
        <p>Documentos en PDF o imagen serán usados estrictamente durante el proceso de verificación</p>
        <h4>Poder</h4><span>*</span>
        <p>Menor a 90 días</p>
        <input 
        type="file"
        accept="image/*,.pdf"
        />
        <h4>Recibo de servicios públicos</h4><span>*</span>
        <p>Agua, luz, celular</p>
        <input 
        type="file"
        accept="image/*,.pdf"
        />
        <h4>Poder</h4><span>*</span>
        <p>Menor a 90 días</p>
        <input 
        type="file"
        accept="image/*,.pdf"
        />

        <button onClick={() => handleClick()}><span><ArrowBackIcon /></span> Atrás</button>
        <button type="submit">Continuar <span><ArrowForwardIcon /></span></button>
      </form>
    </div>
  );
};

export default CompanyForm;
