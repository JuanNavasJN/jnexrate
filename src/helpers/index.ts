import axios from 'axios';
import { PAIR_OPTIONS } from '../util/constants';

export interface RatesType {
  [symbol: string]: number;
}

export const getRates = async () => {
  try {
    const { data: cryptoResponse } = await axios.get(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'
    );

    const { data: fiatResponse } = await axios.get(
      'https://api.exchangerate.host/latest?base=USD'
    );

    const currencies = PAIR_OPTIONS.map(pair => pair.label.split(' / ')[1]);

    const rates: RatesType = {};

    for (let currency of currencies) {
      if (currency !== 'USD') {
        rates[currency] = fiatResponse.rates[currency] || 0;
      }
    }
    rates['BTC'] = cryptoResponse.bitcoin.usd;

    return rates;
  } catch (e) {
    alert('It has happened an error on rates request 🙁');
    console.error(e);
  }
};
