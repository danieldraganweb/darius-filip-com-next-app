"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/components/Navbar.module.scss";
import InstagramSVG from "./InstagramSVG";
import Header from "./Header";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={styles.main}>
        <nav className={styles.navbar}>
          <div className={styles.header}>
            <div className={styles.InstagramSVG}>
              <InstagramSVG />
            </div>
            <div className={styles.logo}>
              <Image
                src="/favicon.png"
                alt="logo"
                width={40}
                height={40}
                quality={100}
                style={{
                  borderRadius: "50%",
                  margin: "0 0.5rem",
                }}
              />
              <Header />
            </div>
          </div>

          <div className={styles.burgerMenuContainer}>
            <button
              className={styles.burgerMenu}
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <svg
                fill="var(--button-color)"
                className={styles.hamburger}
                viewBox="0 0 100 100"
                width="20"
              >
                <rect
                  className={styles.lineTop}
                  width="80"
                  height="10"
                  x="10"
                  y="25"
                  rx="5"
                />
                <rect
                  className={styles.lineMiddle}
                  width="80"
                  height="10"
                  x="10"
                  y="45"
                  rx="5"
                />
                <rect
                  className={styles.lineBottom}
                  width="80"
                  height="10"
                  x="10"
                  y="65"
                  rx="5"
                />
              </svg>
            </button>
          </div>
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
