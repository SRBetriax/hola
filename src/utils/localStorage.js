export const saveCurrency = (data) => {
  localStorage.setItem('currency' , JSON.stringify(data.USDPEN));
}

export const getCurrency = () => {
  const data = localStorage.getItem('currency');

  return JSON.parse(data);
}
