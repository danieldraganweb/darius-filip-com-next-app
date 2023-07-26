"use client";

import { useState, useEffect } from "react";
import styles from "../../styles/pages/slug.module.scss";
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

  return (
    <main className={styles.main}>
      <h1
        className={`${styles.title} ${styles["transition-opacity"]} ${
          styles["opacity-0"]
        } ${styles["transition-timing-function"]} ${styles["duration-300"]} ${
          styles["ease-in-out"]
        }${loading ? styles["opacity-0"] : styles["opacity-100"]}}`}
      >
        {title}
      </h1>
      <div className={styles.container}>
        {entry.fields?.images.length > 0
          ? entry.fields?.images?.map((item: any, i: number) => {
              return (
                <div key={i} className={styles.imgContainer}>
                  <ul
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
                  >
                    <li className={styles.imgItem}>
                      <Image
                        loading="lazy"
                        src={"https:" + item.fields.file.url}
                        alt={`Recent Image ${i}`}
                        width={1000}
                        height={800}
                        quality={100}
                        layout="responsive"
                        style={{
                          borderRadius: "0.2em",
                          objectFit: "contain",
                          boxShadow: `0 2.8px 2.2px rgba(0, 0, 0, 0.034),
                          0 6.7px 5.3px rgba(0, 0, 0, 0.048),
                          0 12.5px 10px rgba(0, 0, 0, 0.06),
                          0 22.3px 17.9px rgba(0, 0, 0, 0.072),
                          0 41.8px 33.4px rgba(0, 0, 0, 0.086),
                          0 100px 80px rgba(0, 0, 0, 0.12)`,
                        }}
                        onLoadingComplete={(src) =>
                          src.classList.remove(styles["opacity-0"])
                        }
                        onClick={() =>
                          handleImageClick("https:" + item.fields.file.url)
                        }
                      />
                    </li>
                  </ul>
                </div>
              );
            })
          : null}
      </div>
      {showModal && (
        <div className={styles.modal} onClick={handleCloseModal}>
          <div className={styles.modalContent}>
            <Image
              src={selectedImage}
              alt="Modal Image"
              width={1000}
              height={800}
              quality={100}
              priority={true}
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
};

export default GalleryPage;
