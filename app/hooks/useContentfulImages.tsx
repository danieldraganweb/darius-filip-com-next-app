"use client";

import styles from "../styles/pages/recent.module.scss";
import { useState, useEffect, use } from "react";
import Image from "next/image";
import { createClient } from "contentful";
import { Entry } from "../types";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
});

export default function useContentfulImages() {
  const [loading, setLoading] = useState(true);
  const [imagesContentful, setImagesContentful] = useState([] as any);

  const getDataAndUpdateState = async () => {
    const listOfContentfulImagesResp = (await client.getEntry(
      "36YtD224k7EESV2RlzF2eL"
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
          <Image
            src={imagesContentful[0]}
            alt="Recent Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            onLoad={() => setLoading(false)}
          />
        </div>
      </div>
    </main>
  );
}
