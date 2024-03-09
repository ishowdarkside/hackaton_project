import HomePageLayout from "../HomePageLayout/HomePageLayout";
import styles from "./ChooseLevel.module.scss";
import { useOnboardingContext } from "../../context/OnboardingContext";
import newbieIcon from "../../assets/newbie.png";
import beginerIcon from "../../assets/beginner.png";
import intermediateIcon from "../../assets/intermediate.png";
import advancedIcon from "../../assets/advanced.png";

export default function ChooseLevel({ image, navTitle }) {
  const { setPage } = useOnboardingContext();
  return (
    <HomePageLayout image={image} navTitle={navTitle}>
      <div className={styles.chooseLevel}>
        <h2>Where are you starting from?</h2>
        <ul>
          <li>
            <img src={newbieIcon} alt="" /> Newbie
          </li>
          <li>
            <img src={beginerIcon} alt="" /> Beginner
          </li>
          <li>
            <img src={intermediateIcon} alt="" /> Intermediate
          </li>
          <li>
            <img src={advancedIcon} alt="" /> Advanced
          </li>
        </ul>
      </div>
    </HomePageLayout>
  );
}
