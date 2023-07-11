"use client";

import Image from "next/image";
import styles from "../styles/components/Banner.module.scss";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export default function BannerImage() {
  const [randomImage, setRandomImage] = useState("");
  const [loading, setLoading] = useState(true);
  const isDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 1440 });
  const isTablet = useMediaQuery({ minWidth: 501, maxWidth: 1023 });
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 500 });

  useEffect(() => {
    const imagesMobile = [
      "/main-img-2.jpg",
      "/main-img-4.jpg",
      "/main-img-5.jpg",
      "/main-img-6.jpg",
      "/main-img-7.jpg",
      "/main-img-12.jpg",
    ];
    const imagesDesktop = [
      "/main-img-11.jpg",
      "/main-img-13.jpg",
      "/main-img-3.jpg",
      "/main-img-8.jpg",
      "/main-img-9.jpeg",
      "/main-img-10.jpg",
    ];
    const images = isMobile ? imagesMobile : imagesDesktop;
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex]);
  }, [isMobile]);

  return (
    <div className={styles.main}>
      <div className={styles.imgContainer}>
        <Image
          src={randomImage}
          alt="Banner Image"
          quality={100}
          width={1100}
          height={isMobile ? 580 : isTablet ? 600 : 670}
          priority={true}
          blurDataURL="/main-img-1.jpg"
          style={{
            borderRadius: "0.2em",
            boxShadow: "20 0 20px rgba(0, 0, 0, 0.2)",
          }}
          className={` ${styles["duration-700"]} ${styles["ease-in-out"]} ${
            styles["group-hover:opacity-75"]
          } ${
            loading
              ? `${styles["scale-110"]} ${styles["blur-2xl"]} ${styles["grayscale"]}`
              : `${styles["scale-100"]} ${styles["blur-0"]} ${styles["grayscale-0"]}`
          }`}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
    </div>
  );
}
