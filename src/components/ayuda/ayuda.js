import { useForm, useFieldArray } from "react-hook-form";

const Ayuda = () => {

    const {
        register,
        control,
        handleSubmit,
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
    
    return (
        <div style={{backgroundColor: "#E5E5E5"}}>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                    {...register(`cuentaInterbancariaSoles.${index}.CCICodeSoles`)}
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
            <button
              type="submit"
            >
              chau
            </button>
            {errors.email && <span>Campo requerido</span>}
            </form>
        </div>
    );
}
 
export default Ayuda