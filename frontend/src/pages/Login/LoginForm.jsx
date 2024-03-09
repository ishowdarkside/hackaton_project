import { useState } from "react";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { login } from "../../services/auth";
import styles from "./Login.module.scss";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";

export default function LoginForm({ hasError, setHasError }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function submitForm(e) {
    e.preventDefault();
    const res = await login({ email, password });
    console.log(res);
    if (res.status === "fail") return setHasError(true);

    toast.success(res.message);
    navigate("/dashboard");
    localStorage.setItem("jwt", res.token);
  }

  return (
    <form onSubmit={(e) => submitForm(e)} className={styles.loginForm}>
      {hasError && (
        <>
          <div className={styles.errorDiv}>
            <h2>Woops, there’s an error</h2>
            <p>Please check your credential and try again!</p>
          </div>
        </>
      )}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <PrimaryButton>Login</PrimaryButton>
    </form>
  );
}
