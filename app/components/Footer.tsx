import styles from "../styles/components/Footer.module.scss";
import InstagramSVG from "./InstagramSVG";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.instagram}>
            <a
              href="https://www.instagram.com/dariusfilip/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramSVG />
            </a>
          </div>
          <p>&copy; All content Copyright - Darius Filip {currentYear}</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
