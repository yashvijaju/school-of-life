import { Grid, Typography, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    container: {
        width: '500px',
        height: '400px',
        padding: '2vh 2vw',
        backgroundColor: props => props.primaryColor,
        color: props => props.secondaryColor,
        borderRadius: '20px',
        border: '5px solid black',
        borderColor: props => props.secondaryColor,
    },
    number: {
        color: props => props.secondaryColor,
        padding: '0 1vw', 
        fontWeight: 'bold',
    },
    icon: {
    },
    question: {
        textAlign: 'center',
    },
    container_cardonboard: {
        width: 'calc(80vw / 10)',
        height: 'calc(85vh / 6)',
        border: '2px solid black',
        borderColor: props => props.primaryColor,
        backgroundColor: props => props.secondaryColor,
        color: props => props.primaryColor,
        position: 'relative',
    },
    number_cardonboard: {
        color: props => props.primaryColor,
        fontWeight: 'bold',
        position: 'absolute',
        top: '1vh',
        left: '1vw'
    },
    icon_cardonboard: {
        width: '50%',
        height: 'auto',
        position: 'absolute',
        bottom: '1vh',
        right: '1vw'
    },
    container_cardinhand: {
        width: 'calc(80vw / 10)',
        height: 'calc(85vh / 6)',
        border: '2px solid black',
        borderColor: props => props.secondaryColor,
        backgroundColor: props => props.primaryColor,
        color: props => props.secondaryColor,
        position: 'relative',
    },
    number_cardinhand: {
        color: props => props.secondaryColor,
        fontWeight: 'bold',
        position: 'absolute',
        top: '1vh',
        left: '1vw'
    },
    icon_cardinhand: {
        width: '50%',
        height: 'auto',
        position: 'absolute',
        bottom: '1vh',
        right: '1vw'
    },
    container_cardinhand_hover: {
        width: 'calc(80vw / 10)',
        height: 'calc(85vh / 6)',
        border: '2px solid black',
        borderColor: props => props.secondaryColor,
        backgroundColor: props => props.primaryColor,
        color: props => props.secondaryColor,
        position: 'relative',
        transition: '0.25s',
        transform: 'scale(2)',
        zIndex: 2,
    },
    question_cardinhand: {
        padding: '0.5vh 0.5vw',
        fontSize: '0.4rem',
    }
});

export default function Card(props) {
  const styles = useStyles(props);

  return (
    <Grid className={styles.container} container direction="column" justify="space-between">
        <Grid container direction="row" item justify="flex-end" alignItems="center">
            <Typography className={styles.number} variant="h2">{props.number}</Typography>
            <img className={styles.icon} src={props.icon}/>
        </Grid>
        <Grid container direction="row" item justify="center">
            <Typography className={styles.question} variant="h6">{props.question}</Typography>
        </Grid>
        <Grid container direction="row" item justify="flex-start" alignItems="center">
            <img className={styles.icon} src={props.icon}/>
            <Typography className={styles.number} variant="h2">{props.number}</Typography>
        </Grid>
    </Grid>
  )
}

export function CardOnBoard(props) {
    const styles = useStyles(props);
    return (
        <Grid className={styles.container_cardonboard} container direction="row" alignContent="space-between">
            <Grid item xs={12} container justify="flex-start">
                <Typography className={styles.number_cardonboard} variant="h3">{props.number}</Typography>
            </Grid>
            <Grid item xs={12} container justify="flex-end">
                <img className={styles.icon_cardonboard} src={props.icon}/>
            </Grid>
        </Grid>
    )
}

export function CardInHand(props) {
    const styles = useStyles(props);
    const [hover, changeHover] = React.useState(false)

    return (
        <div>
            {!hover ?
                <Grid className={styles.container_cardinhand} container direction="row" alignContent="space-between"  onMouseEnter={()=>changeHover(true)}>
                    <Grid item xs={12} container justify="flex-start">
                        <Typography className={styles.number_cardinhand} variant="h3">{props.number}</Typography>
                    </Grid>
                    <Grid item xs={12} container justify="flex-end">
                        <img className={styles.icon_cardinhand} src={props.icon}/>
                    </Grid>
                </Grid>
                :
                <Grid className={styles.container_cardinhand_hover} container direction="column" alignItems="center" justify="center" onMouseLeave={()=>changeHover(false)}>
                <p className={styles.question_cardinhand}>{props.question}</p>
                </Grid>
            }
        </div>
        
    )
}
  