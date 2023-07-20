import styles from "../../styles/pages/slug.module.scss";
import { useState, useEffect } from "react";
import Link from "next/link";
import { client } from "../../lib/contentful/client";
import Image from "next/image";

export default function Gallery() {
  const [loading, setLoading] = useState(true);
  const [seriesGallery, setSeriesGallery] = useState([] as string[]);

  const getDataAndUpdateState = async () => {
    const seriesGalleryResp = await client.getEntries({
      content_type: "photoSeriesComponent",
    });

    const seriesGalleryEntry = seriesGalleryResp.items.find((entry: any) => {
      return entry.fields.images && entry.fields.images.length > 0;
    });

    const images = seriesGalleryEntry?.fields.images || [];

    const seriesGallery = images.map((image: any) => {
      return "https:" + image.fields.file.url;
    });

    setSeriesGallery(seriesGallery);
    setLoading(false);
  };

  useEffect(() => {
    getDataAndUpdateState();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Series Gallery</h1>
        {seriesGallery.map((src: string, i: number) => (
          <div key={i} className={styles.imgContainer}>
            <ul>
              <li>
                <Image
                  src={src}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                  layout="responsive"
                  loading="lazy"
                />
              </li>
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
