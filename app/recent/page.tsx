import React from "react";
import styles from "../styles/pages/recent.module.scss";
import Image from "next/image";
function Recent() {
  return (
    <main>
      <div className={styles.container}>
        <h1>Recent Page</h1>
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

export default Recent;
