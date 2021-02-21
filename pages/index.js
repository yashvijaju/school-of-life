import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import NavBar from '../components/navbar'
import { Grid, Typography, AppBar, Toolbar, Button, TextField, makeStyles, Card, CardActions, CardContent } from '@material-ui/core'

const red = '#EE3A20';
const black = '#000000';
const white = '#FFFFFF';

const useStyles = makeStyles({
  container_: {
    marginTop: '10vh',
    padding: '0 5vw',
  },  
  
  title: {
        color: black,
        fontWeight: 'bold',
        paddingBottom: 20
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

  cards: {
    borderColor: black,
    borderWidth: 3,
    borderRadius: 16,
    padding: 20, 
  },

  cardContainer: {
    height: 640,
    paddingLeft: 50,
    width: "100%",
    direction:"row",
    justify: "flex-start",
  alignItems: "center",
  },

  button: {
    width: "100%",
    backgroundColor: red,
    color: white,
    borderRadius: 12,
    textTransform: "lowercase",  
  }
 });

export default function Home(props) {
  const styles = useStyles();
  console.log(props)
  return (
    <div>
    <div className={styles.divClass} >
      <Head>
        <title>Table for Four</title>
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
    <div className={styles.cardContainer}>
      <Grid className={styles.cardContainer} container direction="row"> 
    <Grid item xs={9}>
      <Grid item xs={6}>
      <Typography className={styles.title} variant="h3"><span style={{color: red}}>Sequence</span></Typography>
      </Grid>
      <Card className={styles.cards} variant="outlined">
        <CardContent>
          <Typography variant="body2" component="p">
          Drawing inspiration from the New York Time’s article on the “36 Questions to Fall in Love” and the classic board-game Sequence, this digital board game – Table for Four – is built for sparking deeper conversations and creating meaningful connections. Similar to Sequence, the motive of the game is to create 4-token sequences across the board with your assigned team-member. The catch: we’ve replaced the deck of cards with a deck of meaningful questions that you have to answer in order to proceed! From college friends to family members, we’ve got a version for all types of company you might keep. While the end-goal may be competitive, the beauty in this game is the journey to get there – The more detailed your answer, the more the more follow-ups; the more follow-ups, the more chances for other players to share their answers too; and the more sharing, the greater the conversation.
          </Typography>
        </CardContent>
      </Card> <p></p>
      <Link href="/sequence">
        <Button className={styles.button} variant="contained">
          play game
        </Button>
      </Link>
    </Grid>
  </Grid>
  </div>
  </div>
  )
}