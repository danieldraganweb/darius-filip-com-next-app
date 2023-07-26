"use client";

import styles from "../styles/pages/recent.module.scss";
import { useState, useEffect, use } from "react";
import Image from "next/image";
import { client } from "../lib/contentful/client";

export default function Recent() {
  const [loading, setLoading] = useState(true);
  const [imagesRecent, setImagesRecent] = useState([] as any);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage("");
  };

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
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Recent</h1>
      </div>
      <div className={styles.container}>
        {imagesRecent.map((src: string, i: number) => (
          <div key={i} className={styles.imgContainer}>
            <ul
              className={` ${styles["transition-opacity"]} ${
                styles["opacity-0"]
              } ${styles["transition-timing-function"]} ${
                styles["duration-300"]
              } ${styles["ease-in-out"]}
                ${loading ? styles["opacity-0"] : styles["opacity-100"]}`}
            >
              <li className={styles.imgItem}>
                <Image
                  loading="lazy"
                  layout="responsive"
                  src={src}
                  alt={`Recent Image ${i}`}
                  width={1000}
                  height={800}
                  quality={100}
                  blurDataURL={src}
                  style={{
                    borderRadius: "0.2em",
                    objectFit: "cover",
                    boxShadow: `0 2.8px 2.2px rgba(0, 0, 0, 0.034),
                    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
                    0 12.5px 10px rgba(0, 0, 0, 0.06),
                    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
                    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
                    0 100px 80px rgba(0, 0, 0, 0.12)`,
                  }}
                  onLoadStart={() => setLoading(true)}
                  onLoadingComplete={() => setLoading(false)}
                  onClick={() => handleImageClick(src)}
                />
              </li>
            </ul>
          </div>
        ))}
      </div>
      {showModal && (
        <div className={styles.modal} onClick={handleCloseModal}>
          <div className={styles.modalContent}>
            <Image
              loading="lazy"
              src={selectedImage}
              alt="Modal Image"
              width={1000}
              height={800}
              quality={100}
              blurDataURL={selectedImage}
              // layout="responsive"
              style={{
                borderRadius: "0.2em",
                boxShadow: "20 0 20px rgba(0, 0, 0, 0.2)",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      )}
    </main>
  );
}
