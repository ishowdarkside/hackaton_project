import styles from "./HomePageLayout.module.scss";
import HomeNav from "../HomeNav/HomeNav";

export default function HomePageLayout({ children, image }) {
  return (
    <section className={styles.homePageLayout}>
      <HomeNav />
      <img src={image} alt="Brainpulse" />
      {children}
    </section>
  );
}
