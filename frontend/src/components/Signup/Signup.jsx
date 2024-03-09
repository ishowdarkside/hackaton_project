import styles from "./Signup.module.scss";
import Button from "../../components/PrimaryButton/PrimaryButton";
import HomePageLayout from "../HomePageLayout/HomePageLayout";

export default function Signup({ image }) {
  return (
    <HomePageLayout image={image}>
      <form className={styles.formSignup}>
        <input type="text" placeholder="Your name" />
        <input type="text" placeholder="Your email" />
        <input type="password" placeholder="Password" />
        <Button>Create an account</Button>
      </form>
    </HomePageLayout>
  );
}
