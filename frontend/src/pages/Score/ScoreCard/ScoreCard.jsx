import styles from "./ScoreCard.module.scss";

export default function ScoreCard({ badge, name, points }) {
  return (
    <div className={styles.scoreCard}>
      <span className={styles.user}>
        <img src={badge} />
        <span className={styles.name}>{name}</span>
      </span>
      <span className={styles.points}>{points} points</span>
    </div>
  );
}
