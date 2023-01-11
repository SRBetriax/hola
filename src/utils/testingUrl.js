import axios from 'axios';
import { currencyUrl } from './../config/index';
import { saveCurrency } from './localStorage';

export const fetchData = async () => {
  try {
    const { data } = await axios.get(currencyUrl);

    saveCurrency(data.quotes)
  } catch (err) {
    //
  }
}
