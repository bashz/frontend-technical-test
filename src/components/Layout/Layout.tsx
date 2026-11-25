import type { ReactElement } from "react";
import Image from "next/image";
import Logo from "@/assets/lbc-logo.webp";
import Head from "next/head";
import styles from "./layout.module.css";

export default function Layout({ children }: { children: ReactElement }): ReactElement {
  const year = new Date().getFullYear();

  return (
    <div className={styles.layout}>
      <Head>
        <title>Frontend Technical test - Leboncoin</title>
        <meta
          name="description"
          content="Frontend exercise for developpers who want to join us on leboncoin.fr"
        />
      </Head>

      <header className={styles.header}>
        <Image src={Logo} alt="Leboncoin Frontend Team" width={80} height={25} priority />
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>&copy; leboncoin - {year}</footer>
    </div>
  );
}
