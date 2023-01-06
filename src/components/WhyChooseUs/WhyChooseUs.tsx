import dots from '../../images/whychoose-dots.png';
import InfoCard from '../InfoCard/InfoCard';
import styles from './WhyChooseUs.module.scss';

const WhyChooseUs = () => {
  return (
    <div className={styles['why-choose']}>
      <div className="container">
        <div className={styles['why-choose__inner']}>
          <h3>Why Financy</h3>
          <h2>Why Choose Us</h2>

          <div className={styles['why-choose__reasons']}>
            <InfoCard
              avatarColor={'#F7ECFD'}
              title={'No Extra Fee'}
              desc={
                'End-to-end payments and financial management in a single solution. Meet the right platform.'
              }
            />
            <InfoCard
              avatarColor={'#D8F5F1'}
              title={'No Extra Fee'}
              desc={
                'End-to-end payments and financial management in a single solution. Meet the right platform.'
              }
            />
            <InfoCard
              avatarColor={'#D9F1FD'}
              title={'No Extra Fee'}
              desc={
                'End-to-end payments and financial management in a single solution. Meet the right platform.'
              }
            />
            <InfoCard
              avatarColor={'#FFE4E3'}
              title={'No Extra Fee'}
              desc={
                'End-to-end payments and financial management in a single solution. Meet the right platform.'
              }
            />
          </div>
          <img src={dots} alt="" />
        </div>
      </div>
    </div>
  );
};
export default WhyChooseUs;
