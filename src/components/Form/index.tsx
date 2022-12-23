import { useContext, useEffect } from 'react';
import { PAIR_OPTIONS } from '../../util/constants';
import { PairContext } from '../../contexts';
import { getRates } from '../../helpers';

import './Form.css';

const Form: React.FunctionComponent = () => {
  const { currency1, currency2, setPair } = useContext(PairContext);

  useEffect(() => {
    getRates().then(res => console.log(res));
  }, []);

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
            <input id="currency-1" className="field" placeholder="0.0" />
          </div>
          <div className="currency-container">
            <span className="symbol">{currency2}</span>
            <input id="currency-2" className="field" placeholder="0.0" />
          </div>
        </div>
      </form>
    </section>
  );
};

export default Form;
