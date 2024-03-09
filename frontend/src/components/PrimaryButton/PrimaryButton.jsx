// SCSS
import styles from "./PrimaryButton.module.scss";

export default function PrimaryButton({ children, onClick, fixedStyle }) {
  console.log(fixedStyle);
  return (
    <button
      style={fixedStyle !== "" ? fixedStyle : styles}
      className={styles.btn}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
