import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zhiming Lim</title>
        <meta name="description" content="Welcome to my website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Zhiming Lim
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>Software Engineer</code>
        </p>
      </main>
    </div>
  )
}
