import moment from "moment/moment";
import { getDate } from "./localStorage";

export const callTime = () => {

  //llamada a la función del localStorage
  const lastDate = getDate();

  //si lo que esta en el localStorage es mayor a la fecha de hoy retornar false sino retornar true
  if (Date.parse(lastDate) > Date.parse(new Date())) return false;
  return true;
}

//seteado de la fecha y agregado de las 12 horas para que actualice
export const futureDate = () => {
  const date = new Date();
  return moment(date).add(12, 'h').local().toDate();
}
