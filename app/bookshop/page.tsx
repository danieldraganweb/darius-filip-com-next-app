import React from "react";
import styles from "../styles/pages/bookshop.module.scss";
import Image from "next/image";

function Bookshop() {
  return (
    <main>
      <div className={styles.container}>
        <h1 className={styles.title}>Bookshop</h1>
        <Image
          src="/OIP.jpeg"
          alt="logo"
          width={300}
          height={300}
          quality={100}
        />
      </div>
    </main>
  );
}

export default Bookshop;
