import invoices from '../../images/invoices-image.png';
import styles from './Invoices.module.scss';

const Invoices = () => {
  return (
    <div className={styles.invoices}>
      <h3>Invoices</h3>
      <div className={styles.invoices__image}>
        <img src={invoices} alt="" />
      </div>
      <div className={styles.invoices__note}>
        <div>Paid</div>
        <div>Unpaid</div>
        <div>Cancelled</div>
      </div>
    </div>
  );
};
export default Invoices;
