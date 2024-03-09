// SCSS
import HomePageLayout from "../../components/HomePageLayout/HomePageLayout";
import styles from "./Home.module.scss";
import SplashScreen from "./SplashScreen/SplashScreen";
import excitedLogo from "../../assets/logo/Excited.png";
import Signup from "../../components/Signup/Signup";
import Plan from "../../components/Plan/Plan";
import ProceedToSignup from "../../components/ProceedToSignup/ProceedToSignup";
import AccountCreated from "../../components/AccountCreated/AccountCreated";
import { useHomeContext } from "../../context/HomeContext";

export default function Home() {
  const { page } = useHomeContext();

  return (
    <div className={styles.home}>
      {page === 1 && <Plan />}
      {page === 2 && <ProceedToSignup />}
      {page === 3 && <Signup />}
      {page === 4 && <AccountCreated image={excitedLogo} />}
    </div>
  );
}
