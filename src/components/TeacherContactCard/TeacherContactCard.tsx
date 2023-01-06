import Avatar from '../Avatar/Avatar';
import styles from './TeacherContactCard.module.scss';

type Props = {
  name: string;
  avatarSrc: string;
  position: string;
  contactUrl: string;
};
const TeacherContactCard = ({
  name,
  avatarSrc,
  position,
  contactUrl,
}: Props) => {
  return (
    <div className={styles['contact-card']}>
      <Avatar imgSrc={avatarSrc} />
      <h3>{name}</h3>
      <p>{position}</p>
      <a href={contactUrl} title={name}>
        CONTACT
      </a>
    </div>
  );
};
export default TeacherContactCard;
