export const saveCurrency = (data) => {
  localStorage.setItem('currency' , data);
}

export const getCurrency = () => {
  localStorage.getItem('currency');
}
