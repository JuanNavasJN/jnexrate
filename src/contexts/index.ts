import React from 'react';

export const initialValue = {
  pair: '',
  currency1: '',
  currency2: '',
  rate: 0,
  setPair: (pair: string) => {}
};

export const PairContext = React.createContext(initialValue);
