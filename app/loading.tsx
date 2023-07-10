"use client";

import React from "react";
import styles from "./styles/components/Loading.module.scss";

export default function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.spinnerCenter}>
        <div className={styles.spinnerBlade}></div>
        <div className={styles.spinnerBlade}></div>
        <div className={styles.spinnerBlade}></div>
        <div className={styles.spinnerBlade}></div>
        <div className={styles.spinnerBlade}></div>
        <div className={styles.spinnerBlade}></div>
        <div className={styles.spinnerBlade}></div>
        <div className={styles.spinnerBlade}></div>
        <div className={styles.spinnerBlade}></div>
        <div className={styles.spinnerBlade}></div>
        <div className={styles.spinnerBlade}></div>
        <div className={styles.spinnerBlade}></div>
      </div>
    </div>
  );
}
