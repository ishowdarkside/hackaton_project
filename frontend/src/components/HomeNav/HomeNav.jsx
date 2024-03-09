import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoChevronBackOutline } from "react-icons/io5";
import styles from "./HomeNav.module.scss";
import { useHomeContext } from "../../context/HomeContext";

export default function HomeNav({ navTitle }) {
  const { setPage } = useHomeContext();
  return (
    <nav className={styles.homeNav}>
      <ul>
        <li
          className={styles.backBtn}
          onClick={() => setPage((prevState) => prevState - 1)}
        >
          <IoChevronBackOutline />
        </li>
        <li className={styles.navText}>{navTitle}</li>
        <li className={styles.infoIcon}>
          <IoMdInformationCircleOutline />
        </li>
      </ul>
    </nav>
  );
}
