import Link from "next/link";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <section className={styles.home}>
      <h1>This is LOOΠΔ</h1>
      <div>
        <ul>
          <li>
            <Link href="/discography">Discography</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/members">Members</Link>
          </li>
          <li>
            <Link href="/subunits">Subunits</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
