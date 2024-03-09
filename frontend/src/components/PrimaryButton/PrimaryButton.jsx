// SCSS
import styles from "./PrimaryButton.module.scss";

export default function PrimaryButton({ children, onClick, fixedStyle }) {
  return (
    <button
      style={fixedStyle ? fixedStyle : styles.btn}
      className={styles.btn}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
