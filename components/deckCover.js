import { Grid, Typography, makeStyles } from '@material-ui/core'
import React from 'react'

const red = '#EE3A20';
const black = '#000000';

const useStyles = makeStyles({
    container: {
      borderRadius: '30px',
      padding: '2vh 0vw',
      backgroundColor: props => props.primary_color,
      color: props => props.secondary_color,
      position: 'relative',
      cursor: 'pointer',
      transition: '0.25s',
      outline: props => (props.selected === props.title) ? '2px solid black' : '0px solid black',
      outlineOffset: '10px',
      height: '250px',
    },
    image: {
      width: '50%',
      height: 'auto',
      margin: '1vh 0 0 0',
    },
    title: {
      margin: '2.5vh 0 7.5vh 0',
      fontWeight: 'bold',
    },
    playNow: {
      position: 'absolute',
      bottom: '0',
      width: '100%',
      height: '5vh',
      borderRadius: '0 0 30px 30px',
      backgroundColor: props => props.secondary_color,
      color: props => props.primary_color,
    },
    container_hover: {
      borderRadius: '30px',
      padding: '2vh 1vw',
      backgroundColor: props => props.primary_color,
      color: props => props.secondary_color,
      position: 'relative',
      cursor: 'pointer',
      transition: '0.25s',
      outline: props => (props.selected === props.title) ? '2px solid black' : '0px solid black',
      outlineOffset: '10px',
      height: '250px',
      '&:hover': {
        transform: 'scale(2)',
        zIndex: 2,
      }
    },
    image_hover: {
      width: '20%',
      height: 'auto',
    },
    title_hover: {
      margin: '0vh 0 1vh 0',
      fontWeight: 'bold',
    },
    description_hover: {
      fontSize: '0.5rem',
      textAlign: 'center',
    },
    subcategory_hover: {
      fontSize: '0.3rem',
      margin: '2vh 0 0',
      fontWeight: 'bold',
    },
    subcategory_icon_hover: {
      width: '100%',
      height: 'auto',
      margin: '2vh 0 0',
    },
    subcategory_desc_hover: {
      fontSize: '0.3rem',
      lineHeight: '0.5rem',
      margin: '1vh 0 0',
    },
    description_instruction: {
      position: 'absolute',
      bottom: '1vh',
      width: '100%',
      borderRadius: '0 0 30px 30px',
      color: props => props.secondary_color,
    }
});
  

export function SubCategory(props) {
  const styles = useStyles(props);

  return (
    // <Grid container justify="space-between">
    //   <Grid item xs={1}>
    //     <img className={styles.subcategory_icon_hover} src={props.subcategory_icon}/>
    //   </Grid>
    //   <Grid item xs={10}>
    //     <p className={styles.subcategory_desc_hover}>
    //       {props.subcategory_title}
    //       <br/>
    //       sample question : {props.subcategory_sample}
    //       </p>
    //   </Grid>
    // </Grid>
    <Grid container justify="space-between">
      <Grid item xs={12}>
        <p className={styles.subcategory_desc_hover}>
          sample question : {props.subcategory_sample}
          </p>
      </Grid>
    </Grid>
  )
}

export default function DeckCover(props) {
  const styles = useStyles(props);
  const [hover, changeHover] = React.useState(false)

  return (
    <div>
      {!hover ?
        <Grid className={styles.container} container direction="column" alignItems="center" onClick={()=>props.chooseDeck(props.title)} onMouseOver={()=>changeHover(true)}>
          <img className={styles.image} src={props.icon}/>
          <Typography className={styles.title} variant="h6">{props.title}</Typography>
          <Grid className={styles.playNow} container justify="center" alignItems="center">
            <Typography variant="body2">play now!</Typography>
          </Grid>
        </Grid>
        :
        <Grid className={styles.container_hover} container direction="column" alignItems="center" onClick={()=>props.chooseDeck(props.title)} onMouseLeave={()=>changeHover(false)}>
          <img className={styles.image_hover} src={props.icon}/>
          <Typography className={styles.title_hover} variant="caption">{props.title}</Typography>
          <Typography className={styles.description_hover} variant="caption">{props.description}</Typography>
          <Typography className={styles.subcategory_hover} variant="caption">sample questions : </Typography>
          <SubCategory subcategory_icon={props.subcategory1_icon} subcategory_title={props.subcategory1_title} subcategory_sample={props.subcategory1_sample}/>
          <SubCategory subcategory_icon={props.subcategory2_icon} subcategory_title={props.subcategory2_title} subcategory_sample={props.subcategory2_sample}/>
          <SubCategory subcategory_icon={props.subcategory3_icon} subcategory_title={props.subcategory3_title} subcategory_sample={props.subcategory3_sample}/>
          <SubCategory subcategory_icon={props.subcategory4_icon} subcategory_title={props.subcategory4_title} subcategory_sample={props.subcategory4_sample}/>
        </Grid>
      }
    </div>
  )
}

export function DeckInstruction(props) {
  const styles = useStyles(props);

  return (
    <div>
      <Grid className={styles.container} style={{cursor: 'not-allowed'}} container direction="column" alignItems="center">
        <img className={styles.image} src={props.icon}/>
        <Typography className={styles.title} variant="h6">{props.title}</Typography>
        <Grid className={styles.description_instruction} container justify="center" alignItems="center">
            <Typography variant="body2" style={{width: '75%', fontSize: '0.75rem', textAlign: 'center'}}>{props.description}</Typography>
          </Grid>
      </Grid>
    </div>
  )
}