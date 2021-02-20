import React from 'react'
import { Typography, Grid, TextField , makeStyles } from '@material-ui/core'

// components
import Breadcrumbs from '../components/breadcrumbs'
import DeckCover, { DeckInstruction } from '../components/deckCover'
import PrimaryButton, { SecondaryButton } from '../components/button'
const red = '#EE3A20';
const black = '#000000';

const useStyles = makeStyles({
    container_outer: {
        margin: '15vh 5vw',
    },
    container_breadcrumbs: {
        margin: '0 0 5vh',
    },
    container_instructions: {
        borderRadius: '20px',
        border: '5px solid red',
        borderColor: red,
        padding: '1vh 1vw',
    },
    container_actions: {
        margin: '3vh 0 0',
    },
    arrow_icon: {
      width: '23px',
      height: '12px',
      margin: '1vh 0 0 1vw',
      cursor: 'pointer',
    },
    arrow_text: {
        marginLeft: '10px',
        opacity: '0.5', 
        fontWeight: 'bold',
        cursor: 'pointer',
    },
    create_instructions_text: {
        color: red,
    }
});

export default function Sequence() {
    const styles = useStyles();
    const [deck, chooseDeck] = React.useState("");
    const [type, chooseType] = React.useState("undecided");
    const [username, chooseUsername] = React.useState("");

    function changeDeck(newDeck) {
        chooseDeck(newDeck);
    }

    function handleButtonClick(type) {
        chooseType(type)
    }

    function chooseNewUsername(e) {
        chooseUsername(e.target.value)
    }


    return(
        <div className={styles.container_outer}>
            <Grid className={styles.container_breadcrumbs} container direction="row">
                <Breadcrumbs href="/">Home</Breadcrumbs>
                <Typography variant="body2" style={{float: 'left', cursor: 'pointer'}}>Sequence</Typography>
            </Grid>
            <Grid container direction="row" justify="space-between" spacing={3}>
                <Grid className={styles.container_instructions} container item xs={6}>
                    <Typography variant="h6">
                        Instructions :
                    </Typography>
                    <Typography variant="body1">
                    Inspired by Sequence, this is a digital board game to spark deeper conversations. Though we've replaced the standard deck of cards with a deck of questions of our own, the motive of the game is still to create X-chip sequences across the board with your assigned team-member, before the opposing team can. Each player has to answer the question they want to put a chip on in order to move forward. While the end-goal may be competitive, the beauty in this game is the journey to get there – The more detailed your answer, the more the more follow-ups; the more follow-ups, the more chances for other players to share their answers too; and the more sharing, the greater the conversation.  
                    </Typography>
                </Grid>
                {
                    (type === "create") ?
                        <Grid className={styles.container_instructions} container direction="row" item xs={6} spacing={3}>
                            <Grid container direction="column" alignItems="flex-start" onClick={()=>handleButtonClick("undecided")}>
                                <img className={styles.arrow_icon} src="/assets/back_arrow.svg"/>
                                <Typography className={styles.arrow_text} variant="caption">change deck</Typography>
                            </Grid>
                            <Grid container direction="column">
                                <Typography className={styles.create_instructions_text} variant="body2">1. choose your username</Typography>
                                <TextField id="standard-basic" label="Standard" onChange={(e)=>{chooseNewUsername(e)}}/>
                            </Grid>
                        </Grid>
                    : (type === "join") ?
                        <Grid container direction="row" item xs={6} spacing={3}>
                            join
                        </Grid>
                    : 
                        <Grid container direction="row" item xs={6} spacing={3}>
                            <Grid item xs={4}>
                                <DeckInstruction primary_color="#000000" secondary_color="#FFFFFF" icon="/assets/friends_black.svg" title="choose a deck" description="hover over any deck to see more details" />
                            </Grid>
                            <Grid item xs={4}>
                                <DeckCover primary_color="#FF1493" secondary_color="#5B452B" icon="/assets/friends.svg" title="convo w friends" description="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal" subcategory1_icon="/assets/friends.svg" subcategory1_title="Title" subcategory1_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal" subcategory2_icon="/assets/friends.svg" subcategory2_title="Title" subcategory2_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal" subcategory3_icon="/assets/friends.svg" subcategory3_title="Title" subcategory3_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal"subcategory4_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal" subcategory4_icon="/assets/friends.svg" subcategory4_title="Title" subcategory4_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal" selected={deck} chooseDeck={changeDeck}/>
                            </Grid>
                            <Grid item xs={4}>
                                <DeckCover primary_color="#7FFF00" secondary_color="#EE3A20" icon="/assets/cupid.svg" title="cupid's arrows" description="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal" subcategory1_icon="/assets/friends.svg" subcategory1_title="Title" subcategory1_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal" subcategory2_icon="/assets/friends.svg" subcategory2_title="Title" subcategory2_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal" subcategory3_icon="/assets/friends.svg" subcategory3_title="Title" subcategory3_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal"subcategory4_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal" subcategory4_icon="/assets/friends.svg" subcategory4_title="Title" subcategory4_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal" selected={deck} chooseDeck={changeDeck}/>
                            </Grid>
                            <Grid item xs={4}>
                                <DeckCover primary_color="#FF3503" secondary_color="#10532F" icon="/assets/family.svg" title="thickening blood" description="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal" subcategory1_icon="/assets/friends.svg" subcategory1_title="Title" subcategory1_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal" subcategory2_icon="/assets/friends.svg" subcategory2_title="Title" subcategory2_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal" subcategory3_icon="/assets/friends.svg" subcategory3_title="Title" subcategory3_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal"subcategory4_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal" subcategory4_icon="/assets/friends.svg" subcategory4_title="Title" subcategory4_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal" selected={deck} chooseDeck={changeDeck}/>
                            </Grid>
                            <Grid item xs={4}>
                                <DeckCover primary_color="#1F51FF" secondary_color="#FBBEBE" icon="/assets/impressions.svg" title="untethered q's" description="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal" subcategory1_icon="/assets/friends.svg" subcategory1_title="Title" subcategory1_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal" subcategory2_icon="/assets/friends.svg" subcategory2_title="Title" subcategory2_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal" subcategory3_icon="/assets/friends.svg" subcategory3_title="Title" subcategory3_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal"subcategory4_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal" subcategory4_icon="/assets/friends.svg" subcategory4_title="Title" subcategory4_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal" selected={deck} chooseDeck={changeDeck}/>
                            </Grid>
                            <Grid item xs={4}>
                                <DeckCover primary_color="#EAEE20" secondary_color="#32B1CC" icon="/assets/18.svg" title="chatty cups" description="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal" subcategory1_icon="/assets/friends.svg" subcategory1_title="Title" subcategory1_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal" subcategory2_icon="/assets/friends.svg" subcategory2_title="Title" subcategory2_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal" subcategory3_icon="/assets/friends.svg" subcategory3_title="Title" subcategory3_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal"subcategory4_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal" subcategory4_icon="/assets/friends.svg" subcategory4_title="Title" subcategory4_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal" selected={deck} chooseDeck={changeDeck}/>
                            </Grid>
                        </Grid>
                }
            </Grid>
            <Grid container className={styles.container_actions} justify="space-between" spacing={3}>
                <Grid item xs={6}>
                    <PrimaryButton text="join a game" handleClick={handleButtonClick}/>
                </Grid> 
                <Grid item xs={6}>
                    <SecondaryButton text="start a game" handleClick={handleButtonClick}/>
                </Grid> 
            </Grid>
        </div>
    )
}