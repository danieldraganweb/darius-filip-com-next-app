import Banner from "./components/Banner";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Banner />
      </div>
    </main>
  );
}
