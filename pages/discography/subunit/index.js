import Link from "next/link";
import Image from "next/image";
import styles from "styles/utils.module.css";

const SubunitDiscogPage = ({ albums }) => {
  return (
    <>
      <div className={styles.grid}>
        {albums.map((album) => (
          <Link
            key={album.albumID}
            href={`/discography/subunit/${album.albumID}`}
          >
            <Image src={album.imageURL} width={200} height={200} alt="" />
            <h1>{album.name}</h1>
          </Link>
        ))}
      </div>
    </>
  );
};

export default SubunitDiscogPage;

export async function getStaticProps() {
  const { subunitAlbums } = await import("/data/subunitAlbums.json");

  return {
    props: { albums: subunitAlbums },
  };
}
