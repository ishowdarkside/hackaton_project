import HomePageLayout from "../HomePageLayout/HomePageLayout";
import styles from "./ChooseLevel.module.scss";
import { useHomeContext } from "../../context/HomeContext";
import newbieIcon from "../../assets/newbie.png";
import beginerIcon from "../../assets/beginner.png";
import intermediateIcon from "../../assets/intermediate.png";
import advancedIcon from "../../assets/advanced.png";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

export default function ChooseLevel({ image, navTitle }) {
  const { setPage } = useHomeContext();
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
        <PrimaryButton onClick={(prevState) => prevState + 1}>
          Continue
        </PrimaryButton>
      </div>
    </HomePageLayout>
  );
}
