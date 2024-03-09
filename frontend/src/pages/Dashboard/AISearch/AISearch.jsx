import { PiMagicWandDuotone } from "react-icons/pi";
import styles from "./AISearch.module.scss";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { prompt as promptAI } from "../../../services/ai";

export default function AISearch() {
  const [isOpenAnswerPanel, setIsOpenAnswerPanel] = useState(false);
  const [isLoadingAnswer, setIsLoadingAnswer] = useState(false);
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoadingAnswer(true);
    setIsOpenAnswerPanel(true);
    setInput("");

    const response = await promptAI(input);
    setAnswer(response.response);
    setIsLoadingAnswer(false);
  }

  return (
    <div className={styles.inputBoxWrap}>
      <div className={styles.aiSearch}>
        <PiMagicWandDuotone className={styles.icon} />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={
              isLoadingAnswer
                ? "Cooking up some magic..."
                : "Ask AI any question about Math"
            }
            disabled={isLoadingAnswer}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      </div>

      {isOpenAnswerPanel && !isLoadingAnswer && (
        <div className={styles.promptResults}>
          <div className={styles.flexContainer}>
            <span>Search results</span>
            <button onClick={() => setIsOpenAnswerPanel(false)}>
              <IoClose />
            </button>
          </div>
          <p className={styles.answer}>{answer ? answer : "Loading..."}</p>
        </div>
      )}
    </div>
  );
}
