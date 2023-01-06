import Avatar from '../Avatar/Avatar';
import styles from './MoneyReceived.module.scss';

type Props = {
  avatarSrc: string;
  amount: string;
  sender: string;
};

const MoneyReceived = ({ avatarSrc, amount, sender }: Props) => {
  return (
    <div className={styles.received}>
      <Avatar imgSrc={avatarSrc} />
      <div className={styles.received__info}>
        <span>+${amount}</span>
        <p>Received from {sender}</p>
      </div>
    </div>
  );
};
export default MoneyReceived;
