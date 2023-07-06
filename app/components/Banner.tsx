"use client";
import Image from "next/image";
import styles from "../styles/components/Banner.module.scss";

function BannerImage() {
  return (
    <div className={styles.container}>
      <Image
        src={"/main-img-2.jpg"}
        alt="macarale"
        quality={100}
        width={300}
        height={400}
        style={{
          maxWidth: "1100px",
          padding: "0.5rem 0.5rem",
          margin: "0 auto",
          overflow: "hidden",
          position: "relative",
        }}
        blurDataURL="/main-img-1.jpg"
        placeholder="blur"
        onLoadingComplete={(image) => {
          image.classList.remove("opacity-0");
        }}
      />
    </div>
  );
}

export default BannerImage;
