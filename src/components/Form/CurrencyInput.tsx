import React from 'react';

import './CurrencyInput.css';

interface CurrencyInputPropsType {
  currency: string;
  amount: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CurrencyInput: React.FunctionComponent<CurrencyInputPropsType> = ({
  currency,
  amount,
  onChange
}) => {
  return (
    <div className="currency-container">
      <span className="symbol">{currency}</span>
      <input
        value={amount}
        onChange={onChange}
        className="field"
        placeholder="0.0"
      />
    </div>
  );
};

export default CurrencyInput;
