import styles from "styles/utils.module.css";
import Image from "next/image";
import Link from "next/link";

const MembersOverviewPage = ({ members }) => {
  return (
    <>
      <div className={styles.soloAlbumGrid}>
        {members.map((member) => (
          <Link key={member.memberID} href={`/members/${member.memberID}`}>
            <Image src={member.imageURL} width={400} height={400} alt="" />
            <h1>{member.stageName}</h1>
          </Link>
        ))}
      </div>
    </>
  );
};

export default MembersOverviewPage;

export async function getStaticProps() {
  const { membersList } = await import("/data/membersList.json");

  return {
    props: { members: membersList },
  };
}
