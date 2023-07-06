import { UrlObject } from "url";
import React from "react";
import styles from "../styles/components/Navbar.module.scss";
import Link from "next/link";

function Header() {
  const url: UrlObject = { pathname: "/" };
  return (
    <>
      <header>
        <div className={styles.container}>
          <Link href={url} className={styles.logo}>
            DARIUS FILIP
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
