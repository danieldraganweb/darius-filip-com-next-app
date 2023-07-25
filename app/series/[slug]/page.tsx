"use client";
import styles from "../../styles/pages/slug.module.scss";
import { useState, useEffect } from "react";
import Image from "next/image";
import { client } from "../../lib/contentful/client";
import { AllEntries, Item } from "../../types";
// Fetch Galleries

const useEntry = (id: string) => {
  const [loading, setLoading] = useState(false);
  const [entry, setEntry] = useState({} as Item);

  const getSingleEntry = async (id: string) => {
    setLoading(true);
    const response = (await client.getEntry(id)) as unknown as Item;
    setEntry(response);
    setLoading(false);
  };

  useEffect(() => {
    getSingleEntry(id);
  }, [id]);

  return { entry, setEntry, title: entry.fields?.title, loading };
};

const GalleryPage = (props: any) => {
  const { title, loading, entry } = useEntry(props.params.slug);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.container}>
        {/* <p>{loading ? "Loading..." : null}</p> */}
        {entry.fields?.images.length > 0
          ? entry.fields?.images?.map((item: any, i: number) => {
              return (
                <div key={i} className={styles.imgContainer}>
                  <ul className={styles.imgList}>
                    <li className={styles.imgItem}>
                      <Image
                        loading="eager"
                        src={"https:" + item.fields.file.url}
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
                        className={` ${styles["transition-opacity"]} ${
                          styles["opacity-0"]
                        } ${styles["transition-timing-function"]} ${
                          styles["duration-300"]
                        } ${styles["ease-in-out"]}
                                  ${
                                    loading
                                      ? styles["opacity-0"]
                                      : styles["opacity-100"]
                                  }`}
                        onLoadingComplete={(src) =>
                          src.classList.remove(styles["opacity-0"])
                        }
                      />
                    </li>
                  </ul>
                </div>
              );
            })
          : null}
      </div>
    </main>
  );
};

export default GalleryPage;
