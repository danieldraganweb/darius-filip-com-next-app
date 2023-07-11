import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/components/Navbar.module.scss";

function Logo() {
  return (
    <div>
      <Link href="/" className={styles.logo}>
        <Image
          src="/favicon.png"
          alt="logo"
          width={40}
          height={40}
          quality={100}
          style={{
            borderRadius: "50%",
          }}
        />
      </Link>
    </div>
  );
}

export default Logo;
