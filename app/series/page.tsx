"use client";
import React from "react";
import Image from "next/image";
import styles from "../styles/pages/series.module.scss";
import Gallery from "../components/Gallery";
import Banner from "../components/Banner";

function Series() {
  return (
    <main>
      <div className={styles.container}>
        <h1>Series Page</h1>
        <p>Work in progres!</p>
        <Banner />
      </div>
    </main>
  );
}

export default Series;
