import Image from "next/image";
import Link from "next/link";
import styles from "styles/utils.module.scss";

const GroupDiscogPage = ({ albums }) => {
  return (
    <>
      <div className={styles.grid}>
        {albums.map((album) => (
          <div key={album.id} className={styles.card}>
            <Link href={`/discography/group/${album.id}`}>
              <Image src={album.imageURL} width={200} height={200} alt="" />
              <h1>{album.name}</h1>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const { groupAlbums } = await import("/data/groupAlbums.json");

  return {
    props: { albums: groupAlbums },
  };
}

export default GroupDiscogPage;
