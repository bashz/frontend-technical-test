import type { ReactElement } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/assets/lbc-logo.webp'
import Head from 'next/head'
import styles from './layout.module.css'

export default function Layout({children}: {children: ReactElement}): ReactElement {
  const year = new Date().getFullYear()

  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend Technical test - Leboncoin</title>
        <meta name="description" content="Frontend exercise for developpers who want to join us on leboncoin.fr" />
      </Head>

      <main className={styles.main}>
        <Image src={Logo} alt="Leboncoin Frontend Team" width={80} height={25} priority />
        
        {children}
      </main>

      <footer className={styles.footer}>
        &copy; leboncoin - {year}
      </footer>
    </div>
  );
}