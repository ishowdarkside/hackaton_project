import styles from "./Dashboard.module.scss";
import logoIcon from "../../assets/logo/profile_logo_icon.png";
import brainPulseLogoText from "../../assets/logo/brainpulse.png";

export default function DashboardNav() {
  return (
    <nav className={styles.dashboardNav}>
      <span className={styles.profile}>
        <img src={brainPulseLogoText} />
      </span>
      <img src={logoIcon} alt="Brainpulse" className={styles.profileIcon} />
    </nav>
  );
}
