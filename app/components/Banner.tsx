"use client";
import Image from "next/image";
import styles from "../styles/components/Banner.module.scss";

function BannerImage() {
  const images = ["/main-img-1.jpg", "/main-img-2.jpg", "/main-img-3.jpg"];
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];

  return (
    <div className={styles.main}>
      <Image
        src={randomImage}
        alt="macarale"
        quality={100}
        width={1250}
        height={700}
        style={{
          maxWidth: "100%",
          height: "auto",
          marginBottom: "2rem",
        }}
        blurDataURL={randomImage}
        placeholder="blur"
        onLoadingComplete={(image) => {
          image.classList.remove("opacity-0");
        }}
      />
    </div>
  );
}

export default BannerImage;
