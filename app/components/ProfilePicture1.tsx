import React from "react";
import Image from "next/image";
import styles from "../styles/components/ProfilePicture1.module.scss";

function ProfileImg() {
  return (
    <main className={styles.main}>
      <Image
        src="/portrait.jpeg"
        alt="logo"
        width={170}
        height={170}
        quality={100}
        style={{
          borderRadius: "50%",
        }}
      />
    </main>
  );
}

export default ProfileImg;
