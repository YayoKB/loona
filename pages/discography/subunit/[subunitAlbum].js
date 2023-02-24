import Image from "next/image";
import Link from "next/link";
import styles from "styles/utils.module.css";

const subunitAlbum = ({ album }) => {
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
      <Link href={`/discography/subunit`}>Back to Previous Page</Link>
    </section>
  );
};

export default subunitAlbum;

export async function getStaticPaths() {
  const { subunitAlbums } = await import("data/subunitAlbums.json");

  const paths = subunitAlbums.map((album) => {
    return {
      params: {
        subunitAlbum: album.albumID,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.subunitAlbum;
  const { subunitAlbums } = await import("data/subunitAlbums.json");
  const albumData = subunitAlbums.filter((album) => album.albumID === id)[0];

  return {
    props: { album: albumData },
  };
}
