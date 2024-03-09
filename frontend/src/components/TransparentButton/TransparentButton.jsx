import styles from "./TransparentButton.module.scss";

export default function TransparentButton({ children }) {
  return <button className={styles.btn}>{children}</button>;
}
