import Banner from "./components/Banner";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.banner}>
        <Banner />
        <p className={styles.description}></p>
      </div>
    </main>
  );
}
