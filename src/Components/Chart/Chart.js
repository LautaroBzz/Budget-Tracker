
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  // To transform a dataPoint object into a single value
  const dataPointValues = props.dataPoint.map(dp => dp.value);
  // To get the maximun value (amount) from all 12 months, to set the "maxValue" below
  const totalMaximun = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoint.map((dp) => (
        <ChartBar key={dp.id} value={dp.value} maxValue={totalMaximun} label={dp.label}/>
      ))}
    </div>
  )
};
 
export default Chart;