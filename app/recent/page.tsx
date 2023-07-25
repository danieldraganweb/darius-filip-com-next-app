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
      <h1 className={styles.title}>Recent</h1>
      <div className={styles.container}>
        {imagesRecent.map((src: string, i: number) => (
          <div key={i} className={styles.imgContainer}>
            <ul className={styles.imgList}>
              <li className={styles.imgItem}>
                <Image
                  loading="lazy"
                  src={src}
                  alt={`Recent Image ${i}`}
                  width={1000}
                  height={800}
                  layout="responsive"
                  quality={100}
                  blurDataURL={src}
                  style={{
                    borderRadius: "0.2em",
                    boxShadow: "20 0 20px rgba(0, 0, 0, 0.2)",
                    objectFit: "cover",
                  }}
                  onLoadStart={() => setLoading(true)}
                  className={` ${styles["transition-opacity"]} ${
                    styles["opacity-0"]
                  } ${styles["transition-timinh-function"]} ${
                    styles["duration-2s"]
                  } ${styles["ease-in-out"]} ${
                    loading ? styles["opacity-0"] : styles["opacity-100"]
                  }`}
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
              layout="responsive"
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
                ${loading ? styles["opacity-0"] : styles["opacity-100"]}`}
              onLoadingComplete={(src) =>
                src.classList.remove(styles["opacity-0"])
              }
            />
          </div>
        </div>
      )}
    </main>
  );
}
