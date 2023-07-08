import React from "react";
import Image from "next/image";
import styles from "../styles/components/ProfilePicture1.module.scss";

function ProfileImg() {
  return (
    <div className={styles.container}>
      <Image
        src="/portrait.jpeg"
        alt="logo"
        width={240}
        height={240}
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
