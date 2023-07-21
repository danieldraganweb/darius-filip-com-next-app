"use client";
import styles from "../styles/pages/series.module.scss";
import { useState, useEffect } from "react";
import Link from "next/link";
import { client } from "../lib/contentful/client";
import { AllEntries, Item } from "../types";

function Series() {
  const [loading, setLoading] = useState(false);
  const [allEntries, setAllEntrie] = useState([] as Item[]);

  const getDataAndUpdateState = async () => {
    setLoading(true);
    const allEntries = (await client.getEntries()) as unknown as AllEntries;

    const titlesToExclude = [
      "Recent",
      "Shop",
      "Mobile-Banner",
      "Desktop-Tablet-Banner",
    ];

    const listOfEntriesWithEcxludedTitles = allEntries.items.filter(
      (entry: Item) => !titlesToExclude.includes(entry.fields.title)
    );

    if (!allEntries) return;
    setAllEntrie(listOfEntriesWithEcxludedTitles);

    setLoading(false);
  };

  useEffect(() => {
    getDataAndUpdateState();
  }, []);

  // console.log(seriesTitle);

  if (!allEntries) return null;
  console.log(allEntries);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Series</h1>
        </div>
        {allEntries.map((entry, i) => (
          <div key={i} className={styles.seriesTitleContainer}>
            <ul>
              <li>
                <Link href={`/series/${entry.sys.id}`} passHref key={i}>
                  <h1>{entry.fields.title}</h1>
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
