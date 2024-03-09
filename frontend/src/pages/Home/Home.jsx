import styles from "./Home.module.scss";
import ChooseLevel from "../../components/ChooseLevel/ChooseLevel";
import { useOnboardingContext } from "../../context/OnboardingContext";
import ChooseStudy from "../../components/Plan/ChooseStudy";
import logo from "../../assets/logo/logo.png";
import excitedLogo from "../../assets/logo/Excited.png";
import impressedLogo from "../../assets/logo/Impressed.png";
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
    </div>
  );
}
