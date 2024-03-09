import HomePageLayout from "../HomePageLayout/HomePageLayout";
import styles from "./Plan.module.scss";
import { useHomeContext } from "../../context/HomeContext";

export default function Plan({ image }) {
  const { setUserData, setPage } = useHomeContext();

  const handleChange = (val) => {
    setUserData((prevState) => ({
      ...prevState,
      role: val,
    }));

    setPage((prevState) => prevState + 1);
  };

  return (
    <HomePageLayout image={image}>
      <div className={styles.planSection}>
        <h2>Choose plan that fits you best, discounts are on!</h2>
        <p>
          Starter plan is automatically selected and you will be able to change
          the role later
        </p>
        <div className={styles.plans}>
          <div
            className={styles.planItem}
            onClick={() => handleChange("starter")}
          >
            <span>Starter</span>
            <span>Freemium</span>
          </div>
          <div
            className={styles.planItem}
            onClick={() => handleChange("student")}
          >
            <span>Student</span>
            <span>Paid by School</span>
          </div>
          <div
            className={styles.planItem}
            onClick={() => handleChange("organisation")}
          >
            <span>Organisation</span>
            <span>$4,99/user/month</span>
          </div>
        </div>
      </div>
    </HomePageLayout>
  );
}
