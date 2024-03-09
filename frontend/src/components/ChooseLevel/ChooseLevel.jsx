import HomePageLayout from "../HomePageLayout/HomePageLayout";
import styles from "./ChooseLevel.module.scss";
import { useOnboardingContext } from "../../context/OnboardingContext";
import newbieIcon from "../../assets/newbie.png";
import beginerIcon from "../../assets/beginner.png";
import intermediateIcon from "../../assets/intermediate.png";
import advancedIcon from "../../assets/advanced.png";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

export default function ChooseLevel({ image, navTitle }) {
  const { setPage, studyLevel, setStudyLevel } = useOnboardingContext();
  return (
    <HomePageLayout image={image} navTitle={navTitle}>
      <div className={styles.chooseLevel}>
        <h2>What is your starting point?</h2>
        <ul>
          <li
            className={studyLevel === "newbie" ? styles.activeElement : ""}
            onClick={() => setStudyLevel("newbie")}
          >
            <img src={newbieIcon} alt="" /> Newbie
          </li>
          <li
            className={studyLevel === "beginner" ? styles.activeElement : ""}
            onClick={() => setStudyLevel("beginner")}
          >
            <img src={beginerIcon} alt="" /> Beginner
          </li>
          <li
            className={
              studyLevel === "intermediate" ? styles.activeElement : ""
            }
            onClick={() => setStudyLevel("intermediate")}
          >
            <img src={intermediateIcon} alt="" /> Intermediate
          </li>
          <li
            className={studyLevel === "advanced" ? styles.activeElement : ""}
            onClick={() => setStudyLevel("advanced")}
          >
            <img src={advancedIcon} alt="" /> Advanced
          </li>
        </ul>
        <PrimaryButton onClick={(prevState) => prevState + 1}>
          Continue
        </PrimaryButton>
      </div>
    </HomePageLayout>
  );
}
