import logo2 from '../../images/Group-1.png';
import logo3 from '../../images/Group-2.png';
import logo4 from '../../images/Group-3.png';
import logo5 from '../../images/Group-4.png';
import logo6 from '../../images/Group-5.png';
import logo1 from '../../images/Group.png';

import styles from './RelatedCompanies.module.scss';

const RelatedCompanies = () => {
  return (
    <div className={styles['related-companies']}>
      <div className="container">
        <h3>Over 32k+ software businesses growing with AR Shakir</h3>
        <div className={styles['related-companies__logos']}>
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
          <img src={logo5} alt="" />
          <img src={logo6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RelatedCompanies;
