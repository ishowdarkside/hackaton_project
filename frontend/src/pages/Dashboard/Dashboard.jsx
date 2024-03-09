import DashboardNav from "../../components/DashboardNav/DashboardNav";
import styles from "./Dashboard.module.scss";

export default function Dashboard() {
  return (
    <section className={styles.dashboard}>
      <DashboardNav />
    </section>
  );
}
