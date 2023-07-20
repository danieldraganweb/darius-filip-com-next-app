"use client";

import styles from "../styles/pages/recent.module.scss";
import { useState, useEffect, use } from "react";
import Image from "next/image";
import { createClient } from "contentful";
// import { Entry } from "../types";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
});

export default function ContentfulImages() {
  const [loading, setLoading] = useState(true);
  const [imagesContentful, setImagesContentful] = useState([] as string[]);

  const getDataAndUpdateState = async () => {
    const listOfContentfulImagesResp = (await client.getEntry(
      "4o0r5Ho4L7HzPy5Jx5hQTY"
    )) as any;
    console.log(listOfContentfulImagesResp);

    const listOfContentfulImages =
      listOfContentfulImagesResp.fields?.images?.map((image: any) => {
        return "https:" + image.fields.file.url;
      });

    setImagesContentful(listOfContentfulImages);
  };

  useEffect(() => {
    getDataAndUpdateState();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          {imagesContentful.map((src: string, i: number) => (
            <div key={i} className={styles.imgContainer}>
              <ul className={styles.imgList}>
                <li className={styles.imgItem}>
                  <Image
                    loading="eager"
                    src={src}
                    alt={`Recent Image ${i}`}
                    width={300}
                    height={300}
                    layout="responsive"
                    objectFit="cover"
                    quality={100}
                    priority={true}
                    blurDataURL="/main-img-1.jpg"
                    style={{
                      borderRadius: "0.2em",
                      boxShadow: "20 0 20px rgba(0, 0, 0, 0.2)",
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
      </div>
    </main>
  );
}
