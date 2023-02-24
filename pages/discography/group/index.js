import Image from "next/image";
import Link from "next/link";
import styles from "styles/utils.module.css";

const GroupDiscogPage = ({ albums }) => {
  return (
    <>
      <div className={styles.grid}>
        {albums.map((album) => (
          <Link key={album.id} href={`/discography/group/${album.id}`}>
            <Image src={album.imageURL} width={200} height={200} alt="" />
            <h1>{album.name}</h1>
          </Link>
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
