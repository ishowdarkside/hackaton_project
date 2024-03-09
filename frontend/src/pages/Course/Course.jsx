import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import AISearch from "../Dashboard/AISearch/AISearch";
import { IoIosArrowBack } from "react-icons/io";
import styles from "./Course.module.scss";
import IT from "../../assets/computerscience.png";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { IoIosArrowForward } from "react-icons/io";
import CourseSection from "../CourseSection/CourseSection";

export default function Course() {
  const { courseName } = useParams();
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSection, setActiveSetion] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!activeSection) return;
    setIsPlaying(true);
  }, [activeSection]);

  return (
    <section className={styles.sectionBody}>
      {!isPlaying && (
        <>
          <div className={styles.flex}>
            <button onClick={() => navigate(-1)}>
              <IoIosArrowBack />
            </button>
            <AISearch />
          </div>

          <div className={styles.courseNameWrapper}>
            <img src={IT} alt="it" className={styles.itImg} />
            <h3>Lesson 2 - Java basics</h3>
            <span>Easy - 4 quizzes</span>
          </div>

          <div className={styles.sectionWrappers}>
            <div
              className={
                activeSection === "Meet the playground"
                  ? styles.activeSection
                  : ""
              }
              onClick={() => setActiveSetion("Meet the playground")}
            >
              Meet the playground <IoIosArrowForward />
            </div>
            <div
              className={
                activeSection === "Hello World" ? styles.activeSection : ""
              }
              onClick={() => setActiveSetion("Hello World")}
            >
              Hello World <IoIosArrowForward />
            </div>
            <div
              className={
                activeSection === "Variables" ? styles.activeSection : ""
              }
              onClick={() => setActiveSetion("Variables")}
            >
              Variables <IoIosArrowForward />
            </div>
            <div
              className={
                activeSection === "Data types" ? styles.activeSection : ""
              }
              onClick={() => setActiveSetion("Data types")}
            >
              Data types <IoIosArrowForward />
            </div>
            <div
              className={
                activeSection === "Conditionals" ? styles.activeSection : ""
              }
              onClick={() => setActiveSetion("Conditionals")}
            >
              Conditionals <IoIosArrowForward />
            </div>
            <div
              className={activeSection === "Loops" ? styles.activeSection : ""}
              onClick={() => setActiveSetion("Loops")}
            >
              Loops <IoIosArrowForward />
            </div>
            <div
              className={
                activeSection === "Functions" ? styles.activeSection : ""
              }
              onClick={() => setActiveSetion("Functions")}
            >
              Functions <IoIosArrowForward />
            </div>
          </div>
        </>
      )}

      {isPlaying && <CourseSection activeSection={activeSection} />}
    </section>
  );
}
