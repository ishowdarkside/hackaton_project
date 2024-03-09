import styles from "./Login.module.scss";
import Button from "../../components/PrimaryButton/PrimaryButton";

export default function Login() {
  return (
    <form className={styles.formLogin}>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <Button>Login</Button>
    </form>
  );
}
