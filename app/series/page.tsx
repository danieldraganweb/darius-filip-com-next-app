"use client";
import styles from "../styles/pages/series.module.scss";
import { useState, useEffect } from "react";
import Link from "next/link";
import { client } from "../lib/contentful/client";
import { Entry } from "../types";

function Series() {
  const [loading, setLoading] = useState(false);
  const [seriesTitle, setSeriesTitle] = useState([] as Entry[]);

  const getDataAndUpdateState = async () => {
    setLoading(true);
    const allEntries = (await client.getEntries({
      content_type: "photoSeriesComponent",
    })) as unknown as Entry[];

    const titlesToExclude = [
      "Recent",
      "Shop",
      "Mobile-Banner",
      "Desktop-Tablet-Banner",
    ];

    const listOfEntriesWithEcxludedTitles = allEntries.filter(
      (entry: Entry) => !titlesToExclude.includes(entry.fields.title)
    );

    setSeriesTitle(listOfEntriesWithEcxludedTitles);

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
        {seriesTitle.map((entry, i) => (
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
