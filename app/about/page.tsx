import React from "react";
import ProfileImg from "../components/ProfilePicture1";
import styles from "../styles/pages/about.module.scss";

function About() {
  return (
    <main className={styles.main}>
      <header className={styles.headerContainer}>
        <div className={styles.imageContainer}>
          <ProfileImg />
        </div>
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>
            Greetings and welcome to my About section. My name is Darius Filip,
            and I`m a Romanian-born photographer, based in Copenhagen, Denmark.
            I`m thrilled that you took the time to read about my journey in
            photography.
          </h3>
        </div>
      </header>
      <section className={styles.section}>
        <div>
          <p className={styles.description}>
            I was born in Romania in the early 1990s, a time when the country
            was transitioning from communism to democracy. It was a period of
            significant change, and growing up during that time certainly had an
            impact on my outlook on life.
          </p>
          <p className={styles.description}>
            Photography did not play a significant role in my early years. While
            my family owned a point-and-shoot camera, I only took pictures for
            fun, and the thought of pursuing photography as a career did not
            occur to me. That all changed in 2006 when my father gifted me my
            first digital camera. The camera was not particularly high-end, but
            it was enough to spark a passion for photography within me. From
            that day on, I started carrying a camera with me wherever I went. I
            found myself drawn to capturing moments and emotions, documenting
            life`s beauty and struggles, and discovering the world through the
            lens of my camera.
          </p>
          <p className={styles.description}>
            As my love for photography grew, so did my skills. I invested time
            and effort into learning more about the craft, experimenting with
            different techniques, and studying the works of other photographers.
            I took on various projects, ranging from portrait photography to
            landscape photography, to capture the beauty and complexities of the
            world around us.
          </p>
          <p className={styles.description}>
            As I honed my skills, my passion for photography turned into a
            profession. I started taking on clients and working on various
            commercial and personal projects. With each new project, I learned
            something new and pushed myself to improve. My photography style is
            characterized by a strong emphasis on capturing emotions and telling
            stories through images.
          </p>
          <p className={styles.description}>
            I believe that photography is not just about taking pretty pictures
            but also about capturing moments that reflect the essence of our
            human experience. My goal as a photographer is to create images that
            resonate with my audience and evoke an emotional response. I hope to
            inspire others to appreciate the beauty of the world and the people
            in it, and to see things from a different perspective.
          </p>
        </div>
      </section>
    </main>
  );
}

export default About;
