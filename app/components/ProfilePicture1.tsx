import React from "react";
import Image from "next/image";
import styles from "../styles/components/ProfilePicture1.module.scss";

function ProfileImg() {
  return (
    <main className={styles.main}>
      <Image src="/bio.jpg" alt="logo" width={350} height={350} quality={100} />
    </main>
  );
}

export default ProfileImg;
