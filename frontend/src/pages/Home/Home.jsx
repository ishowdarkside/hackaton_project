// SCSS
import HomePageLayout from "../../components/HomePageLayout/HomePageLayout";
import styles from "./Home.module.scss";
import SplashScreen from "./SplashScreen/SplashScreen";
import excitedLogo from "../../assets/logo/Excited.png";

export default function Home() {
  return (
    <div className={styles.home}>
      <HomePageLayout image={excitedLogo} />
    </div>
  );
}
