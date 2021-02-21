import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import { connectToDatabase } from "../util/mongodb";
import Link from 'next/link'
import NavBar from '../components/navbar'
import { Grid, Typography, AppBar, Toolbar, Button, TextField, makeStyles, Card, CardActions, CardContent } from '@material-ui/core'

// export async function getServerSideProps() {
//   const { db } = await connectToDatabase();
//   const movies = await db
//     .collection("Recess_Questions")
//     .find({})
//     .toArray();

//   return {
//     props: {
//       movies: JSON.parse(JSON.stringify(movies)),
//     },
//   };
// }

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
    },

  root: {
      minWidth: 275,
    },

  bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    
  pos: {
      marginBottom: 12,
    },

  defaultProps: {
    bgcolor: 'background.paper',
    m: 1,
    style: { width: '5rem', height: '5rem' },
    borderColor: 'text.primary',
  },
 });

export default function Home(props) {
  const styles = useStyles();
  console.log(props)
  return (
    <div className={styles.divClass} >
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
        <Grid className={styles.container_} container direction="row" alignItems='center'> 
          <Grid item xs={9}>
            <Grid item xs={6}>
              <Typography className={styles.title} variant="h3"><span style={{color: red}}>Sequence</span></Typography>
            </Grid>
          <Card className={styles.defaultProps} variant="outlined">
            <CardContent>
              <Typography variant="body2" component="p">
              Inspired by Sequence, this is a digital board game to spark deeper conversations. Though we've replaced the standard deck of cards with a deck of questions of our own, the motive of the game is still to create X-chip sequences across the board with your assigned team-member, before the opposing team can. Each player has to answer the question they want to put a chip on in order to move forward. While the end-goal may be competitive, the beauty in this game is the journey to get there – The more detailed your answer, the more the more follow-ups; the more follow-ups, the more chances for other players to share their answers too; and the more sharing, the greater the conversation. 
              </Typography>
            </CardContent>
          </Card>
          </Grid>
        </Grid>
    </div>
  )
}