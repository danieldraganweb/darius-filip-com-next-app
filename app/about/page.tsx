import React from "react";
import ProfileImg from "../components/ProfilePicture";
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
            Greetings! I&rsquo;m Darius Filip, a Romanian-born photographer now
            based in Copenhagen, Denmark, after many years of living in Germany
            and exploring the world. I&rsquo;m thrilled that you took the time
            to read about my journey in photography.
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
            life&rsquo;s beauty and struggles, and discovering the world through
            the lens of my camera.
          </p>
          <p className={styles.description}>
            In 2010, I moved to Hamburg, Germany where I resided for the next 8
            years. With my trusty camera in hand, I documented my experiences
            living in Hamburg through street photography and landscapes. After
            honing my skills in Germany, I relocated to Copenhagen, Denmark in
            2018. The vibrancy and scenery of Copenhagen have provided endless
            inspiration for my photography over the last 5 years of living here.
          </p>
          <p className={styles.description}>
            As my love for photography grew, so did my skills. I invested time
            and effort into learning more about the craft, experimenting with
            different techniques, and studying the works of other photographers.
            I took on various projects, ranging from portrait photography to
            landscape photography, to capture the beauty and complexities of the
            world around us. As I experimented with composition, lighting, and
            telling visual stories, I was hooked on the craft.
          </p>
          <p className={styles.description}>
            I mainly shoot 35mm film which adds a unique organic texture to my
            style defined by emotional, narrative images that reflect my view of
            the world. My goal isn&rsquo;t just pretty pictures, but using
            photography to connect with people and invite them to see things
            from a new perspective.
          </p>
          <p className={styles.description}>
            I believe that photography is not just about taking pretty pictures
            but also about capturing moments that reflect the essence of our
            human experience. My goal as a photographer is to create images that
            resonate with my audience and evoke an emotional response. I hope to
            inspire others to appreciate the beauty of the world and the people
            in it, and to see things from a different perspective.
          </p>
          <p className={styles.description}>
            Some of my favourite photographers who inspire me are Steve McCurry
            for his ability to capture human emotion, Henri Cartier-Bresson for
            his decisive moments, and Mark Power for his thought-provoking
            conceptual projects.
          </p>
          <p className={styles.description}>
            If my photos resonate with you, I invite you to get in touch!
            Let&rsquo;s have a conversation about the images and perspectives
            that move you. I&rsquo;m always looking to collaborate with new
            clients and continue growing as an artist.
          </p>
        </div>
      </section>
    </main>
  );
}

export default About;
