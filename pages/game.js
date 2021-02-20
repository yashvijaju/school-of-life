import React from 'react'
import Link from 'next/link'
import { Typography, Grid, makeStyles } from '@material-ui/core'

// components
import Card, { CardOnBoard } from '../components/card'

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
    }
});

export default function Sequence() {
    const styles = useStyles();
    const iconA = '/assets/friends.svg';
    const iconB = '/assets/cupid.svg';
    const iconC = '/assets/family.svg';
    const iconD = '/assets/18.svg';
    const [board, setBoard] = React.useState([
        [{number: '3', icon: iconA},{number: '3', icon: iconB},{number: '3', icon: iconC},{number: '3', icon: iconB},{number: '3', icon: iconA},{number: '3', icon: iconD},{number: '3', icon: iconB},{number: '3', icon: iconA}],
        [{number: '3', icon: iconC},{number: '3', icon: iconA},{number: '3', icon: iconB},{number: '3', icon: iconD},{number: '3', icon: iconC},{number: '3', icon: iconA},{number: '3', icon: iconD},{number: '3', icon: iconC}],
        [{number: '3', icon: iconB},{number: '3', icon: iconD},{number: '3', icon: iconC},{number: '3', icon: iconA},{number: '3', icon: iconB},{number: '3', icon: iconD},{number: '3', icon: iconC},{number: '3', icon: iconB}],
        [{number: '3', icon: iconD},{number: '3', icon: iconA},{number: '3', icon: iconD},{number: '3', icon: iconC},{number: '3', icon: iconD},{number: '3', icon: iconA},{number: '3', icon: iconB},{number: '3', icon: iconA}],
        [{number: '3', icon: iconC},{number: '3', icon: iconD},{number: '3', icon: iconB},{number: '3', icon: iconA},{number: '3', icon: iconC},{number: '3', icon: iconB},{number: '3', icon: iconC},{number: '3', icon: iconD}],
    ]);

    return(
        <div className={styles.container_outer}>
            <Link href="/">
                <img className={styles.quit_icon} src="/assets/quit.svg"/>
            </Link>
            <Grid container direction="column">
                {board.map((array, index) => 
                    <Grid container direction="row" key={index}>
                        {array.map((obj, index_) => 
                            <Grid item key={index_}>
                                <CardOnBoard number={obj.number} icon={obj.icon} primaryColor="#32B1CC" secondaryColor="#EAEE20"/>
                            </Grid>
                        )}
                    </Grid>
                )}

            </Grid>
            {/* <Grid className={styles.playerTurn}>
                <Card primaryColor="#32B1CC" secondaryColor="#EAEE20" number="3" icon="/assets/friends.svg" question="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?"/>
            </Grid> */}
        </div>
    )
}