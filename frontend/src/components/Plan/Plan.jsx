import HomePageLayout from "../HomePageLayout/HomePageLayout";
import styles from "./Plan.module.scss";

export default function Plan({ image }) {
  return (
    <HomePageLayout image={image}>
      <div className={styles.planSection}>
        <h2>Choose plan that fits you best, discounts are on!</h2>
        <p>
          Starter plan is automatically selected and you will be able to change
          the role later
        </p>
        <div className={styles.plans}>
          <div className={styles.planItem}>
            <span>Starter</span>
            <span>Freemium</span>
          </div>
          <div className={styles.planItem}>
            <span>Student</span>
            <span>Paid by School</span>
          </div>
          <div className={styles.planItem}>
            <span>Organisation</span>
            <span>$4,99/user/month</span>
          </div>
        </div>
      </div>
    </HomePageLayout>
  );
}
