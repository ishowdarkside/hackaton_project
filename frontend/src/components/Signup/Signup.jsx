import styles from "./Signup.module.scss";
import Button from "../../components/PrimaryButton/PrimaryButton";

export default function Signup() {
  return (
    <form className={styles.formSignup}>
      <input type="text" placeholder="Your name" />
      <input type="text" placeholder="Your email" />
      <input type="password" placeholder="Password" />
      <Button>Create an account</Button>
    </form>
  );
}
