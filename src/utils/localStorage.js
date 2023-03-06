import { futureDate } from "./callTime";

export const saveCurrency = (data) => {

  //seteo de la tasa referencial
  localStorage.setItem('currency' , JSON.stringify(data));

  //seteo de la fecha
  localStorage.setItem('date' , futureDate());
}


export const getCurrency = () => {
  const data = localStorage.getItem('currency');
  return JSON.parse(data);
}

export const getDate = () => {
  return localStorage.getItem('date');
}


