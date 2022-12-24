import Form from './components/Form';
import Chart from './components/Chart';
import PairProvider from './contexts/PairProvider';

const App: React.FunctionComponent = () => {
  return (
    <PairProvider>
      <div id="app">
        <h1>JNExRate</h1>

        <main className="main-container">
          <Form />
          <Chart />
        </main>
      </div>
    </PairProvider>
  );
};

export default App;
