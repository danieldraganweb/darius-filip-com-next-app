import React from "react";
import Image from "next/image";
import styles from "../styles/components/ProfileImg.module.scss";

function ProfileImg() {
  return (
    <div className={styles.container}>
      <Image
        src="/bio.jpg"
        alt="logo"
        width={40}
        height={40}
        quality={100}
        style={{
          borderRadius: "50%",
          margin: "0 0.5rem",
        }}
      />
    </div>
  );
}

export default ProfileImg;
