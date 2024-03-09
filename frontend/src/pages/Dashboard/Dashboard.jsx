import DashboardNav from "../../components/DashboardNav/DashboardNav";
import AISearch from "./AISearch/AISearch";
import styles from "./Dashboard.module.scss";

export default function Dashboard() {
  return (
    <section className={styles.dashboard}>
      <DashboardNav />
      <AISearch />
    </section>
  );
}
