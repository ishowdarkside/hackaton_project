import DashboardNav from "../../components/DashboardNav/DashboardNav";
import MobileNav from "../../components/MobileNav/MobileNav";
import AISearch from "./AISearch/AISearch";
import styles from "./Dashboard.module.scss";
import Filters from "./Filters/Filters";
import Lessons from "./Lessons/Lessons";

export default function Dashboard() {
  return (
    <section className={styles.dashboard}>
      <DashboardNav />
      <AISearch />
      <Filters />
      <Lessons />
      <MobileNav />
    </section>
  );
}
