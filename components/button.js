import { Grid, Typography, makeStyles } from '@material-ui/core'
import React from 'react'

const red = '#EE3A20';
const black = '#000000';

const useStyles = makeStyles({
    primary_container: {
        width: '100%',
        backgroundColor: red,
        color: 'white',
        border: '5px solid black',
        borderColor: red,
        padding: '2vh 2vw',
        borderRadius: '10px',
        cursor: 'pointer',
    },
    secondary_container: {
        backgroundColor: 'white',
        color: red,
        border: '5px solid black',
        borderColor: red,
        padding: '2vh 2vw',
        borderRadius: '10px',
        cursor: 'pointer',
    }
});

export default function PrimaryButton(props) {
  const styles = useStyles(props);

  return (
    <Grid container className={styles.primary_container} justify="center" alignItems="center" onClick={()=>{props.handleClick(props.button_text)}} style={props.style_overwriter}>
        <Typography variant="body1">
            {props.text}
        </Typography>
    </Grid>
  )
}

export function SecondaryButton(props) {
  const styles = useStyles(props);

  return (
    <Grid container className={styles.secondary_container} justify="center" alignItems="center" onClick={()=>{props.handleClick(props.button_text)}}>
        <Typography variant="body1">
            {props.text}
        </Typography>
    </Grid>
  )
}