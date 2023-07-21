import React from "react";
import styles from "../styles/pages/bookshop.module.scss";
import Image from "next/image";
import Link from "next/link";

function Bookshop() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Coming soon!</h1>
        <Link href="/">
          <button className={styles.button}>Back to Home</button>
        </Link>
      </div>
    </main>
  );
}

export default Bookshop;
