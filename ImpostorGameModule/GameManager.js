function PickRandomItem(number, array) {
    const randomPicker = Math.floor(Math.random() * number);
    return array[randomPicker];
};

const Words = [
    "Pizza", "Beach", "Guitar", "Elephant", "Volcano",
    "Library", "Rocket", "Snowman", "Pirate", "Rainbow",
    "Javascript", "Friends", "Culture"
];

const amountOfWords = Words.length;

const PlayersJoined = {};
let word;

/* 
const PlayersJoined = {
    Bob: {
        Imposter: null,
        Admin: null,
        Votes: 0
    },
};
 */

//loop Player

let adminJoined = false;

function GetPlayerNames() {
    return Object.keys(PlayersJoined);
};

function addPlayer(PlayerName) {
    const plrObj = {
        Imposter: false,
        Admin: null,
        Votes: 0,
        HasVoted: false
    };
    PlayersJoined[PlayerName] = plrObj; // Adds Name as a key in the PlayerJoined object
    if (adminJoined === false) {
        adminJoined = true;
        plrObj.Admin = true;
    } else if (adminJoined === true) {
        plrObj.Admin = false;
    };
};

let playerNames;

function startGame() {
    playerNames = GetPlayerNames();
    const amountOfPlayers = playerNames.length
    if (amountOfPlayers < 3) {
        console.log("There Are Not Enough Players To Start The Game!");
    } else if (amountOfPlayers >= 3) {
        word = PickRandomItem(amountOfWords, Words)
        const ImpostorName = PickRandomItem(amountOfPlayers, playerNames);
        PlayersJoined[ImpostorName].Imposter = true;
    } else {
        console.log("An Unknown Error Has Occured!");
    };
};

function getWord() {
    return word;
};

// function allVoted()
// function endGame()
// Timer -> If time is up, call endGame()

function vote(voter, target) {
    const targetPlayer = PlayersJoined[target];
    const votingPlayer = PlayersJoined[voter];
    if (votingPlayer.HasVoted == false) {
        votingPlayer.HasVoted = true
        console.log(voter + " voted on " + target);
        targetPlayer.Votes = targetPlayer.Votes + 1;
        console.log(target + " Has Received: " + targetPlayer.Votes + " Amounts Of Votes!")
    } else if (votingPlayer.HasVoted == true) {
        console.log("Hey " + voter + "! You can't vote more than once!");
    };
};

function endGame() {
    console.log("The Game Has Ended, Here Are The Results:");
    const obj = GetPlayerWithMostVotes()
    // If its a tie, the obj = null
    if (obj = null) {
        console.log("It has been a tie! Therefore, the Impostor Has Won!")
        console.log("The Impostor Was... " + )
    }
};

function getImpostorForEndGame() {
    for (let plr of PlayersJoined) {
        if (plr.Imposter == false) {
            //nothing here cuz it need 2 continue :D 
        } else if (plr.Imposter == true) {
        
        } else {
            console.log("Uhhhhhhhhhhhhhhhhhhh. Idk some kinda error!")
        };
    };
};

function GetPlayerWithMostVotes() {
    let topName = null
    let topVotes = 0
    let tie = false
    
    for (let plrName of playerNames) {
        const plr = PlayersJoined[plrName];
        if (plr.Votes > topVotes) {
            topVotes = plr.Votes;
            topName = plrName;
            tie = false
        } else if (plr.Votes == topVotes) {
            tie = true
        } else if (plr.Votes < topVotes) {
            //nothing here :D
        } else {
            console.log("Never Happens :D")
        };
    };
    if (tie == false) {
        const returns = {
        topName: topName,
        topVotes: topVotes
    };
    return returns
    //console.log(GetPlayerWithMostVotes().topName)
    } else if (tie == true) {
        return null
    } else {
        console.log("I dont really wanna fix this, but you will have to, womp womp.")
    };
};

module.exports = {
    addPlayer: addPlayer,
    PlayersJoined: PlayersJoined,
    startGame: startGame,
    getWord: getWord,
    vote: vote
}
/*

ImpostorName = "Fob"
playersJoined = {
  Fob: { Imposter: null, Admin: true, Votes: 0 },
  Cob: { Imposter: null, Admin: false, Votes: 0 },
  Dob: { Imposter: null, Admin: false, Votes: 0 },
  Bob: { Imposter: null, Admin: false, Votes: 0 }
}

playersJoined[impostorName].Imposter = true
  */