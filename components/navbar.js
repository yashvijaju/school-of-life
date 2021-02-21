import { Grid, Typography, AppBar, Toolbar, Button, makeStyles } from '@material-ui/core'
import React from 'react'

const red = '#EE3A20';
const black = '#000000';

const useStyles = makeStyles({
    container: {
        padding: '3vh 5vw',
    },
    title: {
        color: black,
        fontWeight: 'normal',
    }
});
  


export default function NavBar(props) {
  const styles = useStyles(props);

  return (
    <div>
        <AppBar position="fixed" style={{backgroundColor: "white"}} elevation={0}>
        <Grid className={styles.container} container justify="space-between">
            <Grid container direction="row" item xs={9}>
                <img className={styles.image} src="/assets/chiplogo.svg" style={{marginRight:"1vw"}}/>
                <Typography className={styles.title} variant="h6">Table for Four</Typography>        
            </Grid>
            <Grid container item xs={3} justify="space-between">
                <Typography className={styles.title} variant="h6">games</Typography>
                <Typography className={styles.title} variant="h6">about</Typography>
                <Typography className={styles.title} variant="h6">faq</Typography>
            </Grid>
        </Grid>
      </AppBar>
    </div>
  )
}

