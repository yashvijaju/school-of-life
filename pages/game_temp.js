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
    console.log(props.all_questions);
    
    
    const styles = useStyles();
    const router = useRouter();

    const subcategory_id_1 = '/assets/friends.svg';
    const subcategory_id_2 = '/assets/cupid.svg';
    const subcategory_id_3 = '/assets/family.svg';
    const subcategory_id_4 = '/assets/18.svg';

    const token_id_1 = '/assets/friends_blue.svg';
    const token_id_2 = '/assets/friends_green.svg';
    const token_id_3 = '/assets/friends_red.svg';

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

    const [users, setUsers] = React.useState([
        {"_id": "yashvi", "team_id": 1, "cards_in_hand": [{number: 3, subcategory_id: 1, question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?"},{number: 8, subcategory_id: 2, question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, sed do eiusmod tempor??"},{number: 9, subcategory_id: 3, question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor??"},{number: 7, subcategory_id: 2, question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor consectetur adipiscing elit, sed do eiusmod tempor?"},{number: 4, subcategory_id: 1, question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?"}]},
    ])

    
    const [username, setUsername] = React.useState("")

    React.useEffect(() => {
        setUsername(router.query.username)
    }, [router.query.username])

    const [gameStart, setGameStart] = React.useState(true)
    // const [currentUser, setCurrentUser] = React.useState({
    //     "_id": username,
    //     "team_id": 1,
    //     "cards_in_hand": [{number: 3, subcategory_id: 1, question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?"},{number: 8, subcategory_id: 2, question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, sed do eiusmod tempor??"},{number: 9, subcategory_id: 3, question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor??"},{number: 7, subcategory_id: 2, question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor consectetur adipiscing elit, sed do eiusmod tempor?"},{number: 4, subcategory_id: 1, question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?"}]
    // })
    
    const [activePlayer, setActivePlayer] = React.useState("yashvi")
    const [currentPlayerNotif, setCurrentPlayerNotif] = React.useState(false)
    const [cardChosen, setCardChosen] = React.useState({subcategory_id: 0, number: 0, question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?"})
    const [cardChosenConfirmBool, setCardChosenConfirmBool] = React.useState(false)
    const [cardChosenBool, setCardChosenBool] = React.useState(false)

    React.useEffect(() => {
        if (cardChosenBool) {
            for (var i = 0; i < board.length; i++) {
                for (var j = 0; j < board[i].length; j++) {
                    if ((cardChosen.subcategory_id === board[i][j]["subcategory_id"]) && (cardChosen.number === board[i][j]["number"])) {
                        board[i][j]["token"] = currentUser["team_id"];
                    }
                }
            }
        }
    }, [cardChosenBool])

    function changeCard(number, subcategory_id, question) {
        setCardChosen({subcategory_id: subcategory_id, number: number, question: question});
    }

    function playCard(cardChosenConfirmBool) {
        setCardChosenConfirmBool(cardChosenConfirmBool)
        setCardChosenBool(true)
    }

    function setNextActivePlayer(cardChosenConfirmBool) {
        setActivePlayer("kavya")
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
                                    <CardOnBoard number={obj.number} subcategory_id={obj.subcategory_id} token={obj.token} subcategory_id_1={subcategory_id_1} subcategory_id_2={subcategory_id_2} subcategory_id_3={subcategory_id_3} subcategory_id_4={subcategory_id_4} token_id_1={token_id_1} token_id_2={token_id_2} token_id_3={token_id_3} primaryColor={primaryColor} secondaryColor={secondaryColor}/>
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
                            {((username === activePlayer) && (cardChosen.number !== 0)) ? 
                            "( click card to select, confirm to play )"
                            : "( hover over any card to see the question )"
                            }
                        </Typography>
                    </Grid>
                        {currentUser.cards_in_hand.map((obj, index) => 
                            <Grid item key={index}>
                                <CardInHand number={obj.number} subcategory_id={obj.subcategory_id} question={obj.question} subcategory_id_1={subcategory_id_1} subcategory_id_2={subcategory_id_2} subcategory_id_3={subcategory_id_3} subcategory_id_4={subcategory_id_4} primaryColor={primaryColor} secondaryColor={secondaryColor} activePlayerUsername={activePlayer} currentUserUsername={username} selectedCard={cardChosen} handleCardSelect={changeCard} />
                            </Grid>
                        )}
                    {(username === activePlayer) && (cardChosen.number !== 0) &&
                        <Grid item xs={12}>
                            <PrimaryButton text="confirm" handleClick={playCard} style_overwriter={{padding: '1vh 2vw', marginTop: '0.5vh'}}/>
                        </Grid>
                    }
                </Grid>
            </Grid>

            {gameStart && 
                <Grid className={styles.layer}>
                    <Grid className={styles.playerTurn}>
                        <Grid className={styles.activePlayerTurn}>
                            <Typography variant="h5" align="center" style={{color: primaryColor, fontWeight: 'bold'}}>
                                hi {username}, you are on team {currentUser.team_id} <br/>
                                ask around, identify who else is on your team ;)
                            </Typography>
                        </Grid>
                        <Grid className={styles.activePlayerTurnInverse} onClick={()=>setGameStart(false)} style={{cursor: 'pointer'}}>
                            <Typography variant="h5" align="center" style={{color: secondaryColor, fontWeight: 'bold'}}>
                                continue
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            }

            {(username === activePlayer) && (currentPlayerNotif) &&
                <Grid className={styles.layer}>
                    <Grid className={styles.playerTurn}>
                        <Grid className={styles.activePlayerTurn}>
                            <Typography variant="h5" align="center" style={{color: primaryColor, fontWeight: 'bold'}}>
                                hi {username}, it is your turn <br/>
                                click on any card in your collection (to the right) to play
                            </Typography>
                        </Grid>
                        <Grid className={styles.activePlayerTurnInverse} onClick={()=>setCurrentPlayerNotif(false)} style={{cursor: 'pointer'}}>
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
                                {activePlayer} picked a card
                            </Typography>
                        </Grid>
                        <Card primaryColor="#32B1CC" secondaryColor="#EAEE20" number={cardChosen.number} subcategory_id={cardChosen["subcategory_id"]} question={cardChosen.question} subcategory_id_1={subcategory_id_1} subcategory_id_2={subcategory_id_2} subcategory_id_3={subcategory_id_3} subcategory_id_4={subcategory_id_4} />
                        <Grid className={styles.activePlayerTurn} onClick={()=>setCardChosenBool(false)} style={{cursor: 'pointer'}}>
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