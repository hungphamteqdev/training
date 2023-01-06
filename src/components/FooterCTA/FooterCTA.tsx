import Form from '../Form/Form';
import SectionContentText from '../SectionContentText/SectionContentText';
import styles from './FooterCTA.module.scss';

const FooterCTA = () => {
  return (
    <div className={styles['footer-cta']}>
      <div className="container">
        <div className={styles['footer-cta__inner']}>
          <div className={styles['footer-cta__text']}>
            <SectionContentText
              label={'Why Choose Us'}
              title={'Track your crytpo portfolio on the best way possible'}
              desc={
                'End-to-end payments and financial management in a single solution. Meet the right platform to help realize.'
              }
            />
          </div>
          <div className={styles['footer-cta__form']}>
            <Form>
              <input type="text" placeholder="Email Address" />
              <input type="text" placeholder="Password" />
              <button className="button button--orange button--rounded-md button--full">
                GET STARTED
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterCTA;
