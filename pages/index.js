import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { connectToDatabase } from "../util/mongodb";
import Link from 'next/link'
import NavBar from '../components/navbar'
import { Grid, Typography, AppBar, Toolbar, Button, makeStyles } from '@material-ui/core'

export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const movies = await db
    .collection("Recess_Questions")
    .find({})
    .toArray();

  return {
    props: {
      movies: JSON.parse(JSON.stringify(movies)),
    },
  };
}

const red = '#EE3A20';
const black = '#000000';

const useStyles = makeStyles({
  container_: {
    marginTop: '10vh',
    padding: '0 5vw',
  },  
  
  title: {
        color: black,
        fontWeight: 'bold',
    }
});

export default function Home(props) {
  const styles = useStyles();
  console.log(props)
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <NavBar/>
      <Grid className={styles.container_} container direction="row" alignItems='center'>
          <Grid item xs={6}>
            <Typography className={styles.title} variant="h1"><span style={{color: red}}>play</span> simple, <br/>talk <span style={{color: red}}>deep.</span></Typography>
          </Grid>
          <Grid item xs={6}>
            <img className={styles.image} src="/assets/landingfriendhuddle.svg" style={{width:"100%"}}/>
          </Grid>
        </Grid>
    </div>
  )
}