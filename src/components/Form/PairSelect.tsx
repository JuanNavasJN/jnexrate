import { PAIR_OPTIONS } from '../../util/constants';
import { initialValue } from '../../contexts';

import './PairSelect.css';

interface SelectPropsType {
  setPair: typeof initialValue.setPair;
}

const PairSelect: React.FunctionComponent<SelectPropsType> = ({ setPair }) => {
  return (
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
  );
};

export default PairSelect;
