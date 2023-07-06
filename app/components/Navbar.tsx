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
            <div className={styles.burgerMenu}>
              <button
                className={styles.burgerMenuButton}
                onClick={toggleMenu}
                aria-label="Toggle Menu"
              >
                <svg
                  fill="var(--button-color)"
                  className={styles.hamburger}
                  viewBox="0 0 90 90"
                  width="22"
                >
                  <rect
                    className={styles.lineTop}
                    width="88"
                    height="10"
                    x="1"
                    y="10"
                    rx="5"
                  />
                  <rect
                    className={styles.lineMiddle}
                    width="88"
                    height="10"
                    x="1"
                    y="40"
                    rx="5"
                  />
                  <rect
                    className={styles.lineBottom}
                    width="88"
                    height="10"
                    x="1"
                    y="70"
                    rx="5"
                  />
                </svg>
              </button>
            </div>
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
