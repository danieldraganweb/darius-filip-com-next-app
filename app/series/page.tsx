"use client";
import React from "react";
import styles from "../styles/pages/series.module.scss";
import Gallery from "../components/Gallery";

function Series() {
  return (
    <main>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Series</h1>
      </div>
      <div className={styles.container}>
        <Gallery />
      </div>
    </main>
  );
}

export default Series;
