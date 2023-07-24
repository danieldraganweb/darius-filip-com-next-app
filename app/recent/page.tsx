"use client";

import styles from "../styles/pages/recent.module.scss";
import { useState, useEffect, use } from "react";
import Image from "next/image";
import { client } from "../lib/contentful/client";

export default function Recent() {
  const [loading, setLoading] = useState(true);
  const [imagesRecent, setImagesRecent] = useState([] as any);

  const getDataAndUpdateState = async () => {
    const listOfRecentImagesResp = (await client.getEntry(
      "2hLiAzNJ7JfDpsqD9qyNnY"
    )) as any;

    // console.log(listOfRecentImagesResp);

    const listOfRecentImages = listOfRecentImagesResp.fields?.images?.map(
      (image: any) => {
        return "https:" + image.fields.file.url;
      }
    );
    setImagesRecent(listOfRecentImages);
  };

  useEffect(() => {
    getDataAndUpdateState();
  }, []);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Recent</h1>
      <div className={styles.container}>
        {imagesRecent.map((src: string, i: number) => (
          <div key={i} className={styles.imgContainer}>
            <ul className={styles.imgList}>
              <li className={styles.imgItem}>
                <Image
                  loading="eager"
                  src={src}
                  alt={`Recent Image ${i}`}
                  width={1000}
                  height={800}
                  layout="responsive"
                  quality={100}
                  priority={true}
                  blurDataURL="/main-img-1.jpg"
                  style={{
                    borderRadius: "0.2em",
                    boxShadow: "20 0 20px rgba(0, 0, 0, 0.2)",
                    objectFit: "contain",
                  }}
                  className={` ${styles["duration-700"]} ${
                    styles["ease-in-out"]
                  } ${styles["group-hover:opacity-75"]} ${
                    loading
                      ? `${styles["scale-110"]} ${styles["blur-2xl"]} ${styles["grayscale"]}`
                      : `${styles["scale-100"]} ${styles["blur-0"]} ${styles["grayscale-0"]}`
                  }`}
                  onLoadingComplete={() => setLoading(false)}
                />
              </li>
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
