import HomePageLayout from "../HomePageLayout/HomePageLayout";
import styles from "./Plan.module.scss";
import { useOnboardingContext } from "../../context/OnboardingContext";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import ComputerScience from "../../assets/computerscience.png";
import Economy from "../../assets/economy.png";
import Math from "../../assets/math.png";
import Biology from "../../assets/biology.png";

export default function ChooseStudy({ image, navTitle }) {
  const { selectedField, setSelectedField, setPage } = useOnboardingContext();

  return (
    <HomePageLayout image={image} navTitle={navTitle}>
      <div className={styles.planSection}>
        <h2>What would you like to learn</h2>
        <div className={styles.studiesWrapper}>
          <div
            className={
              selectedField === "Computer Science" ? styles.selectedField : ""
            }
            onClick={() => setSelectedField("Computer Science")}
          >
            <img src={ComputerScience} alt="computer" />
            <span>Computer science</span>
          </div>
          <div
            className={selectedField === "Economy" ? styles.selectedField : ""}
            onClick={() => setSelectedField("Economy")}
          >
            <img src={Economy} alt="economy" />
            <span>Economy</span>
          </div>
          <div
            className={selectedField === "Math" ? styles.selectedField : ""}
            onClick={() => setSelectedField("Math")}
          >
            <img src={Math} />
            <span>Math</span>
          </div>
          <div
            className={selectedField === "Biology" ? styles.selectedField : ""}
            onClick={() => setSelectedField("Biology")}
          >
            <img src={Biology} />
            <span>Biology</span>
          </div>
        </div>
        <PrimaryButton onClick={() => setPage((prevState) => prevState + 1)}>
          Continue
        </PrimaryButton>
      </div>
    </HomePageLayout>
  );
}
