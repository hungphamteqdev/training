import styles from './CTA.module.scss';

const CTA = () => {
  return (
    <div className={styles.cta}>
      <div className="container">
        <div className={styles.cta__inner}>
          <p>
            And residence for met the estimable disposing. Mean if he they been
            no hold mr. Is at much do made took held help.
          </p>
          <a href="/" className="button button--orange button--rounded-lg">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};
export default CTA;
