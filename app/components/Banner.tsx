"use client";
import Image from "next/image";
import styles from "../styles/components/Banner.module.scss";
import { useState, useEffect } from "react";

function BannerImage() {
  const images = [
    "/main-img-2.jpg",
    "/main-img-4.jpg",
    "/main-img-5.jpg",
    "/main-img-6.jpg",
    "/main-img-7.jpg",
  ];
  const [randomImage, setRandomImage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex]);
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.img}>
        <Image
          src={randomImage}
          alt="macarale"
          quality={100}
          width={1250}
          height={700}
          objectFit="contain"
          style={{
            maxWidth: "100%",
            height: "auto",
            marginBottom: "2rem",
            borderRadius: "0.2rem",
            boxShadow: "20 0 20px rgba(0, 0, 0, 0.2)",
          }}
          className={`${styles["object-contain"]} ${styles["duration-700"]} ${
            styles["ease-in-out"]
          } ${styles["group-hover:opacity-75"]} ${
            loading
              ? `${styles["scale-110"]} ${styles["blur-2xl"]} ${styles["grayscale"]}`
              : `${styles["scale-100"]} ${styles["blur-0"]} ${styles["grayscale-0"]}`
          }`}
          // onLoad={() => setLoading(false)}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
    </div>
  );
}

export default BannerImage;

// "use client";
// import Image from "next/image";
// import styles from "../styles/components/Banner.module.scss";
// import { useState, useEffect } from "react";

// function BannerImage() {
//   const images = [
//     "/main-img-2.jpg",
//     "/main-img-4.jpg",
//     "/main-img-5.jpg",
//     "/main-img-6.jpg",
//     "/main-img-7.jpg",
//   ];
//   const [randomImage, setRandomImage] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const randomIndex = Math.floor(Math.random() * images.length);
//     setRandomImage(images[randomIndex]);
//   }, []);

//   return (
//     <div className={styles.container}>
//       <div className={styles.main}>
//         <div className={styles.img}>
//           {randomImage && (
//             <Image
//               src={randomImage}
//               alt="macarale"
//               quality={100}
//               width={1250}
//               height={700}
//               objectFit="contain"
//               className={`${styles.container} ${styles["duration-700"]} ${
//                 styles["ease-in-out"]
//               } ${styles["group-hover:opacity-75"]} ${
//                 loading
//                   ? `${styles["scale-110"]} ${styles["blur-2xl"]} ${styles["grayscale"]}`
//                   : `${styles["scale-100"]} ${styles["blur-0"]} ${styles["grayscale-0"]}`
//               }`}
//               onLoad={() => setLoading(false)}
//               onLoadingComplete={() => setLoading(false)}
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BannerImage;
