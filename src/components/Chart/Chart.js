import React from 'react';
import './Chart.css'
import ChartBar from './ChartBar';

function Chart({ dataPoints }) {
  const dataPointsValues = dataPoints.map(dataPoint => dataPoint.value)
  const totalMaximum = Math.max(...dataPointsValues)

  return (
    <div className="chart">
      {dataPoints.map(dataPoint => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />))}
    </div>
  );
}

export default Chart;