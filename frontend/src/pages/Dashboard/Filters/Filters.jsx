import styles from "./Filters.module.scss";

export default function Filters() {
  return (
    <div className={styles.filters}>
      <button>Completed</button>
      <button>Uncompleted</button>
      <select>
        <option value="">Sort</option>
        <option value="newbie">newbie</option>
        <option value="beginner">beginner</option>
        <option value="medium">medium</option>
        <option value="advanced">advanced</option>
      </select>
    </div>
  );
}
