import { PiMagicWandDuotone } from "react-icons/pi";
import styles from "./AISearch.module.scss";

export default function AISearch() {
  return (
    <div className={styles.aiSearch}>
      <PiMagicWandDuotone className={styles.icon} />
      <input type="text" placeholder="Ask AI any question about Math" />
    </div>
  );
}
