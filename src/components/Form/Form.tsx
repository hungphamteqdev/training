import styles from './Form.module.scss';

const Form = ({ children }: { children: React.ReactNode }) => {
  return <form className={styles.form}>{children}</form>;
};
export default Form;
