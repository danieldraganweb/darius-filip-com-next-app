"use client";
import Image from "next/image";
import styles from "../styles/components/Banner.module.scss";

function BannerImage() {
  return (
    <div className={styles.container}>
      <Image
        src={"/main-img-1.jpg"}
        alt="macarale"
        width={970}
        height={700}
        blurDataURL="/main-img-1.jpg"
        placeholder="blur"
        className="transition-opacity opacity-0 duration-[3s]"
        onLoadingComplete={(image) => {
          image.classList.remove("opacity-0");
        }}
      />
    </div>
  );
}

export default BannerImage;
