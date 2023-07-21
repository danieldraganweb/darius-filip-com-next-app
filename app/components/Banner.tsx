"use client";

import styles from "../styles/components/Banner.module.scss";
import { useState, useEffect, use } from "react";
import Image from "next/image";
import { createClient } from "contentful";
import { useMediaQuery } from "react-responsive";
// import { Entry } from "../types";
// import { useEntry } from "../series/[slug]/page";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
});

export default function Banner() {
  const [randomImage, setRandomImage] = useState("");
  const [loading, setLoading] = useState(true);
  const isTablet = useMediaQuery({ minWidth: 501, maxWidth: 1023 });
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 500 });
  const [imagesMobile, setImagesMobile] = useState([] as any);
  const [imagesDesktop, setImagesDesktop] = useState([] as any);

  // const { entry: firtsEntry } = useEntry("36YtD224k7EESV2RlzF2eL");
  // const { entry: secondEntry } = useEntry("3rtL07Wp9oahy3A85XCQO5");

  useEffect(() => {
    const images = isMobile ? imagesMobile : imagesDesktop;
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex]);
  }, [imagesMobile, imagesDesktop, isMobile]);

  const getDataAndUpdateState = async () => {
    const listOfDesktopImagesResp = (await client.getEntry(
      "36YtD224k7EESV2RlzF2eL"
    )) as any;
    console.log(listOfDesktopImagesResp);
    const listOfMobileImagesResp = (await client.getEntry(
      "3rtL07Wp9oahy3A85XCQO5"
    )) as any;
    const listOfMobileImages = listOfMobileImagesResp.fields?.images?.map(
      (image: any) => {
        return "https:" + image.fields.file.url;
      }
    );
    setImagesMobile(listOfMobileImages);

    const listOfDesktopImages = listOfDesktopImagesResp.fields?.images?.map(
      (image: any) => {
        return "https:" + image.fields.file.url;
      }
    );
    setImagesDesktop(listOfDesktopImages);
  };
  useEffect(() => {
    getDataAndUpdateState();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
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
    </main>
  );
}
