import styles from "./Subjects.module.scss";
import { Link } from "react-router-dom";
import Subject from "./Subject/Subject";

export default function Subjects() {
  return (
    <div className={styles.subjectSection}>
      <div className={styles.subjectHeading}>
        <h3>Active subjects (1)</h3>
        <Link to="/pro">Upgrade to see all</Link>
      </div>
      <div className={styles.subjects}>
        <Subject access={true} />
        <Subject access={false} />
        <Subject access={false} />
        <Subject access={false} />
      </div>
    </div>
  );
}
