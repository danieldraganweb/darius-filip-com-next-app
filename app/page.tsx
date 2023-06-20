// import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <h1 className={styles.title}>Welcome to my page!</h1>
        <p className={styles.description}></p>
      </div>
    </main>
  );
}
