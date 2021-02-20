import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { connectToDatabase } from "../util/mongodb";
import Link from 'next/link'


export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const movies = await db
    .collection("Questions")
    .find({})
    .toArray();

  return {
    props: {
      movies: JSON.parse(JSON.stringify(movies)),
    },
  };
}

export default function Home(props) {
  console.log(props)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="/sequence">Sequence</Link>
    </div>
  )
}
