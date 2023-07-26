import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  title: "Darius Filip",
  description: "Daris Filip Photography",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <Navbar />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
