import { useContext } from 'react';
import { PairContext } from '../../contexts';
import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets';

import './Chart.css';

const Chart: React.FunctionComponent = () => {
  const { pair } = useContext(PairContext);

  return (
    <section id="chart-section">
      <div id="chart">
        <AdvancedRealTimeChart
          symbol={pair}
          theme="dark"
          autosize
          hide_side_toolbar
          hide_top_toolbar
          style="3"
        ></AdvancedRealTimeChart>
      </div>
    </section>
  );
};

export default Chart;
