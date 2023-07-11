"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/components/Navbar.module.scss";
import InstagramSVG from "./InstagramSVG";
import Header from "./Header";
import Logo from "./Logo";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.main}>
          <nav className={styles.navbar}>
            <div className={styles.header}>
              <div className={styles.InstagramSVG}>
                <InstagramSVG />
              </div>
              <div className={styles.logo}>
                <Logo />
                <Header />
              </div>
            </div>
            <div className={styles.burgerMenuContainer}>
              <div className={styles.burgerMenu}>
                {/* <h6 className={styles.title}>Menu</h6> */}
                <button
                  className={styles.burgerMenuButton}
                  onClick={toggleMenu}
                  aria-label="Toggle Menu"
                  aria-expanded={menuOpen ? "true" : "false"}
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
                <Link
                  key="series"
                  href="/series"
                  onClick={() => setMenuOpen(false)}
                >
                  Series
                </Link>
              </li>
              <li>
                <Link
                  key="recent"
                  href="/recent"
                  onClick={() => setMenuOpen(false)}
                >
                  Recent
                </Link>
              </li>
              <li>
                <Link
                  key="contact"
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  key="about"
                  href="/about"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  key="bookshop"
                  href="/bookshop"
                  onClick={() => setMenuOpen(false)}
                >
                  Bookshop
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
