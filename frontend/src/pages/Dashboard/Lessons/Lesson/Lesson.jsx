import styles from "./Lesson.module.scss";

export default function Lesson({ icon, title, level, quantity, precentage }) {
  return (
    <div className={styles.lesson}>
      <img src={icon} />
      <h2>{title}</h2>
      <div className={styles.lessonDetails}>
        <span>{level}</span>
        <span>{quantity} quizzes</span>
      </div>
      <div className={styles.progressBar}>
        <div className={styles.bar}></div>
        <span className={styles.precentage}>{precentage}%</span>
      </div>
    </div>
  );
}
