import avatar3 from '../../images/avatar-3.png';
import avatar8 from '../../images/avatar-8.png';
import avatar9 from '../../images/avatar-9.png';
import MoneyReceived from '../MoneyReceived/MoneyReceived';
import SectionContentText from '../SectionContentText/SectionContentText';
import styles from './SectionContent3.module.scss';

const PeopleList = () => {
  return (
    <div className={styles.section3__people}>
      <MoneyReceived
        amount={'$28,900'}
        avatarSrc={avatar3}
        sender={'Michael V'}
      />
      <MoneyReceived
        amount={'$28,900'}
        avatarSrc={avatar8}
        sender={'Michael V'}
      />
      <MoneyReceived
        amount={'$28,900'}
        avatarSrc={avatar9}
        sender={'Michael V'}
      />
    </div>
  );
};

const SectionContent3 = () => {
  return (
    <div className={styles.section3}>
      <div className="container">
        <div className={styles.section3__inner}>
          <div className={styles.section3__text}>
            <SectionContentText
              label={'OUR FEATURE'}
              actionUrl={'/'}
              title={'All payments are linked to your Financy account'}
              desc={
                'Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. '
              }
            />
          </div>
          <div className={styles.section3__images}>
            <PeopleList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionContent3;
