import styles from "./HomePageLayout.module.scss";
import HomeNav from "../HomeNav/HomeNav";

export default function HomePageLayout({ children, image }) {
  return (
    <section className={styles.homePageLayout}>
      <div className={styles.elipseDecor}></div>
      <HomeNav />
      <img src={image} alt="Brainpulse" className={styles.brainImg} />
      {children}
    </section>
  );
}
