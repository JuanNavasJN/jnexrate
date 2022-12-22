import { useState } from 'react';
import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets';

import './Chart.css';

const Chart: React.FunctionComponent = () => {
  const [symbol] = useState('EURUSD');

  return (
    <section id="chart-section">
      <div id="chart">
        <AdvancedRealTimeChart
          symbol={symbol}
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
