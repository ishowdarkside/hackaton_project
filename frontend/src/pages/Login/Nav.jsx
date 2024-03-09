import { useNavigate } from "react-router";
import styles from "./Login.module.scss";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoChevronBackOutline } from "react-icons/io5";

export default function Nav({ children }) {
  const navigate = useNavigate();
  return (
    <nav className={styles.homeNav}>
      <ul>
        <li className={styles.backBtn} onClick={() => navigate(-1)}>
          <IoChevronBackOutline />
        </li>
        <li className={styles.navText}>{children}</li>
        <li className={styles.infoIcon}>
          <IoMdInformationCircleOutline />
        </li>
      </ul>
    </nav>
  );
}
