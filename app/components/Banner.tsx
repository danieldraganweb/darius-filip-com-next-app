"use client";
import Image from "next/image";
import styles from "../styles/components/Banner.module.scss";
import { useState } from "react";

function BannerImage() {
  const images = [
    // "/main-img-1.jpg",
    "/main-img-2.jpg",
    // "/main-img-3.jpg",
    "/main-img-4.jpg",
    "/main-img-5.jpg",
    "/main-img-6.jpg",
    "/main-img-7.jpg",
  ];
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];
  const [loading, setLoading] = useState(true);
  loading === true ? console.log("loading") : console.log("loaded");

  return (
    <div className={styles.main}>
      <div className={styles.img}>
        <Image
          src={randomImage}
          alt="macarale"
          quality={100}
          width={1250}
          height={700}
          objectFit="contain"
          style={{
            maxWidth: "100%",
            height: "auto",
            marginBottom: "2rem",
            borderRadius: "0.2rem",
            boxShadow: "20 0 20px rgba(0, 0, 0, 0.2)",
          }}
          blurDataURL={randomImage}
          placeholder="blur"
          onLoad={() => setLoading(false)}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
    </div>
  );
}

export default BannerImage;
