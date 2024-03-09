// SCSS
import styles from "./PrimaryButton.module.scss";

export default function PrimaryButton({ children }) {
  return <button className={styles.btn}>{children}</button>;
}
