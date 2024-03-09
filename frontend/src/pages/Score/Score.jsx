import DashboardNav from "../../components/DashboardNav/DashboardNav";
import styles from "./Score.module.scss";
import ScoreCard from "./ScoreCard/ScoreCard";
import secondPlaceBadge from "../../assets/badges/second_place_badge.png";
import thirdPlaceBadge from "../../assets/badges/third_place_badge.png";

export default function Score() {
  return (
    <section className={styles.score}>
      <DashboardNav />
      <h2>TOP BRAINIACS</h2>
      <p>Last updated: March 1st</p>
      <div className={styles.scores}>
        <ScoreCard badge={secondPlaceBadge} name="Faruk Cimic" points="249" />
        <ScoreCard badge={secondPlaceBadge} name="Faruk Cimic" points="249" />
        <ScoreCard badge={thirdPlaceBadge} name="Faruk Cimic" points="249" />
      </div>
    </section>
  );
}
