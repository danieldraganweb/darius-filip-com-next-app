"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/components/Navbar.module.scss";
import InstagramSVG from "./InstagramSVG";
import Header from "./Header";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={styles.main}>
        <nav className={styles.navbar}>
          <Header />
          <button className={styles.burgerMenu} onClick={toggleMenu}>
            Menu
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul
            className={`${styles.navLinks} ${
              menuOpen ? styles.open : styles.closed
            }`}
          >
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
        </nav>
      </div>
    </>
  );
};

export default Navbar;
