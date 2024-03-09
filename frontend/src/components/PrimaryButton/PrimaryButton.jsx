// SCSS
import styles from "./PrimaryButton.module.scss";

export default function PrimaryButton({ children, onClick }) {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
}
