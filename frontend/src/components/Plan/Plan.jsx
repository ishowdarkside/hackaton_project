import HomePageLayout from "../HomePageLayout/HomePageLayout";
import styles from "./Plan.module.scss";
import { useHomeContext } from "../../context/HomeContext";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

export default function Plan({ image, navTitle }) {
  const { setUserData, setPage, userData } = useHomeContext();

  const handleChange = (val) => {
    setUserData((prevState) => ({
      ...prevState,
      role: val,
    }));
  };

  return (
    <HomePageLayout image={image} navTitle={navTitle}>
      <div className={styles.planSection}>
        <h2>Choose plan that fits you best, discounts are on!</h2>
        <p>
          Starter plan is automatically selected and you will be able to change
          the role later
        </p>
        <div className={styles.plans}>
          <div
            className={
              userData.role !== "starter"
                ? styles.planItem
                : `${styles.planItem} : ${styles.planActive}`
            }
            onClick={() => handleChange("starter")}
          >
            <span>Starter</span>
            <span>Freemium</span>
          </div>
          <div
            className={
              userData.role !== "student"
                ? styles.planItem
                : `${styles.planItem} : ${styles.planActive}`
            }
            onClick={() => handleChange("student")}
          >
            <span>Student</span>
            <span>Paid by School</span>
          </div>
          <div
            className={
              userData.role !== "organisation"
                ? styles.planItem
                : `${styles.planItem} : ${styles.planActive}`
            }
            onClick={() => handleChange("organisation")}
          >
            <span>Organisation</span>
            <span>$4,99/user/month</span>
          </div>
        </div>
        <PrimaryButton onClick={() => setPage((prevState) => prevState + 1)}>
          Continue
        </PrimaryButton>
      </div>
    </HomePageLayout>
  );
}
