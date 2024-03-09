import styles from "./HomePageLayout.module.scss";
import HomeNav from "../HomeNav/HomeNav";

export default function HomePageLayout({ children, image, navTitle }) {
  return (
    <section className={styles.homePageLayout}>
      <div className={styles.elipseDecor}></div>
      <HomeNav navTitle={navTitle} />
      <img src={image} alt="Brainpulse" className={styles.brainImg} />
      <div className={styles.childrenWrapper}>{children}</div>
    </section>
  );
}
