import styles from './InfoCard.module.scss';

type Props = {
  avatarColor: string;
  title: string;
  desc: string;
};
const InfoCard = ({ avatarColor, title, desc }: Props) => {
  return (
    <div className={styles['info-card']}>
      <div style={{ backgroundColor: avatarColor }} />
      <div className={styles['info-card__text']}>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};
export default InfoCard;
