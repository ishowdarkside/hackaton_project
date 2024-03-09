import DashboardNav from "../../components/DashboardNav/DashboardNav";
import MobileNav from "../../components/MobileNav/MobileNav";
import Subjects from "../../components/Subjects/Subjects";
import AISearch from "./AISearch/AISearch";
import styles from "./Dashboard.module.scss";

export default function Dashboard() {
  return (
    <section className={styles.dashboard}>
      <DashboardNav />
      <AISearch />
      <Subjects />
      <MobileNav />
    </section>
  );
}
