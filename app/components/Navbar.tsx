import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

function Navbar() {
  return (
    <div className={styles.main}>
      <div className={styles.grid}>
        <div className={styles.logo}>
          <Link href="/">DARIUS FILIP</Link>
        </div>
        <Link href="/series" className={styles.link}>
          Series
        </Link>
        <Link href="/recent" className={styles.link}>
          Recent
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact
        </Link>
        <Link href="/about" className={styles.link}>
          About
        </Link>
        <Link href="/bookshop" className={styles.link}>
          Bookshop
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
