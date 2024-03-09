// SCSS
import { useNavigate } from "react-router";
import { useHomeContext } from "../../context/HomeContext";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import TransparentButton from "../TransparentButton/TransparentButton";
import styles from "./SplashScreen.module.scss";

export default function SplashScreen({ image }) {
  const { setPage } = useHomeContext();
  const navigate = useNavigate();

  return (
    <section className={styles.splashScreen}>
      <img src={image} alt="Brainpulse" className={styles.image} />
      <h2>Brainpulse</h2>
      <p>An app where learning never stops</p>
      <PrimaryButton onClick={() => setPage((prevState) => prevState + 1)}>
        Get started
      </PrimaryButton>
      <TransparentButton onClick={() => navigate("/auth/login")}>
        Already have an account?
      </TransparentButton>
    </section>
  );
}
