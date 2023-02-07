import { useForm, useFieldArray } from "react-hook-form";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BankAccountForm = ({ handleClick }) => {

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
      } = useForm();
      const {
        fields: cuentaInterbancariaSolesFields,
        append: cuentaInterbancariaSolesAppend,
        remove: cuentaInterbancariaSolesRemove
      } = useFieldArray({ control, name: "cuentaInterbancariaSoles" });

      const {
        fields: cuentaInterbancariaDolaresFields,
        append: cuentaInterbancariaDolaresAppend,
        remove: cuentaInterbancariaDolaresRemove
      } = useFieldArray({ control, name: "cuentaInterbancariaDolares" });
    
      const onSubmit = (data) =>{
        handleClick("next")
        console.log("SUBMIT: ", data);
      }

    return (
        <div>
           <h2>Registro de Cuenta Bancaria</h2>
           <h4>Cuenta bancaria Soles</h4>

           <form onSubmit={handleSubmit(onSubmit)}>

           <label>Banco</label>
        <span>*</span>
        <select
          {...register("bank", {
            required: true,
          })}
        >
          <option value="Falabella">Banco Falabella</option>
          <option value="GNB">Banco GNB</option>
          <option value="Credito">Banco de Crédito del Perú</option>
        </select>
        {errors.email && <span>Campo requerido</span>}

        <label>Número de cuenta</label>
        <span>*</span>
        <input
          name="email"
          className=""
          placeholder="Ingrese número de cuenta"
          type="number"
          {...register("bankNumber", {
            required: true,
          })}
        />
        {errors.email && <span>Campo requerido</span>}

        <label>Código de cuenta interbancaria CCI</label>
        <span>*</span>
        <input 
        name="email"
          className=""
          placeholder="Ingrese código CCI"
          type="number"
          {...register("CCICode", {
            required: true,
          })}/>
        <ul>
        {cuentaInterbancariaSolesFields.map((item, index) => (
          <li key={item.id}>
            <input {...register(`cuentaInterbancaria.${index}.CCICode`)} />
            <button type="button" onClick={() => cuentaInterbancariaSolesRemove(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => cuentaInterbancariaSolesAppend({ name:"" })}
      >
        + Agregar otra cuenta
      </button>
      {errors.email && <span>Campo requerido</span>}

      <h4>Cuenta bancaria Dolares</h4>

      <label>Banco</label>
        <span>*</span>
        <select
          {...register("bank", {
            required: true,
          })}
        >
          <option value="Falabella">Banco Falabella</option>
          <option value="GNB">Banco GNB</option>
          <option value="Credito">Banco de Crédito del Perú</option>
        </select>
        {errors.email && <span>Campo requerido</span>}

        <label>Código de cuenta interbancaria CCI</label>
        <span>*</span>
        <input 
        name="email"
          className=""
          placeholder="Ingrese código CCI"
          type="number"
          {...register("CCICodeDolares", {
            required: true,
          })}/>
        <ul>
        {cuentaInterbancariaDolaresFields.map((item, index) => (
          <li key={item.id}>
            <input {...register(`cuentaInterbancariaDolares.${index}.CCICodeDolares`)} />
            <button type="button" onClick={() => cuentaInterbancariaDolaresRemove(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => cuentaInterbancariaDolaresAppend({ name:""})}
      >
        + Agregar otra cuenta
      </button>
      {errors.email && <span>Campo requerido</span>}

        <input 
        name="email"
          type="checkbox"/>
           <p>Acepto los Terminos y condiciones y Políticas de privacidad</p>

           <button onClick={() => handleClick()}><span><ArrowBackIcon /></span> Atrás</button>
           <button
        type="submit"
        onClick={() => cuentaInterbancariaDolaresAppend({ name:""})}
      >Finalizar</button>
           </form>

        </div>
    );
}
 
export default BankAccountForm;