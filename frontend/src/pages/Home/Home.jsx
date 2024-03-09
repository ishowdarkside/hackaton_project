// SCSS
import styles from "./Home.module.scss";
import Signup from "../../components/Signup/Signup";
import Plan from "../../components/Plan/Plan";
import ProceedToSignup from "../../components/ProceedToSignup/ProceedToSignup";
import AccountCreated from "../../components/AccountCreated/AccountCreated";
import { useHomeContext } from "../../context/HomeContext";
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
  const { page } = useHomeContext();

  return (
    <div className={styles.home}>
      {page === 0 && <SplashScreen image={logo} />}
      {page === 1 && <Plan image={excitedLogo} navTitle="Choose plan" />}
      {page === 2 && (
        <ProceedToSignup image={impressedLogo} navTitle="Plan: Starter" />
      )}
      {page === 3 && <Signup image={ideaLogo} navTitle="Fill the form" />}
      {page === 4 && (
        <AccountCreated image={excitedLogo} navTitle="Account created" />
      )}
    </div>
  );
}
