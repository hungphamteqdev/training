import barChartNums from '../../images/bar-chart-nums.png';
import barChart from '../../images/bar-chart.png';
import styles from './BalanceChart.module.scss';

const BalanceChart = () => {
  return (
    <div className={styles['balance-chart']}>
      <h3>Total Balance</h3>
      <p>
        $4,200
        <span>+14%</span>
      </p>
      <img src={barChartNums} alt="" />
      <img src={barChart} alt="" />
    </div>
  );
};
export default BalanceChart;
