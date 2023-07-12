import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import styles from "./styles/pages/page.module.scss";
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
    <html lang="en">
      <body>
        <div className={styles.container}>
          <Navbar />
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <Footer />
        </div>
      </body>
    </html>
  );
}
