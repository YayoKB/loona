import Link from "next/link";

const DiscogPage = () => {
  return (
    <>
      <h1>Discography</h1>
      <div>
        View LOONA&apos;s:
        <ul>
          <li>
            <Link href="/discography/group">Group Discography</Link>
          </li>
          <li>
            <Link href="/discography/solo">Solo Discography</Link>
          </li>
          <li>
            <Link href="/discography/subunit">Subunit Discography</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DiscogPage;
