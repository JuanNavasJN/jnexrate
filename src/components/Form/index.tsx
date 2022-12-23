import { useContext, useEffect, useState } from 'react';
import { PAIR_OPTIONS } from '../../util/constants';
import { PairContext } from '../../contexts';
import { getRates, Rates } from '../../helpers';

import './Form.css';

const Form: React.FunctionComponent = () => {
  const { currency1, currency2, setPair, pair } = useContext(PairContext);
  const [amount1, setAmount1] = useState('');
  const [amount2, setAmount2] = useState('');
  const [rates, setRates] = useState<Rates>();

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
      <form id="form">
        <div className="container select">
          <select
            id="pair"
            className="field"
            onChange={e => setPair(e.target.value)}
          >
            {PAIR_OPTIONS.map(opt => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div className="container">
          <div className="currency-container">
            <span className="symbol">{currency1}</span>
            <input
              value={amount1}
              onChange={handleAmount1Change}
              id="currency-1"
              className="field"
              placeholder="0.0"
            />
          </div>
          <div className="currency-container">
            <span className="symbol">{currency2}</span>
            <input
              id="currency-2"
              value={amount2}
              onChange={handleAmount2Change}
              className="field"
              placeholder="0.0"
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default Form;
