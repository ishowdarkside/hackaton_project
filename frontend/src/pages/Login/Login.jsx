import { useState } from "react";
import HomeNav from "../../components/HomeNav/HomeNav";
import styles from "./Login.module.scss";
import LoginForm from "./LoginForm";
import dangerImage from "../../assets/logo/Danger.png";
import impressedImage from "../../assets/logo/Impressed.png";
import Nav from "./Nav";
export default function Login() {
  const [hasError, setHasError] = useState(false);
  return (
    <section className={styles.loginPage}>
      <img
        className={styles.brainImage}
        src={hasError ? dangerImage : impressedImage}
        alt="brain image"
      />
      <div
        className={`${styles.decorElement} ${hasError && styles.errorDecor}`}
      ></div>
      <Nav>{hasError ? "Whoopsy, watch out!" : "Welcome back"}</Nav>
      <LoginForm hasError={hasError} setHasError={setHasError} />
    </section>
  );
}
