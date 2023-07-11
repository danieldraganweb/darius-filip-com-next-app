"use client";
import Image from "next/image";
import styles from "../styles/components/Banner.module.scss";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export default function BannerImage() {
  const [randomImage, setRandomImage] = useState("");
  const [loading, setLoading] = useState(true);
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  useEffect(() => {
    const imagesMobile = [
      "/main-img-2.jpg",
      "/main-img-4.jpg",
      "/main-img-5.jpg",
      "/main-img-6.jpg",
      "/main-img-7.jpg",
    ];
    const imagesDesktop = [
      "/main-img-1.jpg",
      "/main-img-3.jpg",
      "/main-img-8.jpg",
      "/main-img-9.jpeg",
      "/main-img-10.jpg",
    ];
    const images = isDesktop ? imagesDesktop : imagesMobile;
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex]);
  }, [isDesktop]);

  return (
    <div className={styles.main}>
      <div className={styles.imgContainer} onLoad={() => setLoading(false)}>
        <Image
          src={randomImage}
          alt="Banner Image"
          quality={100}
          width={1100}
          height={690}
          priority={true}
          style={{
            objectFit: "cover",
            borderRadius: "0.2rem",
            boxShadow: "20 0 20px rgba(0, 0, 0, 0.2)",
          }}
          className={` ${styles["duration-700"]} ${styles["ease-in-out"]} ${
            styles["group-hover:opacity-75"]
          } ${
            loading
              ? `${styles["scale-110"]} ${styles["blur-2xl"]} ${styles["grayscale"]}`
              : `${styles["scale-100"]} ${styles["blur-0"]} ${styles["grayscale-0"]}`
          }`}
        />
      </div>
    </div>
  );
}
