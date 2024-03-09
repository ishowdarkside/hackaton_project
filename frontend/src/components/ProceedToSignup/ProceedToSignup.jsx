import { Link } from "react-router-dom";
import HomePageLayout from "../HomePageLayout/HomePageLayout";
import styles from "./ProceedToSignup.module.scss";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import TransparentButton from "../TransparentButton/TransparentButton";

export default function ProceedToSignup({ image }) {
  return (
    <HomePageLayout image={image}>
      <div className={styles.proceedToSignup}>
        <h2>That’s a great role to start from!</h2>
        <p>
          If you want to access all subjects and other features{" "}
          <Link to="/">Upgrade to Pro</Link>.
        </p>
        <PrimaryButton>Go To Signup</PrimaryButton>
        <TransparentButton>Change plan</TransparentButton>
      </div>
    </HomePageLayout>
  );
}
