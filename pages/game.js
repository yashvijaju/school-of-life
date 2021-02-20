import React from 'react'
import Link from 'next/link'
import { Typography, Grid, makeStyles } from '@material-ui/core'

// components
import Card, { CardOnBoard, CardInHand } from '../components/card'

const red = '#EE3A20';
const black = '#000000';

const useStyles = makeStyles({
    container_outer: {
        margin: '7.5vh 5vw 0',
    },
    quit_icon: {
        position: 'absolute',
        top: '2vh',
        height: '2.5vh',
        width: 'auto',
        cursor: 'pointer'
    },
    layer: {
        position: 'absolute',
        top: '0',
        left: '0',
        height: '100vh',
        width: '100vw',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    playerTurn: {
        position: 'absolute',
        top: 'calc((100vh - 400px)/2)',
        left: 'calc((100vw - 500px)/2)',
    },
    activePlayerTurn: {
        backgroundColor: '#32B1CC',
    }
});

export default function Sequence() {
    const styles = useStyles();
    const iconA = '/assets/friends.svg';
    const iconB = '/assets/cupid.svg';
    const iconC = '/assets/family.svg';
    const iconD = '/assets/18.svg';

    const primaryColor="##32B1CC";
    const secondaryColor="##EAEE20";

    const [board, setBoard] = React.useState([
        [{number: '1', icon: iconA},{number: '12', icon: iconB},{number: '14', icon: iconC},{number: '10', icon: iconB},{number: '9', icon: iconC},{number: '12', icon: iconD},{number: '13', icon: iconB},{number: '15', icon: iconA},{number: '11', icon: iconA},{number: '9', icon: iconB},],
        [{number: '3', icon: iconC},{number: '10', icon: iconA},{number: '4', icon: iconB},{number: '9', icon: iconD},{number: '6', icon: iconC},{number: '13', icon: iconA},{number: '1', icon: iconD},{number: '8', icon: iconC},{number: '8', icon: iconB},{number: '7', icon: iconC},],
        [{number: '5', icon: iconB},{number: '11', icon: iconD},{number: '1', icon: iconC},{number: '9', icon: iconA},{number: '3', icon: iconB},{number: '2', icon: iconD},{number: '13', icon: iconC},{number: '14', icon: iconB},{number: '10', icon: iconC},{number: '8', icon: iconD},],
        [{number: '3', icon: iconD},{number: '2', icon: iconA},{number: '13', icon: iconD},{number: '15', icon: iconC},{number: '5', icon: iconD},{number: '3', icon: iconA},{number: '11', icon: iconB},{number: '8', icon: iconA},{number: '15', icon: iconD},{number: '4', icon: iconA},],
        [{number: '4', icon: iconC},{number: '4', icon: iconD},{number: '1', icon: iconB},{number: '7', icon: iconA},{number: '12', icon: iconC},{number: '6', icon: iconB},{number: '2', icon: iconC},{number: '10', icon: iconD},{number: '12', icon: iconA},{number: '15', icon: iconB},],
        [{number: '6', icon: iconD},{number: '5', icon: iconA},{number: '6', icon: iconA},{number: '2', icon: iconB},{number: '5', icon: iconC},{number: '7', icon: iconD},{number: '14', icon: iconA},{number: '7', icon: iconB},{number: '11', icon: iconC},{number: '14', icon: iconD},],
    ]);
    const [playerCards, setPlayerCards] = React.useState(
        [{number: '3', icon: iconA, question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?"},{number: '3', icon: iconB, question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor??"},{number: '3', icon: iconC, question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor??"},{number: '3', icon: iconB, question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?"},{number: '3', icon: iconA, question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?"}])
    
    
    const [activePlayer, setActivePlayer] = React.useState("kavya")

    return(
        <div className={styles.container_outer}>
            <Link href="/">
                <img className={styles.quit_icon} src="/assets/quit.svg"/>
            </Link>
            <Grid container direction="row">
                <Grid container direction="column" item xs={11}>
                    {board.map((array, index) => 
                        <Grid container direction="row" key={index}>
                            {array.map((obj, index_) => 
                                <Grid item key={index_}>
                                    <CardOnBoard number={obj.number} icon={obj.icon} primaryColor={primaryColor} secondaryColor={secondaryColor}/>
                                </Grid>
                            )}
                        </Grid>
                    )}
                </Grid>
                <Grid container direction="column" item xs={1}>
                    <Grid item style={{height: 'calc(85vh / 6)'}}>
                        <Typography variant="h6">
                            my cards
                        </Typography>
                        <Typography variant="caption">
                            ( hover over any card to see the question )
                        </Typography>
                    </Grid>
                        {playerCards.map((obj, index) => 
                            <Grid item key={index}>
                                <CardInHand number={obj.number} icon={obj.icon} question={obj.question} primaryColor={primaryColor} secondaryColor={secondaryColor}/>
                            </Grid>
                        )}
                </Grid>
            </Grid>

            <Grid className={styles.layer}>
                <Grid className={styles.playerTurn}>
                    <Grid className={styles.activePlayerTurn}>
                        <Typography variant="h3">
                            {activePlayer} picked
                        </Typography>
                    </Grid>
                    <Card primaryColor="#32B1CC" secondaryColor="#EAEE20" number="3" icon="/assets/friends.svg" question="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?"/>
                </Grid>
            </Grid>
            
        </div>
    )
}