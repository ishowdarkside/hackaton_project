import styles from "./Signup.module.scss";
import Button from "../../components/PrimaryButton/PrimaryButton";
import HomePageLayout from "../HomePageLayout/HomePageLayout";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { signup } from "../../services/auth";
import { useNavigate } from "react-router";

export default function Signup({ image, navTitle }) {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  return (
    <HomePageLayout image={image} navTitle={navTitle}>
      <form
        className={styles.formSignup}
        onSubmit={handleSubmit(async (data) => {
          const res = await signup(data);
          if (res.status === "fail") return toast.error(res.message);

          toast.success(res.message);
          localStorage.setItem("jwt", res.token);
          navigate("/dashboard");
        })}
      >
        <input
          type="text"
          placeholder="Your name"
          {...register("fullName", { required: true })}
        />
        <input
          type="text"
          placeholder="Your email"
          {...register("email", { required: true })}
        />
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <Button>Create an account</Button>
      </form>
    </HomePageLayout>
  );
}
