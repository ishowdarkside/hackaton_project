import { Link } from "react-router-dom";
import HomePageLayout from "../HomePageLayout/HomePageLayout";
import styles from "./ProceedToSignup.module.scss";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import TransparentButton from "../TransparentButton/TransparentButton";
import { useOnboardingContext } from "../../context/OnboardingContext";

export default function ProceedToSignup({ image, navTitle }) {
  const { setPage } = useOnboardingContext();
  return (
    <HomePageLayout image={image} navTitle={navTitle}>
      <div className={styles.proceedToSignup}>
        <h2>That’s a great role to start from!</h2>
        <p>
          If you want to access all subjects and other features{" "}
          <Link to="/">Upgrade to Pro</Link>.
        </p>
        <PrimaryButton onClick={() => setPage((prevState) => prevState + 1)}>
          Go To Signup
        </PrimaryButton>
        <TransparentButton
          onClick={() => setPage((prevState) => prevState - 1)}
        >
          Change plan
        </TransparentButton>
      </div>
    </HomePageLayout>
  );
}
