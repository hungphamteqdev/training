import avatar2 from '../../images/avatar-2.png';
import avatar3 from '../../images/avatar-3.png';
import barChartLg from '../../images/bar-chart-lg.png';
import Invoices from '../Invoices/Invoices';
import MoneyReceived from '../MoneyReceived/MoneyReceived';
import SectionContentText from '../SectionContentText/SectionContentText';
import styles from './SectionContent1.module.scss';

const SectionContent1 = () => {
  return (
    <div className={styles.section1}>
      <div className="container">
        <div className={styles.section1__inner}>
          <div className={styles.section1__images}>
            <div className={styles.section1__banner}>
              <div className={styles['section1__balance-chart']}>
                <h3>Total Balance</h3>
                <p>
                  $4,200<span>+14%</span>
                </p>
                <img src={barChartLg} alt="" />
              </div>
              <div className={styles['section1__banner-noti']}>
                <MoneyReceived
                  amount={'$28,900'}
                  avatarSrc={avatar2}
                  sender={'Michael V'}
                />
              </div>
              <div className={styles['section1__banner-noti']}>
                <MoneyReceived
                  amount={'$28,900'}
                  avatarSrc={avatar3}
                  sender={'Michael V'}
                />
              </div>
              <div className={styles['section1__banner-noti']}>
                <Invoices />
              </div>
            </div>
          </div>
          <div className={styles.section1__text}>
            <SectionContentText
              label={'OUR FEATURE'}
              actionUrl={'/'}
              title={'Receive payments quickly from anywhere'}
              desc={
                'Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionContent1;
