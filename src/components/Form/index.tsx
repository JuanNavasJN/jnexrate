import './Form.css';

const options = [
  { value: 'BRLUSD', label: 'BRL / USD' },
  { value: 'EURUSD', label: 'EUR / USD' },
  { value: 'COINBASE:BTCUSD', label: 'BTC / USD' },
  { value: 'MXNUSD', label: 'MXN / USD' },
  { value: 'JPYUSD', label: 'JPY / USD' },
  { value: 'INRUSD', label: 'INR / USD' },
  { value: 'AEDUSD', label: 'AED / USD' },
  { value: 'ZARUSD', label: 'ZAR / USD' },
  { value: 'AUDUSD', label: 'AUD / USD' }
];

const Form: React.FunctionComponent = () => {
  return (
    <section id="form-section">
      <form id="form">
        <div className="container select">
          <select id="pair" className="field">
            {options.map(opt => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div className="container">
          <div className="currency-container">
            <span className="symbol">BRL</span>
            <input id="currency-1" className="field" placeholder="0.0" />
          </div>
          <div className="currency-container">
            <span className="symbol">USD</span>
            <input id="currency-2" className="field" placeholder="0.0" />
          </div>
        </div>
      </form>
    </section>
  );
};

export default Form;
