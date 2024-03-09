import { Link } from "react-router-dom";
import HomePageLayout from "../HomePageLayout/HomePageLayout";
import styles from "./AccountCreated.module.scss";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import TransparentButton from "../TransparentButton/TransparentButton";

export default function AccountCreated({ image }) {
  return (
    <HomePageLayout image={image}>
      <div className={styles.accountCreated}>
        <h2>You’ve created account successfully</h2>
        <p>
          If you want to access all subjects and other features{" "}
          <Link to="/">Upgrade to Pro</Link>.
        </p>
        <PrimaryButton>EXPLORE BRAINPULSE</PrimaryButton>
        <TransparentButton>HOW TO USE</TransparentButton>
      </div>
    </HomePageLayout>
  );
}
