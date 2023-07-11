import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import styles from "./page.module.scss";
import { Suspense } from "react";
import Loading from "./loading";
const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <div className={styles.container}>
        <body className={inter.className}>
          <Navbar />
          {/* <Suspense fallback={<Loading />}>{children}</Suspense> */}
          {children}
          <Footer />
        </body>
      </div>
    </html>
  );
}
