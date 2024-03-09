import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import styles from "./HomeNav.module.scss";

export default function HomeNav() {
  return (
    <nav className={styles.homeNav}>
      <ul>
        <li>
          <Link to="/" className={styles.backBtn}>
            <IoChevronBackOutline />
          </Link>
        </li>
        <li className={styles.navText}>Choose plan</li>
        <li className={styles.infoIcon}>
          <IoMdInformationCircleOutline />
        </li>
      </ul>
    </nav>
  );
}
