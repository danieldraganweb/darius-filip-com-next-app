"use client";
import Image from "next/image";
import styles from "../styles/components/Banner.module.scss";

function BannerImage() {
  return (
    <div className={styles.container}>
      <Image
        src={"/main-img-2.jpg"}
        alt="macarale"
        width={300}
        height={500}
        blurDataURL="/main-img-2.jpg"
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
