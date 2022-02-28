import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Bienvenida: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Restaurante Pixel</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello <a href="https://nextjs.org">World!</a>
        </h1>
      </main>

      <footer className={styles.footer}>
        
          Powered by Nicolás Rincón Mújica
          {/* {' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}
        
      </footer>
    </div>
  )
}

export default Bienvenida