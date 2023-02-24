import Image from "next/image";
import Link from "next/link";
import styles from "styles/utils.module.css";

const soloAlbumPage = ({ album }) => {
  return (
    <section className={styles.album}>
      <h1>Album name: {album.name}</h1>
      <Image
        src={album.imageURL}
        width={500}
        height={500}
        alt={`Album art of ${album.name}`}
      ></Image>
      <p>Release date: {album.releaseYear}</p>
      <h3>Tracklist:</h3>
      <ul>
        {album.tracks.map((track) => (
          <li key={track}>{track}</li>
        ))}
      </ul>
      <Link href={`/discography/solo`}>Back to Previous Page</Link>
    </section>
  );
};

export default soloAlbumPage;

export async function getStaticPaths() {
  const { soloAlbums } = await import("data/soloAlbums.json");

  const paths = soloAlbums.map((album) => {
    return {
      params: {
        soloAlbum: album.albumID,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.soloAlbum;
  const { soloAlbums } = await import("data/soloAlbums.json");
  const albumData = soloAlbums.filter((album) => album.albumID === id)[0];

  return {
    props: { album: albumData },
  };
}
