import styles from "./Subject.module.scss";
import { MdLockOpen } from "react-icons/md";
import mathIcon from "../../../assets/math_icon.png";

export default function Subject({ access }) {
  return (
    <div className={styles.subject}>
      {!access && (
        <div className={styles.lock}>
          <div className={styles.overlay}></div>
          <div className={styles.content}>
            <MdLockOpen />
            <h3>Unlock with Pro</h3>
          </div>
        </div>
      )}
      <img src={mathIcon} alt="Math" />
      <h2>Math</h2>
      <div className={styles.details}>
        <span>7 categories</span>
        <span>64 lessons</span>
      </div>
    </div>
  );
}
