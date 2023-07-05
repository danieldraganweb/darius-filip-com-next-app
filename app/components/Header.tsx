import React from "react";
import styles from "../styles/components/Navbar.module.scss";
// import Logo from "./Logo";

function Header() {
  return (
    <header>
      <div className={styles.container}>
        <h1 className={styles.logo}>DARIUS FILIP</h1>
      </div>
    </header>
  );
}

export default Header;
