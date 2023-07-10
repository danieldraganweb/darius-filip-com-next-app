// lib/datocms.js
export const performRequest = async ({
  query,
  variables = {},
  includeDrafts = false,
}) => {
  const response = await fetch("https://graphql.datocms.com/", {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_DATO_API_TOKEN}`,
      ...(includeDrafts ? { "X-Include-Drafts": "true" } : {}),
    },
    method: "POST",
    body: JSON.stringify({ query, variables }),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(
      `${response.status} ${response.statusText}: ${JSON.stringify(
        responseBody
      )}`
    );
  }

  return responseBody;
};

// Path: app\lib\datocms.js
//FIRST VERSION
// lib/datocms.js
// export const performRequest = async ({
//   query,
//   variables = {},
//   includeDrafts = false,
// }) => {
//   const response = await fetch("https://graphql.datocms.com/", {
//     headers: {
//       Authorization: `Bearer ${process.env.NEXT_7a49fff4ba569edd8a8045dea4ea5d}`,
//       ...(includeDrafts ? { "X-Include-Drafts": "true" } : {}),
//     },
//     method: "POST",
//     body: JSON.stringify({ query, variables }),
//   });

//   const responseBody = await response.json();

//   if (!response.ok) {
//     throw new Error(
//       `${response.status} ${response.statusText}: ${JSON.stringify(
//         responseBody
//       )}`
//     );
//   }

//   return responseBody;
// };
