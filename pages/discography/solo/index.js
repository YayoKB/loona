import Image from "next/image";
import Link from "next/link";
import styles from "styles/utils.module.css";
import soloIndexStyles from "styles/soloIndex.module.css";

const SoloDiscogPage = ({ albums }) => {
  return (
    <>
      <div className={styles.soloAlbumGrid}>
        {albums.map((album) => (
          <Link
            key={album.albumID}
            href={`/discography/solo/${album.albumID}`}
            className={soloIndexStyles.albumItem}
          >
            <Image src={album.imageURL} width={400} height={400} alt="" />
            <h1>{album.name}</h1>
          </Link>
        ))}
      </div>
    </>
  );
};

export default SoloDiscogPage;

export async function getStaticProps() {
  const { soloAlbums } = await import("/data/soloAlbums.json");

  return {
    props: { albums: soloAlbums },
  };
}
