import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Typography, Grid, makeStyles } from '@material-ui/core'
import { connectToDatabase } from "../util/mongodb";

// components
import Card, { CardOnBoard, CardInHand } from '../components/card'
import PrimaryButton from '../components/button'

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
        top: 'calc((100vh - 600px)/2)',
        left: 'calc((100vw - 500px)/2)',
    },
    activePlayerTurn: {
        backgroundColor: '#EAEE20',
        borderRadius: '20px',
        border: '5px solid black',
        borderColor: '#32B1CC',
        padding: '1vh 1vw',
        margin: '2vh 0',
    },
    activePlayerTurnInverse: {
        backgroundColor: '#32B1CC',
        borderRadius: '20px',
        border: '5px solid black',
        borderColor: '#EAEE20',
        padding: '1vh 1vw',
        margin: '2vh 0',
    }
});

export async function getServerSideProps() {
    const { db } = await connectToDatabase();

    
    const subcat_1 = await db
        .collection("Recess_Questions")
        .find({subcategory_id: 0})
        .limit(15)
        .toArray();

    const subcat_2 = await db
        .collection("Recess_Questions")
        .find({subcategory_id: 1})
        .limit(15)
        .toArray();
    
    const subcat_3 = await db
        .collection("Recess_Questions")
        .find({subcategory_id: 2})
        .limit(15)
        .toArray();

    const subcat_4 = await db
        .collection("Recess_Questions")
        .find({subcategory_id: 3})
        .limit(15)
        .toArray();

    const all_questions = subcat_1.concat(subcat_2, subcat_3, subcat_4);

    return {
        props: {
            all_questions: JSON.parse(JSON.stringify(all_questions)),
        },
    };
}

export default function Sequence(props) {
    const styles = useStyles();
    const router = useRouter();

    const subcategory_id_1 = '/assets/spades.svg';
    const subcategory_id_2 = '/assets/hearts.svg';
    const subcategory_id_3 = '/assets/clubs.svg';
    const subcategory_id_4 = '/assets/diamonds.svg';

    const token_id_1 = '/assets/friends_blue.svg';
    const token_id_2 = '/assets/friends_green.svg';

    const primaryColor="#32B1CC";
    const secondaryColor="#EAEE20";

    const [board, setBoard] = React.useState([
        [{number: 1, subcategory_id: 1, token: 0},{number: 12, subcategory_id: 2, token: 0},{number: 14, subcategory_id: 3, token: 0},{number: 10, subcategory_id: 2, token: 0},{number: 9, subcategory_id: 3, token: 0},{number: 12, subcategory_id: 4, token: 0},{number: 13, subcategory_id: 2, token: 0},{number: 15, subcategory_id: 1, token: 0},{number: 11, subcategory_id: 1, token: 0},{number: 9, subcategory_id: 2, token: 0},],
        [{number: 3, subcategory_id: 3, token: 0},{number: 10, subcategory_id: 1, token: 0},{number: 4, subcategory_id: 2, token: 0},{number: 9, subcategory_id: 4, token: 0},{number: 6, subcategory_id: 3, token: 0},{number: 13, subcategory_id: 1, token: 0},{number: 1, subcategory_id: 4, token: 0},{number: 8, subcategory_id: 3, token: 0},{number: 8, subcategory_id: 2, token: 0},{number: 7, subcategory_id: 3, token: 0},],
        [{number: 5, subcategory_id: 2, token: 0},{number: 11, subcategory_id: 4, token: 0},{number: 1, subcategory_id: 3, token: 0},{number: 9, subcategory_id: 1, token: 0},{number: 3, subcategory_id: 2, token: 0},{number: 2, subcategory_id: 4, token: 0},{number: 13, subcategory_id: 3, token: 0},{number: 14, subcategory_id: 2, token: 0},{number: 10, subcategory_id: 3, token: 0},{number: 8, subcategory_id: 4, token: 0},],
        [{number: 3, subcategory_id: 4, token: 0},{number: 2, subcategory_id: 1, token: 0},{number: 13, subcategory_id: 4, token: 0},{number: 15, subcategory_id: 3, token: 0},{number: 5, subcategory_id: 4, token: 0},{number: 3, subcategory_id: 1, token: 0},{number: 11, subcategory_id: 2, token: 0},{number: 8, subcategory_id: 1, token: 0},{number: 15, subcategory_id: 4, token: 0},{number: 4, subcategory_id: 1, token: 0},],
        [{number: 4, subcategory_id: 3, token: 0},{number: 4, subcategory_id: 4, token: 0},{number: 1, subcategory_id: 2, token: 0},{number: 7, subcategory_id: 1, token: 0},{number: 12, subcategory_id: 3, token: 0},{number: 6, subcategory_id: 2, token: 0},{number: 2, subcategory_id: 3, token: 0},{number: 10, subcategory_id: 4, token: 0},{number: 12, subcategory_id: 1, token: 0},{number: 15, subcategory_id: 2, token: 0},],
        [{number: 6, subcategory_id: 4, token: 0},{number: 5, subcategory_id: 1, token: 0},{number: 6, subcategory_id: 1, token: 0},{number: 2, subcategory_id: 2, token: 0},{number: 5, subcategory_id: 3, token: 0},{number: 7, subcategory_id: 4, token: 0},{number: 14, subcategory_id: 1, token: 0},{number: 7, subcategory_id: 2, token: 0},{number: 11, subcategory_id: 3, token: 0},{number: 14, subcategory_id: 4, token: 0},],
    ]);

    const [questionCounter, setQuestionCounter] = React.useState(1)

    var user1_deck = [];
    var user2_deck = [];
    var user3_deck = [];
    var user4_deck = [];

    React.useEffect(() => {
        for (var i = 0; i < 5; i++) {
            if (i+1 === 15) {
                user1_deck.push({
                    number: 15,
                    subcategory_id: (props.all_questions[i]["subcategory_id"])+1,
                    question: props.all_questions[i]["question"],
                })
            }
            else {
                user1_deck.push({
                    number: (i+1)%15,
                    subcategory_id: (props.all_questions[i]["subcategory_id"])+1,
                    question: props.all_questions[i]["question"],
                })
            }
        }
        for (var i = 5; i < 10; i++) {
            
            if (i+1 === 15) {
                user2_deck.push({
                    number: 15,
                    subcategory_id: (props.all_questions[i]["subcategory_id"])+1,
                    question: props.all_questions[i]["question"],
                })
            }
            else {
                user2_deck.push({
                    number: (i+1)%15,
                    subcategory_id: (props.all_questions[i]["subcategory_id"])+1,
                    question: props.all_questions[i]["question"],
                })
            }
        }
        for (var i = 10; i < 15; i++) {
            if (i+1 === 15) {
                user3_deck.push({
                    number: 15,
                    subcategory_id: (props.all_questions[i]["subcategory_id"])+1,
                    question: props.all_questions[i]["question"],
                })
            }
            else {
                user3_deck.push({
                    number: (i+1)%15,
                    subcategory_id: (props.all_questions[i]["subcategory_id"])+1,
                    question: props.all_questions[i]["question"],
                })
            }
        }
        for (var i = 15; i < 20; i++) {
            if (i+1 === 15) {
                user4_deck.push({
                    number: 15,
                    subcategory_id: (props.all_questions[i]["subcategory_id"])+1,
                    question: props.all_questions[i]["question"],
                })
            }
            else {
                user4_deck.push({
                    number: (i+1)%15,
                    subcategory_id: (props.all_questions[i]["subcategory_id"])+1,
                    question: props.all_questions[i]["question"],
                })
            }
            
        }
        setQuestionCounter(20)
    })

    const [users, setUsers] = React.useState([
        {"_id": "player 1", "team_id": 1, "cards_in_hand": user1_deck},
        {"_id": "player 2", "team_id": 2, "cards_in_hand": user2_deck},
        {"_id": "player 3", "team_id": 1, "cards_in_hand": user3_deck},
        {"_id": "player 4", "team_id": 2, "cards_in_hand": user4_deck},
    ])

    console.log(users)
    

    const [gameStart, setGameStart] = React.useState(true)
    
    const [activePlayer, setActivePlayer] = React.useState(0)
    const [currentPlayerNotif, setCurrentPlayerNotif] = React.useState(false)
    const [cardChosen, setCardChosen] = React.useState({subcategory_id: 0, number: 0, question: ""})
    const [cardChosenBool, setCardChosenBool] = React.useState(false)
    const [canShowCards, setCanShowCards] = React.useState(false)

    React.useEffect(() => {
        if (cardChosenBool) {
            for (var i = 0; i < board.length; i++) {
                for (var j = 0; j < board[i].length; j++) {
                    if ((cardChosen.subcategory_id === board[i][j]["subcategory_id"]) && (cardChosen.number === board[i][j]["number"])) {
                        board[i][j]["token"] = users[activePlayer]["team_id"];
                    }
                }
            }
            for (var i = 0; i < users[activePlayer]["cards_in_hand"].length; i++) {
                if ((users[activePlayer]["cards_in_hand"][i]["number"] === cardChosen.number) && (users[activePlayer]["cards_in_hand"][i]["subcategory_id"] === cardChosen.subcategory_id)) {
                    if (questionCounter+1 === 15) {
                        users[activePlayer]["cards_in_hand"][i]["number"] = 15
                        users[activePlayer]["cards_in_hand"][i]["subcategory_id"] = props.all_questions[questionCounter]["subcategory_id"]+1
                        users[activePlayer]["cards_in_hand"][i]["question"] = props.all_questions[questionCounter]["question"]
                    }
                    else {
                        users[activePlayer]["cards_in_hand"][i]["number"] = (questionCounter+1)%15
                        users[activePlayer]["cards_in_hand"][i]["subcategory_id"] = props.all_questions[questionCounter]["subcategory_id"]+1
                        users[activePlayer]["cards_in_hand"][i]["question"] = props.all_questions[questionCounter]["question"]
                    }
                }
            }
        }
    }, [cardChosenBool])

    function changeCard(number, subcategory_id, question) {
        setCardChosen({subcategory_id: subcategory_id, number: number, question: question});
    }

    function playCard(cardChosenConfirmBool) {
        setCanShowCards(false)
        setCardChosenBool(true)
        var temp_counter = questionCounter +1
        setQuestionCounter(temp_counter)
        // changeCard(0,0,"")
        
    }


    function updateNextPlayer() {
        var activePlayer_temp = (activePlayer+1) % 4
        setActivePlayer(activePlayer_temp)
        setCurrentPlayerNotif(true)
    }
    

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
                                    <CardOnBoard number={obj.number} subcategory_id={obj.subcategory_id} token={obj.token} subcategory_id_1={subcategory_id_1} subcategory_id_2={subcategory_id_2} subcategory_id_3={subcategory_id_3} subcategory_id_4={subcategory_id_4} token_id_1={token_id_1} token_id_2={token_id_2} primaryColor={primaryColor} secondaryColor={secondaryColor}/>
                                </Grid>
                            )}
                        </Grid>
                    )}
                </Grid>
                {canShowCards && 
                    <Grid container direction="column" item xs={1}>
                        <Grid item style={{height: 'calc(85vh / 6)'}}>
                            <Typography variant="h6">
                                my cards
                            </Typography>
                            <Typography variant="caption">
                                {(cardChosen.number !== 0) ? 
                                "( click card to select, confirm to play )"
                                : "( hover over any card to see the question )"
                                }
                            </Typography>
                        </Grid>
                            {users[activePlayer]["cards_in_hand"].map((obj, index) => 
                                <Grid item key={index}>
                                    <CardInHand number={obj.number} subcategory_id={obj.subcategory_id} question={obj.question} subcategory_id_1={subcategory_id_1} subcategory_id_2={subcategory_id_2} subcategory_id_3={subcategory_id_3} subcategory_id_4={subcategory_id_4} primaryColor={primaryColor} secondaryColor={secondaryColor} activePlayer={activePlayer} selectedCard={cardChosen} handleCardSelect={changeCard} />
                                </Grid>
                            )}
                        {(cardChosen.number !== 0) &&
                            <Grid item xs={12}>
                                <PrimaryButton text="confirm" handleClick={playCard} style_overwriter={{padding: '1vh 2vw', marginTop: '0.5vh'}}/>
                            </Grid>
                        }
                    </Grid>
                }
            </Grid>

            {gameStart && 
                <Grid className={styles.layer}>
                    <Grid className={styles.playerTurn}>
                        <Grid className={styles.activePlayerTurn}>
                            <Typography variant="h5" align="center" style={{color: primaryColor, fontWeight: 'bold'}}>
                                hi {users[0]["_id"]}, you are on team {users[0]["team_id"]} <br/>
                                hi {users[1]["_id"]}, you are on team {users[1]["team_id"]} <br/>
                                hi {users[2]["_id"]}, you are on team {users[2]["team_id"]} <br/>
                                hi {users[3]["_id"]}, you are on team {users[3]["team_id"]} <br/>
                            </Typography>
                        </Grid>
                        <Grid className={styles.activePlayerTurnInverse} onClick={()=>{setGameStart(false); setCurrentPlayerNotif(true)}} style={{cursor: 'pointer'}}>
                            <Typography variant="h5" align="center" style={{color: secondaryColor, fontWeight: 'bold'}}>
                                continue
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            }

            {(currentPlayerNotif) && (!cardChosenBool) &&
                <Grid className={styles.layer}>
                    <Grid className={styles.playerTurn}>
                        <Grid className={styles.activePlayerTurn}>
                            <Typography variant="h5" align="center" style={{color: primaryColor, fontWeight: 'bold'}}>
                                hi {users[activePlayer]["_id"]}, it is your turn <br/>
                                click on any card in your collection (to the right) to play <br/>
                                ensure your screen is hidden from other players!
                            </Typography>
                        </Grid>
                        <Grid className={styles.activePlayerTurnInverse} onClick={()=>{setCurrentPlayerNotif(false); setCanShowCards(true)}} style={{cursor: 'pointer'}}>
                            <Typography variant="h5" align="center" style={{color: secondaryColor, fontWeight: 'bold'}}>
                                continue
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            }
            

            {cardChosenBool && 
                <Grid className={styles.layer}>
                    <Grid className={styles.playerTurn}>
                        <Grid className={styles.activePlayerTurn}>
                            <Typography variant="h5" align="center" style={{color: primaryColor, fontWeight: 'bold'}}>
                                {users[activePlayer]["_id"]} picked a card
                            </Typography>
                        </Grid>
                        <Card primaryColor="#32B1CC" secondaryColor="#EAEE20" number={cardChosen.number} subcategory_id={cardChosen["subcategory_id"]} question={cardChosen.question} subcategory_id_1={subcategory_id_1} subcategory_id_2={subcategory_id_2} subcategory_id_3={subcategory_id_3} subcategory_id_4={subcategory_id_4} />
                        <Grid className={styles.activePlayerTurn} onClick={()=>{setCardChosenBool(false); updateNextPlayer()}} style={{cursor: 'pointer'}}>
                            <Typography variant="h5" align="center" style={{color: primaryColor, fontWeight: 'bold'}}>
                                continue
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            }
            
        </div>
    )
}