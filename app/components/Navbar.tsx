"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";
import InstagramSVG from "./InstagramSVG";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        DARIUS FILIP
      </Link>
      <button className={styles.burgerMenu} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
        <li>
          <InstagramSVG />
        </li>
        <li>
          <Link href="/series">Series.</Link>
        </li>
        <li>
          <Link href="/recent">Recent.</Link>
        </li>
        <li>
          <Link href="/contact">Contact.</Link>
        </li>
        <li>
          <Link href="/about">About.</Link>
        </li>
        <li>
          <Link href="/bookshop">Bookshop.</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
