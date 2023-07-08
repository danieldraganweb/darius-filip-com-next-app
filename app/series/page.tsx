import React from "react";
import Image from "next/image";
import styles from "../styles/pages/series.module.scss";

function Series() {
  return (
    <main>
      <div className={styles.container}>
        <h1>Series Page</h1>
        <p>Work in progres!</p>
        <Image
          src="/OIP.jpeg"
          alt="logo"
          width={240}
          height={240}
          quality={100}
        />
      </div>
    </main>
  );
}

export default Series;
