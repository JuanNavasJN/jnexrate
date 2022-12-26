import { useContext, useEffect, useState } from 'react';
import { PairContext } from '../../contexts';
import { getRates, RatesType } from '../../helpers';
import PairSelect from './PairSelect';
import CurrencyInput from './CurrencyInput';
import loaderSVG from '../../assets/loader.svg';

import './Form.css';

const Form: React.FunctionComponent = () => {
  const { currency1, currency2, setPair, pair } = useContext(PairContext);
  const [amount1, setAmount1] = useState('');
  const [amount2, setAmount2] = useState('');
  const [rates, setRates] = useState<RatesType>();

  const floatPrecision = 4;

  useEffect(() => {
    getRates().then(ratesData => {
      setRates(ratesData);
    });
  }, []);

  useEffect(() => {
    if (pair && rates) {
      setAmount1('1');
      if (currency1 === 'BTC') {
        setAmount2(rates[currency1].toFixed(floatPrecision));
      } else {
        setAmount2(rates[currency2].toFixed(floatPrecision));
      }
    }
  }, [pair, rates]);

  const handleAmount1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (/^\d*\.?\d*$/.test(value)) {
      setAmount1(value);

      if (rates) {
        if (currency1 === 'BTC') {
          setAmount2(
            (Number(value) * rates[currency1]).toFixed(floatPrecision)
          );
        } else {
          setAmount2(
            (Number(value) * rates[currency2]).toFixed(floatPrecision)
          );
        }
      }
    }
  };

  const handleAmount2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (/^\d*\.?\d*$/.test(value)) {
      setAmount2(value);

      if (rates) {
        if (currency1 === 'BTC') {
          setAmount1(
            (Number(value) / rates[currency1]).toFixed(floatPrecision)
          );
        } else {
          setAmount1(
            (Number(value) / rates[currency2]).toFixed(floatPrecision)
          );
        }
      }
    }
  };

  return (
    <section id="form-section">
      {!rates ? (
        <div className="loader-container">
          <img src={loaderSVG} />
        </div>
      ) : (
        <form id="form">
          <PairSelect setPair={setPair} />
          <div className="container">
            <CurrencyInput
              currency={currency1}
              amount={amount1}
              onChange={handleAmount1Change}
            />
            <CurrencyInput
              currency={currency2}
              amount={amount2}
              onChange={handleAmount2Change}
            />
          </div>
        </form>
      )}
    </section>
  );
};

export default Form;
