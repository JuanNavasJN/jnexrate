import axios from 'axios';
import { PAIR_OPTIONS } from '../util/constants';
import { fiatResponseMock } from '../util/mockData';

interface Rate {
  [symbol: string]: number;
}

export const getRates = async () => {
  try {
    const { data: cryptoResponse } = await axios.get(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'
    );

    let fiatResponse;

    if (import.meta.env.DEV) {
      fiatResponse = fiatResponseMock;
    } else {
      const data = await axios.get(
        `https://v6.exchangerate-api.com/v6/${
          import.meta.env.VITE_EXCHANGE_RATE_API_KEY
        }/latest/USD`
      );
      fiatResponse = data;
    }

    const currencies = PAIR_OPTIONS.map(pair => pair.label.split(' / ')[0]);

    const rates: Rate = {};

    for (let currency of currencies) {
      if (currency === 'BTC') {
        rates['BTC'] = cryptoResponse.bitcoin.usd;
      } else {
        rates[currency] = fiatResponse.conversion_rates[currency] || 0;
      }
    }

    return rates;
  } catch (e) {
    alert('It has happened an error on rates request 🙁');
    console.error(e);
  }
};
