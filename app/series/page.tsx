"use client";
import React from "react";
import styles from "../styles/pages/series.module.scss";
import { createClient } from "contentful";
import { useEffect, useState } from "react";
import Link from "next/link";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
});

function Series() {
  const [loading, setLoading] = useState(true);
  const [seriesTitle, setSeriesTitle] = useState([] as string[]);
  loading;
  const getDataAndUpdateState = async () => {
    const listOfTitlesResp = (await client.getEntries({})) as any;
    console.log(listOfTitlesResp);

    const listOfTitles = listOfTitlesResp.items?.map((title: any) => {
      return title.fields.title;
    });

    console.log(listOfTitles);

    // Keep only the elements 2, 3, 4, 5, 6, and 8 from the array
    const filteredTitles = listOfTitles
      .filter((title: string) => title !== "Recent")
      .filter((title: string) => title !== "Shop")
      .filter((title: string) => title !== "Mobile-Banner")
      .filter((title: string) => title !== "Desktop-Tablet-Banner");

    setSeriesTitle(filteredTitles);

    setLoading(false);
  };

  useEffect(() => {
    getDataAndUpdateState();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Series</h1>
        </div>
        {seriesTitle.map((src: string, i: number) => (
          <div key={i} className={styles.seriesTitleContainer}>
            <ul>
              <li>
                <Link href={`/series/${src}`} passHref key={i}>
                  <h1>{src}</h1>
                </Link>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Series;
