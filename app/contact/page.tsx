"use client";
// import styles from "../styles/pages/contact.module.scss";

import React from "react";
import ContactForm from "../components/ContactForm";
import styles from "../styles/pages/contact.module.scss";

export default function Contact() {
  return (
    <main>
      <div className={styles.container}>
        <h1></h1>
        <ContactForm />
      </div>
    </main>
  );
}
