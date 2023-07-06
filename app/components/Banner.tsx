"use client";
import Image from "next/image";
import styles from "../styles/components/Banner.module.scss";

function BannerImage() {
  return (
    <div className={styles.main}>
      <Image
        src={"/main-img-3.jpg"}
        alt="macarale"
        quality={100}
        width={1250}
        height={500}
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
        blurDataURL="/main-img-2.jpg"
        placeholder="blur"
        onLoadingComplete={(image) => {
          image.classList.remove("opacity-0");
        }}
      />
    </div>
  );
}

export default BannerImage;
