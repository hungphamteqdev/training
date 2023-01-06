import styles from './Avatar.module.scss';

const Avatar = ({ imgSrc }: { imgSrc: string }) => {
  return (
    <div className={styles.avatar}>
      <img src={imgSrc} alt="" />
    </div>
  );
};
export default Avatar;
