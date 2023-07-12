import React, { useState, useEffect } from "react";
import { createClient } from "contentful";

// const IMAGES_QUERY = `
//   query {
//     allAssets {
//       url
//       responsiveImage {
//         srcSet
//         webpSrcSet
//         sizes
//         src
//       }
//     }
//   }`;

// type Image = {
//   url: string;
//   responsiveImage: {
//     srcSet: string;
//     webpSrcSet: string;
//     sizes: string;
//     src: string;
//   };
// };

const Gallery = () => {
  // const [images, setImages] = useState<Image[]>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await performRequest({ query: IMAGES_QUERY });
  //     console.log(result); // Add this line to log the result
  //     setImages(result.data.allAssets);
  //   };

  //   fetchData();
  // }, []);
  // console.log(images); // Add this line to log the images

  return (
    <div>
      <h1>Gallery</h1>
    </div>
  );
};
export default Gallery;
