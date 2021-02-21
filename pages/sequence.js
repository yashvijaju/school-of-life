import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Typography, Grid, TextField, InputAdornment, OutlinedInput, makeStyles } from '@material-ui/core'
import FaceIcon from '@material-ui/icons/Face';
import Alert from '@material-ui/lab/Alert';

// components
import Breadcrumbs from '../components/breadcrumbs'
import DeckCover, { DeckInstruction } from '../components/deckCover'
import PrimaryButton, { SecondaryButton } from '../components/button'
const red = '#EE3A20';
const black = '#000000';

const useStyles = makeStyles({
    container_outer: {
        margin: '10vh 5vw',
    },
    container_breadcrumbs: {
        margin: '0 0 5vh 2vw',
    },
    container_instructions: {
        borderRadius: '20px',
        // border: '5px solid red',
        borderColor: red,
        // backgroundColor: '#FACDC7',
        padding: '2vh 5vw',
        minHeight: '540px'
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
    container_instructions_create: {
        borderRadius: '20px',
        border: '5px solid red',
        borderColor: red,
        padding: '2vh 2.5vw',
        minHeight: '540px',
    },
    create_instructions_text: {
        color: red,
    },
    alert: {
        position: 'relative',
        top: '-30px'
    }
});

export default function Sequence() {
    const styles = useStyles();
    const router = useRouter();

    const [alert, setAlert] = React.useState(false);
    const [deck, chooseDeck] = React.useState("");
    const [type, chooseType] = React.useState("undecided");
    const [username, chooseUsername] = React.useState("");
    const [usernameChosen, setUsernameChosen] = React.useState(false);
    const [game_code, setGameCode] = React.useState("abcd-efgh-ijkl");
    const [players_in_game, setPlayersInGame] = React.useState("kavya     yashvi");

    function changeDeck(newDeck) {
        chooseDeck(newDeck);
    }

    function handleButtonClick(type) {
        if (type === "create") {
            if (deck === "") {
                setAlert(true);
                return;
            }
        }
        chooseType(type)
    }

    function chooseNewUsername(e) {
        chooseUsername(e.target.value)
    }

    function setUsernameChosenBool(bool) {
        setUsernameChosen(bool)
    }

    function handleRouting(link) {
        router.push({pathname: link, query: { username: username },})
      }
    


    return(
        <div className={styles.container_outer}>
            
            <Grid className={styles.container_breadcrumbs} container direction="row">
                <Breadcrumbs href="/">Home</Breadcrumbs>
                <Typography variant="body2" style={{float: 'left', cursor: 'pointer'}}>Sequence</Typography>
            </Grid>
            {alert && 
                <Grid className={styles.alert}>
                    <Alert severity="error" onClose={() => {setAlert(false)}}>Please choose a deck before starting a new game!</Alert>
                </Grid>
            }
            <Grid container direction="row" justify="space-between" spacing={3}>
                <Grid className={styles.container_instructions} container item xs={6}>
                    <Typography variant="h6" style={{padding: '0 2vw'}}>
                        Instructions :
                    </Typography>
                    <Typography variant="body1" style={{padding: '0 2vw'}}>
                    Players are divided into teams and assigned a set of 5 cards each. Turn by turn, each player will try to identify a spot on the board they want to mark with their team token. In order to mark the spot, the player needs to have the corresponding card with them, and answer the question to the rest of the players. To form a sequence on the board, each team needs to have 4 tokens side-by-side either vertically or horizontally. The game will end when there’s either a winning team, or all the cards get depleted. 

                    Instructions to win aside, the purpose of this game is to break down walls and spark deeper conversations. Follow-up questions and sharing-out-of-turn is highly encouraged :)  
                    </Typography>
                </Grid>
                {
                    (type === "create") ?
                        <Grid className={styles.container_instructions_create} container direction="row" item xs={6} spacing={3}>
                            <Grid container direction="column" alignItems="flex-start" onClick={()=>{handleButtonClick("undecided");chooseUsername("");setUsernameChosen(false)}}>
                                <img className={styles.arrow_icon} src="/assets/back_arrow.svg"/>
                                <Typography className={styles.arrow_text} variant="caption">change deck</Typography>
                            </Grid>
                            <Grid container direction="column" style={{padding: '0 2.5vw'}}>
                                <Typography className={styles.create_instructions_text} variant="body2">1. choose your username</Typography>
                                <OutlinedInput
                                    placeholder="username"
                                    color="secondary"
                                    onChange={(e)=>{chooseNewUsername(e)}}
                                    style={{borderColor: red, marginTop: '1vh'}} 
                                    disabled={usernameChosen ? true : false} 
                                    endAdornment={<InputAdornment position="end"><FaceIcon color="secondary"/></InputAdornment>}
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                    'aria-label': 'weight',
                                    }}
                                    labelWidth={0}
                                />
                                {(username !== "") && (!usernameChosen) &&
                                    <>
                                        <Grid item style={{marginTop: '3vh'}}>
                                            <PrimaryButton text="confirm username" handleClick={setUsernameChosenBool} button_text="true"/>
                                        </Grid>
                                    </>
                                }
                                {(usernameChosen) &&
                                    <>
                                        <Typography className={styles.create_instructions_text} variant="body2" style={{marginTop: '3vh'}}>2. share this code with your friends</Typography>
                                        <TextField id="username" label="" color="secondary" variant="outlined" value={game_code} style={{borderColor: red, marginTop: '1vh'}}  disabled="true"/>

                                        <Typography className={styles.create_instructions_text} variant="body2" style={{marginTop: '3vh'}}>3. these friends have joined. start the game when all your friends have joined</Typography>
                                        <TextField id="username" label="" color="secondary" variant="outlined" value={players_in_game} style={{borderColor: red, marginTop: '1vh'}} disabled="true"/>
                                    </>
                                }
                            </Grid>
                        </Grid>
                    : (type === "join") ?
                        <Grid className={styles.container_instructions_create} container direction="row" item xs={6} spacing={3}>
                            <Grid container direction="column" alignItems="flex-start" onClick={()=>{handleButtonClick("undecided");chooseUsername("");setUsernameChosen(false)}}>
                                <img className={styles.arrow_icon} src="/assets/back_arrow.svg"/>
                                <Typography className={styles.arrow_text} variant="caption">start a new game instead</Typography>
                            </Grid>
                            <Grid container direction="column" style={{padding: '0 2.5vw'}}>
                                <Typography className={styles.create_instructions_text} variant="body2">1. choose your username</Typography>
                                <OutlinedInput
                                    placeholder="username"
                                    color="secondary"
                                    onChange={(e)=>{chooseNewUsername(e)}}
                                    style={{borderColor: red, marginTop: '1vh'}} 
                                    disabled={usernameChosen ? true : false} 
                                    endAdornment={<InputAdornment position="end"><FaceIcon color="secondary"/></InputAdornment>}
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                    'aria-label': 'weight',
                                    }}
                                    labelWidth={0}
                                />
                                {(username !== "") && (!usernameChosen) &&
                                    <>
                                        <Grid item style={{marginTop: '3vh'}}>
                                            <PrimaryButton text="confirm username" handleClick={setUsernameChosenBool} button_text="true"/>
                                        </Grid>
                                    </>
                                }
                                {(usernameChosen) &&
                                    <>
                                        <Typography className={styles.create_instructions_text} variant="body2" style={{marginTop: '3vh'}}>2. write the code shared by the game master</Typography>
                                        <TextField id="username" label="" color="secondary" variant="outlined" value={game_code} style={{borderColor: red, marginTop: '1vh'}}  disabled="true"/>

                                        <Typography className={styles.create_instructions_text} variant="body2" style={{marginTop: '3vh'}}>3. you are in the game; wait for the game master to begin</Typography>
                                        <TextField id="username" label="" color="secondary" variant="outlined" value={players_in_game} style={{borderColor: red, marginTop: '1vh'}} disabled="true"/>
                                    </>
                                }
                            </Grid>
                        </Grid>
                    : 
                        <Grid container direction="row" item xs={6} spacing={3}>
                            <Grid item xs={4}>
                                <DeckInstruction primary_color="#000000" secondary_color="#FFFFFF" icon="/assets/friends_black.svg" title="choose a deck" description="hover over any deck to see more details" />
                            </Grid>
                            <Grid item xs={4}>
                                <DeckCover primary_color="#FF1493" secondary_color="#5B452B" icon="/assets/friends.svg" title="recess" description="A timeless deck for friends to dig deeper." subcategory1_icon="/assets/friends.svg" subcategory1_title="Title" subcategory1_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal" subcategory2_icon="/assets/friends.svg" subcategory2_title="Title" subcategory2_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal" subcategory3_icon="/assets/friends.svg" subcategory3_title="Title" subcategory3_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal"subcategory4_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal" subcategory4_icon="/assets/friends.svg" subcategory4_title="Title" subcategory4_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal" selected={deck} chooseDeck={changeDeck}/>
                            </Grid>
                            <Grid item xs={4}>
                                <DeckCover primary_color="#7FFF00" secondary_color="#EE3A20" icon="/assets/cupid.svg" title="cupid's arrows" description="60 questions to rise in love. Notice: Deck coming soon!" subcategory1_icon="/assets/friends.svg" subcategory1_title="Title" subcategory1_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal" subcategory2_icon="/assets/friends.svg" subcategory2_title="Title" subcategory2_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal" subcategory3_icon="/assets/friends.svg" subcategory3_title="Title" subcategory3_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal"subcategory4_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal" subcategory4_icon="/assets/friends.svg" subcategory4_title="Title" subcategory4_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal" selected={deck} chooseDeck={changeDeck}/>
                            </Grid>
                            <Grid item xs={4}>
                                <DeckCover primary_color="#FF3503" secondary_color="#10532F" icon="/assets/family.svg" title="dinner table" description="Family-friendly questions to thicken blood some more. Notice: Deck coming soon!" subcategory1_icon="/assets/friends.svg" subcategory1_title="Title" subcategory1_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal" subcategory2_icon="/assets/friends.svg" subcategory2_title="Title" subcategory2_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal" subcategory3_icon="/assets/friends.svg" subcategory3_title="Title" subcategory3_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal"subcategory4_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal" subcategory4_icon="/assets/friends.svg" subcategory4_title="Title" subcategory4_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal" selected={deck} chooseDeck={changeDeck}/>
                            </Grid>
                            <Grid item xs={4}>
                                <DeckCover primary_color="#1F51FF" secondary_color="#FBBEBE" icon="/assets/impressions.svg" title="no strings attached" description="For not super personal, but still wildly interesting, conversations. Notice: Deck coming soon!" subcategory1_icon="/assets/friends.svg" subcategory1_title="Title" subcategory1_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal" subcategory2_icon="/assets/friends.svg" subcategory2_title="Title" subcategory2_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal" subcategory3_icon="/assets/friends.svg" subcategory3_title="Title" subcategory3_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal"subcategory4_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal" subcategory4_icon="/assets/friends.svg" subcategory4_title="Title" subcategory4_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal" selected={deck} chooseDeck={changeDeck}/>
                            </Grid>
                            <Grid item xs={4}>
                                <DeckCover primary_color="#EAEE20" secondary_color="#32B1CC" icon="/assets/18.svg" title="saturday nights" description="(18+) For talks as wild as the parties we once had. Notice: Deck coming soon!" subcategory1_icon="/assets/friends.svg" subcategory1_title="Title" subcategory1_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal" subcategory2_icon="/assets/friends.svg" subcategory2_title="Title" subcategory2_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal" subcategory3_icon="/assets/friends.svg" subcategory3_title="Title" subcategory3_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal"subcategory4_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal" subcategory4_icon="/assets/friends.svg" subcategory4_title="Title" subcategory4_sample="lorem ipsum dolor sitefa amet, consectetur elitjuli adipiscingal" selected={deck} chooseDeck={changeDeck}/>
                            </Grid>
                        </Grid>
                }
            </Grid>
            <Grid container className={styles.container_actions} justify="space-between" spacing={3}>
                {(type === "join") ? 
                    <div></div>
                    : ((type === "create") && (usernameChosen)) ?
                        <Grid item xs={12}>
                            <PrimaryButton text="start the game" handleClick={handleRouting} button_text="/game"/>
                        </Grid> 
                        : (type === "create") ?
                            <div></div>
                            :
                            <>
                                <Grid item xs={6}>
                                    <PrimaryButton text="join a game" handleClick={handleButtonClick} button_text="join"/>
                                </Grid> 
                                <Grid item xs={6}>
                                    <SecondaryButton text="start a game" handleClick={handleButtonClick} button_text="create"/>
                                </Grid> 
                            </>
                }
                
            </Grid>
        </div>
    )
}