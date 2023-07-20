"use client";

import React, { useState, useEffect } from "react";
// import { Entry } from "../types";
import Image from "next/image";
import styles from "../styles/components/Gallery.module.scss";
import { client } from "../lib/contentful/client";
import useContentfulImages from "../hooks/useContentfulImages";

export default function Gallery() {
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
  const images = useContentfulImages();

  useEffect(() => {
    getDataAndUpdateState();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div>
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
                    className={` ${styles["duration-700"]} ${styles["ease-in-out"]}`}
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
