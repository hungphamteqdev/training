import avatar7 from '../../images/avatar-7.png';
import verified from '../../images/check.png';
import dots from '../../images/section2-dots.png';
import SectionContentText from '../SectionContentText/SectionContentText';
import TeacherContactCard from '../TeacherContactCard/TeacherContactCard';
import VerifiedTeachers from '../VerifiedTeachers/VerifiedTeachers';
import styles from './SectionContent2.module.scss';

const SectionContent2 = () => {
  return (
    <div className={styles.section2}>
      <div className="container">
        <div className={styles.section2__inner}>
          <div className={styles.section2__text}>
            <SectionContentText
              label={'OUR FEATURE'}
              actionUrl={'/'}
              title={'All payments are linked to your Financy account'}
              desc={
                'Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. '
              }
            />
          </div>
          <div className={styles.section2__images}>
            <div>
              <VerifiedTeachers />
              <img src={verified} alt="" />
            </div>
            <TeacherContactCard
              avatarSrc={avatar7}
              name={'Morne Morkel'}
              position={'Mentor of Web Development'}
              contactUrl={'/'}
            />
            <img src={dots} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionContent2;
