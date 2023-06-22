import styles from "../styles/components/Footer.module.scss";
import InstagramSVG from "./InstagramSVG";

function Footer() {
  return (
    <>
      <div className={styles.main}>
        <InstagramSVG />
        <p className={styles.copyright}>&copy; 2023 Darius Filip</p>
      </div>
    </>
  );
}

export default Footer;
