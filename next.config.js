/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    env: {
      CONTENTFUL_SPACE_ID: "zh7t5pom8ccw",
      CONTENTFUL_ACCESS_TOKEN: "HBkgA0h_Q4IS0DoD436LAfMpvdsO4-SM98E6Sz3hEEM",
    },
  },
};

const nextConfig = {
  images: {
    domains: ["images.ctfassets.net"],
  },
};

module.exports = nextConfig;
