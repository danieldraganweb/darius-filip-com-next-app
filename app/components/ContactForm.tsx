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
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2>Let&apos;s get in touch !</h2>
          <p className={styles.description}>
            Whether you&apos;re interested in booking a photo shoot, have a
            question about my services, or just want to say hello, I&apos;m
            always happy to hear from you. Fill out the contact form or send me
            a WhatsApp message, and I&apos;ll get back to you as soon as
            possible!
          </p>
          <h3>Prefer to chat?</h3>
          <Link
            href="https://wa.me/+4560515731"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={styles.buttonWApp}>@WhatsApp</button>
          </Link>
        </div>

        <div className={styles.formContainer}>
          <h1>Send me a message</h1>
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
              <button
                type="submit"
                disabled={!name || !email || !subject || !message}
              >
                {status}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
