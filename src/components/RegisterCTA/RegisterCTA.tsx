import birds from '../../images/birds.png';
import Form from '../Form/Form';
import SectionContentText from '../SectionContentText/SectionContentText';
import styles from './RegisterCTA.module.scss';

const RegisterCTA = () => {
  return (
    <div className={styles['register-cta']}>
      <div className="container">
        <div className={styles['register-cta__inner']}>
          <div className={styles['register-cta__text']}>
            <SectionContentText
              label={'Our Feature'}
              title={'Receive payments quickly from anywhere'}
              desc={
                'Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'
              }
            />
          </div>
          <div className={styles['register-cta__form']}>
            <p>Get Started for Free</p>
            <Form>
              <input type="text" placeholder="Email Address" />
              <input type="text" placeholder="Password" />
              <button className="button button--orange button--rounded-md button--full">
                GET STARTED
              </button>
            </Form>
          </div>
          <img src={birds} alt="" />
        </div>
      </div>
    </div>
  );
};
export default RegisterCTA;
