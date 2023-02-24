import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <Link href="https://www.github.com/yayokb">Made by YayoKB</Link>
        <p>Copyright belongs to their respectful owners.</p>
      </footer>
    </>
  );
}
