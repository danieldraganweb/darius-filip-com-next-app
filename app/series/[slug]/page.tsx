"use client";
import styles from "../../styles/pages/slug.module.scss";
import { useState, useEffect } from "react";
import Image from "next/image";
import { client } from "../../lib/contentful/client";
import { AllEntries, Item } from "../../types";
// Fetch Galleries

const useEntry = (id: string) => {
  const [loading, setLoading] = useState(false);
  const [entry, setEntry] = useState({} as Item);

  const getSingleEntry = async (id: string) => {
    setLoading(true);
    const response = (await client.getEntry(id)) as unknown as Item;
    setEntry(response);
    setLoading(false);
  };

  useEffect(() => {
    getSingleEntry(id);
  }, []);

  return { entry, setEntry, title: entry.fields?.title, loading };
};

const GalleryPage = (props: any) => {
  const { title, loading, entry } = useEntry(props.params.slug);

  return (
    <div>
      <p>Gallery Page - {title}</p>
      <p>{loading ? "Loading..." : null}</p>

      {entry.fields?.images.length > 0
        ? entry.fields?.images?.map((item: any, i: number) => {
            console.log("xsds", item);
            return (
              <div key={i}>
                <Image
                  src={"https:" + item.fields.file.url}
                  alt={`Image ${i}`}
                  width={500}
                  height={500}
                />
              </div>
            );
          })
        : null}
    </div>
  );
};

export default GalleryPage;
