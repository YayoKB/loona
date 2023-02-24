import Image from "next/image";
import Link from "next/link";
import styles from "styles/utils.module.css";

const groupAlbumPage = ({ album }) => {
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
      <Link href={`/discography/group`}>Back to Previous Page</Link>
    </section>
  );
};

export default groupAlbumPage;

export async function getStaticPaths() {
  const { groupAlbums } = await import("data/groupAlbums.json");

  const paths = groupAlbums.map((album) => {
    return {
      params: {
        groupAlbum: album.id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.groupAlbum;
  const { groupAlbums } = await import("data/groupAlbums.json");
  const albumData = groupAlbums.filter((album) => album.id === id)[0];

  return {
    props: { album: albumData },
  };
}
