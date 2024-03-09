import { Link } from "react-router-dom";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
// Images
import logo from "../../../assets/logo/logo.png";
// SCSS
import styles from "./SplashScreen.module.scss";

export default function SplashScreen() {
  return (
    <section className={styles.splashScreen}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={`${styles.pulse} ${styles.pulseLight}`}>
            <div className={`${styles.pulse} ${styles.pulseMedium}`}>
              <div className={`${styles.pulse} ${styles.pulseDark}`}>
                <img src={logo} alt="Brainpulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
