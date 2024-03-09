// SCSS
import styles from "./Home.module.scss";
import SplashScreen from "./SplashScreen/SplashScreen";

export default function Home() {
  return (
    <div className={styles.home}>
      <SplashScreen />
    </div>
  );
}
