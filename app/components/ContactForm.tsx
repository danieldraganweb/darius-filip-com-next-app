"use client";
import React from "react";
import { useState } from "react";
import styles from "../styles/components/ContactForm.module.scss";
import Link from "next/link";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("Submit");

  const handleInputChange = (e: {
    target: { name: string; value: React.SetStateAction<string> };
  }) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "subject") {
      setSubject(e.target.value);
    } else if (e.target.name === "message") {
      setMessage(e.target.value);
    }
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setStatus("Sending...");
  };

  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.textContainer}>
            <h2>Let&apos;s get in touch !</h2>
            <p className={styles.description}>
              Whether you&apos;re interested in booking a photo shoot, have a
              question about my services, or just want to say hello, I&apos;m
              always happy to hear from you. Fill out the contact form or send
              me an WhatsApp message, and I&apos;ll get back to you as soon as
              possible!
            </p>
            <Link
              href="https://api.whatsapp.com/send/?phone=+4560515731&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.buttonWApp}>
                Prefer to chat? @WhatsApp
              </button>
            </Link>
          </div>
          <div className={styles.formContainer}>
            <h2>Drop an email</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name"></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleInputChange}
                  required
                  placeholder="Name"
                />
              </div>
              <div>
                <label htmlFor="email"></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  required
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="Subject"></label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={subject}
                  onChange={handleInputChange}
                  required
                  placeholder="Subject"
                />
              </div>
              <div>
                <label htmlFor="Message"></label>
                <br />
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={handleInputChange}
                  required
                  placeholder="Message"
                />
              </div>
              <div className={styles.buttonContainer}>
                <button type="submit">{status}</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default ContactForm;
