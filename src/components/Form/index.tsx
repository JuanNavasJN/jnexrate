import './Form.css';

const Form: React.FunctionComponent = () => {
  return (
    <section id="form-section">
      <form id="form">
        <div className="container">
          <input id="pair" placeholder="Pair" />
        </div>
        <div className="container">
          <input id="currency-1" placeholder="Amount 1" />
          <input id="currency-2" placeholder="Amount 2" />
        </div>
      </form>
    </section>
  );
};

export default Form;
