// SCSS
import styles from "./Home.module.scss";
import Signup from "../../components/Signup/Signup";
import ChooseLevel from "../../components/ChooseLevel/ChooseLevel";
import AccountCreated from "../../components/AccountCreated/AccountCreated";
import { useOnboardingContext } from "../../context/OnboardingContext";
import ChooseStudy from "../../components/Plan/ChooseStudy";
//images
import logo from "../../assets/logo/logo.png";
import excitedLogo from "../../assets/logo/Excited.png";
import angryLogo from "../../assets/logo/Angry.png";
import choiceLogo from "../../assets/logo/Choice.png";
import confusedLogo from "../../assets/logo/Confused.png";
import dangerLogo from "../../assets/logo/Danger.png";
import ideaLogo from "../../assets/logo/Idea.png";
import impressedLogo from "../../assets/logo/Impressed.png";
import searchingLogo from "../../assets/logo/Searching.png";
import SplashScreen from "../../components/SplashScreen/SplashScreen";

export default function Home() {
  const { page } = useOnboardingContext();

  return (
    <div className={styles.home}>
      {page === 0 && <SplashScreen image={logo} />}
      {page === 1 && <ChooseStudy image={excitedLogo} navTitle="Choose plan" />}
      {page === 2 && (
        <ChooseLevel image={impressedLogo} navTitle="Level of knowledge" />
      )}
      {page === 3 && <Signup image={ideaLogo} navTitle="Fill the form" />}
      {page === 4 && (
        <AccountCreated image={excitedLogo} navTitle="Account created" />
      )}
    </div>
  );
}
