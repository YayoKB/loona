import Link from "next/link";

import styles from "./Navbar.module.css";
import Head from "next/head";

export default function Navbar() {
  return (
    <>
      <Head>
        <title>This is LOONA!</title>
        <meta name="description" content="Info about LOONA!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.navbar}>
        <h1 className={styles.title}>LOONA</h1>
        <ul className={styles.links}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/discography">Discography</Link>
          </li>
          <li>
            <Link href="/members">Members</Link>
          </li>
          <li>
            <Link href="/subunits">Subunits</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
