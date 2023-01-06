import styles from './SectionContentText.module.scss';

type Props = {
  title: string;
  desc: string;
  label: string;
  actionUrl?: string;
};

const SectionContentText = ({ title, desc, label, actionUrl }: Props) => {
  return (
    <div className={styles.section}>
      <p className={styles.section__label}>{label}</p>
      <h2 className={styles.section__title}>{title}</h2>
      <p className={styles.section__desc}>{desc}</p>
      {actionUrl && (
        <a href={actionUrl} className="button button--blue button--rounded-md">
          Get Started
        </a>
      )}
    </div>
  );
};
export default SectionContentText;
