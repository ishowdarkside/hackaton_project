import styles from "./Subject.module.scss";
import mathIcon from "../../../assets/math_icon.png";
import unlock from "../../../assets/unlock_with_pro.png";

export default function Subject({ access }) {
  return (
    <div className={styles.subject}>
      {!access && <img src={unlock} className={styles.unlockImage} />}
      <img src={mathIcon} alt="Math" />
      <h2>Math</h2>
      <div className={styles.details}>
        <span>7 categories</span>
        <span>64 lessons</span>
      </div>
    </div>
  );
}
