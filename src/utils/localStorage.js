import { futureDate } from "./callTime";

export const saveCurrency = (data) => {
  localStorage.setItem('currency' , JSON.stringify(data));

  localStorage.setItem('date' , futureDate());
}

export const getCurrency = () => {
  const data = localStorage.getItem('currency');
  
  return JSON.parse(data);
}

export const getDate = () => {
  return localStorage.getItem('date');
}
