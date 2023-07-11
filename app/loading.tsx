import React from "react";
import styles from "./styles/components/Loading.module.scss";

export default function Loading() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.dotWave}>
          <div className={styles.dotWaveDot}></div>
          <div className={styles.dotWaveDot}></div>
          <div className={styles.dotWaveDot}></div>
          <div className={styles.dotWaveDot}></div>
        </div>
      </div>
    </main>
  );
}
