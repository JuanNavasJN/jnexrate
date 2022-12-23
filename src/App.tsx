import { useState } from 'react';
import Form from './components/Form';
import Chart from './components/Chart';
import { PairContext } from './contexts';
import { PAIR_OPTIONS } from './util/constants';

const initialPair = PAIR_OPTIONS[0].value;

const App: React.FunctionComponent = () => {
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
      <div id="app">
        <h1>JNExRate</h1>

        <main className="main-container">
          <Form />
          <Chart />
        </main>
      </div>
    </PairContext.Provider>
  );
};

export default App;
