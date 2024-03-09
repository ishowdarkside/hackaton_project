// SCSS
import styles from "./OutlinePrimaryButton.module.scss";

export default function OutlinePrimaryButton({ children }) {
  return <button className={styles.btn}>{children}</button>;
}
