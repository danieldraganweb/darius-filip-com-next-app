"use client";
import React from "react";
import styles from "../styles/pages/series.module.scss";
import Gallery from "../components/Gallery";

function Series() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Series</h1>
        <div className={styles.imgContainer}>
          <Gallery />
        </div>
      </div>
    </main>
  );
}

export default Series;
