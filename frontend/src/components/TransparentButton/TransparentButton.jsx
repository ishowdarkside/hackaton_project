import styles from "./TransparentButton.module.scss";

export default function TransparentButton({ children, onClick }) {
  return (
    <button onClick={onClick} className={styles.btn}>
      {children}
    </button>
  );
}
