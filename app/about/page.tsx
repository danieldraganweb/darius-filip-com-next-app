import React from "react";
import ProfileImg from "../components/ProfilePicture1";
import styles from "../styles/pages/about.module.scss";

function About() {
  return (
    <main className={styles.main}>
      <header className={styles.headerContainer}>
        <div className={styles.ImageContainer}>
          <ProfileImg />
        </div>
        <h1 className={styles.title}>About Me</h1>
      </header>
      <section className={styles.section}>
        <div>
          <p className={styles.description}>
            I`m a software engineer with a passion for learning and teaching.
          </p>
          <p className={styles.description}>
            I`m currently working on a few projects!
          </p>
          <p className={styles.description}>
            I`m currently learning Next.js, TypeScript, and GraphQL.
          </p>
          <p className={styles.description}>
            I`m looking to collaborate on open source projects.
          </p>
          <p className={styles.description}>Ask me about anything!</p>
        </div>
      </section>
    </main>
  );
}

export default About;
