import axios from 'axios';
import { currencyUrl } from '../config/index';
import { saveCurrency } from './localStorage';

export const fetchData = async () => {
  try {
    const { data } = await axios.get(currencyUrl);

    const price = Math.round(data.quotes.USDPEN * 100) / 100;

    saveCurrency(price);
  } catch (err) {
    console.error(err);
  }
}
