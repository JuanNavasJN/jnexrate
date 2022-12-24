import { useState } from 'react';
import { PAIR_OPTIONS } from '../util/constants';
import { PairContext } from './';

const initialPair = PAIR_OPTIONS[0].value;

interface PairProviderPropsType {
  children?: React.ReactNode;
}

const PairProvider: React.FunctionComponent<PairProviderPropsType> = ({
  children
}) => {
  const [pair, setPair] = useState(initialPair);
  const [currency1, setCurrency1] = useState(initialPair.substring(0, 3));
  const [currency2, setCurrency2] = useState(initialPair.substring(3, 6));

  const setCurrencies = (pair: string) => {
    setCurrency1(pair.substring(0, 3));
    setCurrency2(pair.substring(3, 6));
  };

  const pairContextValue = {
    pair,
    currency1,
    currency2,
    rate: 0,
    setPair: (pair: string) => {
      setPair(pair);
      if (pair.includes(':')) {
        setCurrencies(pair.split(':')[1]);
      } else {
        setCurrencies(pair);
      }
    }
  };

  return (
    <PairContext.Provider value={pairContextValue}>
      {children}
    </PairContext.Provider>
  );
};

export default PairProvider;
