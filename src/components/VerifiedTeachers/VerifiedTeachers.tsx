import avatar3 from '../../images/avatar-3.png';
import avatar4 from '../../images/avatar-4.png';
import avatar5 from '../../images/avatar-5.png';
import rightArrow from '../../images/right-arrow.png';
import Avatar from '../Avatar/Avatar';
import styles from './VerifiedTeachers.module.scss';

type Props = {
  avatarSrc: string;
  name: string;
  position: string;
};
const Teacher = ({ avatarSrc, name, position }: Props) => {
  return (
    <div className={styles['verified-teachers__list-item']}>
      <Avatar imgSrc={avatarSrc} />
      <div>
        <h3>{name}</h3>
        <p>{position}</p>
      </div>
    </div>
  );
};

const VerifiedTeachers = () => {
  return (
    <div className={styles['verified-teachers']}>
      <h3>100+ Verified Teacher</h3>
      <ul className={`${styles['verified-teachers__list']} unstyle`}>
        <li>
          <Teacher
            avatarSrc={avatar3}
            name={'Ben Stokes'}
            position={'Mentor of Web Design'}
          />
        </li>
        <li>
          <Teacher
            avatarSrc={avatar4}
            name={'Hardik Pandya'}
            position={'Mentor of Web Design'}
          />
        </li>
        <li>
          <Teacher
            avatarSrc={avatar5}
            name={'Joe Root'}
            position={'Mentor of UI/UX'}
          />
        </li>
      </ul>
      <a href="/">
        See More
        <img src={rightArrow} alt="" />
      </a>
    </div>
  );
};
export default VerifiedTeachers;
