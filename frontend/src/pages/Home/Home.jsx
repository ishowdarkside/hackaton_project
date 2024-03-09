// SCSS
import HomePageLayout from "../../components/HomePageLayout/HomePageLayout";
import styles from "./Home.module.scss";
import SplashScreen from "./SplashScreen/SplashScreen";
import excitedLogo from "../../assets/logo/Excited.png";
import Signup from "../../components/Signup/Signup";
import Plan from "../../components/Plan/Plan";
import ProceedToSignup from "../../components/ProceedToSignup/ProceedToSignup";
import AccountCreated from "../../components/AccountCreated/AccountCreated";

export default function Home() {
  return (
    <div className={styles.home}>
      <AccountCreated image={excitedLogo} />
    </div>
  );
}
