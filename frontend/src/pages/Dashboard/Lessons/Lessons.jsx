import Lesson from "./Lesson/Lesson";
import styles from "./Lessons.module.scss";
import introductionIcon from "../../../assets/introduction_icon.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import { useNavigate } from "react-router";

export default function Lessons() {
  const navigate = useNavigate();
  return (
    <div className={styles.lessons}>
      <Lesson
        icon={introductionIcon}
        title="Lesson 2 - Java basics"
        level="easy"
        quantity="4"
        onClick={() => navigate("/course/java")}
        precentage={100}
      />

      <Lesson
        icon={introductionIcon}
        title="Lesson 1 - Introduction"
        level="easy"
        quantity="2"
        precentage={100}
      />
      <PrimaryButton
        fixedStyle={{
          position: "fixed",
          bottom: "13rem",
          width: "90%",
          padding: "16px 10px",
          borderRadius: "12px",
          border: "0",
          textTransform: "uppercase",
          fontSize: "15px",
          fontWeight: "bold",
          color: "#bp-brand-tertiary",
          backgroundColor: "#bp-brand-primary",
          margin: "3rem 0 1.5rem 0",
          boxShadow: "0px 6px 0px 0px rgba(232, 95, 13, 0.75)",
          WebkitBoxShadow: "0px 6px 0px 0px rgba(232, 95, 13, 0.75)",
          MozBoxShadow: "0px 6px 0px 0px rgba(232, 95, 13, 0.75)",
        }}
      >
        Continue: Lesson 2
      </PrimaryButton>
    </div>
  );
}
