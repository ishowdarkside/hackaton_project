import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { prompt } from "../../services/ai";

export default function CourseSection() {
  const { courseName } = useParams();
  const [qna, setQna] = useState(null);

  useEffect(() => {
    async function getQnA() {
      const res = await prompt(
        `Return array of 10 question and answers on topic ${courseName}. don't incude anything else than array.Let the answer property be array with 4 answers, and let only first element be the coorect answer`
      );

      setQna(Array.from(res.response));
    }
    getQnA();
  }, []);

  return <section></section>;
}

//return array with objects -  every object has question and answer on specific topic
