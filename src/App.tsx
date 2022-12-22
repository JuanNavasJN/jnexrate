import Form from './components/Form';
import Chart from './components/Chart';

const App: React.FunctionComponent = () => {
  return (
    <div id="app">
      <h1>JNExRate</h1>

      <main className="main-container">
        <Form />
        <Chart />
      </main>
    </div>
  );
};

export default App;
