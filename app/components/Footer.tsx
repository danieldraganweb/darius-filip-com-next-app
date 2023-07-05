import styles from "../styles/components/Footer.module.scss";
import InstagramSVG from "./InstagramSVG";

function Footer() {
  return (
    <>
      <div className={styles.main}>
        <p>&copy; All content Copyright</p>
        <p className={styles.copyright}>2023 Darius Filip</p>
      </div>
    </>
  );
}

export default Footer;
