import lineChart from '../../images/line-chart.png';
import styles from './StatusChart.module.scss';

const StatusChart = () => {
  return (
    <div className={styles['status-chart']}>
      <img src={lineChart} alt="" />
    </div>
  );
};
export default StatusChart;
