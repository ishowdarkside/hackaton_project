import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { prompt } from "../../services/ai";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import CS from "../../assets/komp.png";
import styles from "./CourseExam.module.scss";

export default function CourseSection({ activeSection }) {
  const { courseName } = useParams();
  const [qna, setQna] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeQuestion, setActiveQuestions] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showNext, setShowNext] = useState(false);
  const [activeState, setActiveState] = useState(null);

  useEffect(() => {
    async function getQnA() {
      setIsLoading(true);
      const res = await prompt(
        `Return array of 10 question and answers on topic ${courseName} ${activeSection}. don't incude anything else than array.Let the answer property be array with 4 objects as answers, and let only correct object have correct: true`
      );
      setQna(JSON.parse(res.response));
      setIsLoading(false);
    }
    getQnA();
  }, []);

  if (isLoading)
    return <span className={styles.centerLoading}>Cooking up magic...</span>;

  if (!isLoading && activeQuestion === qna.length)
    return (
      <div className={styles.centerFinish}>
        <span>You have successfully finished quiz</span>
        <span>Correct answers: {correctAnswers}</span>
      </div>
    );
  return (
    <section className={styles.sectionBody}>
      <div className={styles.aboutQuiz}>
        <img src={CS} alt="cs" />
        <p>Lesson 2 - Java basics</p>
        <p>
          {" "}
          {activeSection} - Question {activeQuestion + 1} / {qna.length}
        </p>
      </div>
      <div className={styles.buttonWrapper}>
        <p>{qna[activeQuestion].question}</p>
        {qna[activeQuestion].answers.map((e, i) => (
          <button
            className={`${activeState === e.answer ? styles.activeMe : ""}`}
            key={e.answer}
            onClick={() => {
              setActiveState(e.answer);
              setShowNext(true);
              if (e.correct) setCorrectAnswers((curr) => curr + 1);
            }}
          >
            {e.answer}
          </button>
        ))}
        {showNext && (
          <PrimaryButton
            className={styles.nextbtn}
            onClick={() => {
              setActiveQuestions((curr) => curr + 1);
              setShowNext(false);
            }}
          >
            NEXT
          </PrimaryButton>
        )}
      </div>
    </section>
  );
}

//return array with objects -  every object has question and answer on specific topic
