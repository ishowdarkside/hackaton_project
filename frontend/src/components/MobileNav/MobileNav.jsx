import styles from "./MobileNav.module.scss";
import { Link, useLocation } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";
import { LuBookmarkMinus } from "react-icons/lu";
import { HiOutlineStar } from "react-icons/hi";
import { GrMenu } from "react-icons/gr";

export default function MobileNav() {
  const location = useLocation();
  return (
    <nav className={styles.mobileNav}>
      <ul>
        <li>
          <Link>
            <GrHomeRounded /> Home
          </Link>
        </li>
        <li>
          <Link>
            <LuBookmarkMinus /> Subjects
          </Link>
        </li>
        <li>
          <Link>
            <HiOutlineStar /> Pro
          </Link>
        </li>
        <li>
          <Link>
            <GrMenu /> Menu
          </Link>
        </li>
      </ul>
    </nav>
  );
}
