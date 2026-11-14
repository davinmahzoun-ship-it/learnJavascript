function PickRandomItem(number, array) {
    const randomPicker = Math.floor(Math.random() * number);
    return array[randomPicker];
};

const Words = [
    "Pizza", "Beach", "Guitar", "Elephant", "Volcano",
    "Library", "Rocket", "Snowman", "Pirate", "Rainbow",
    "Javascript", "Friends", "Culture"
];

let totalVotes = 0

impostor = null

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
    Cob: {
        Imposter: null,
        Admin: null,
        Votes: 0
    },
     Dob: {
        Imposter: null,
        Admin: null,
        Votes: 0
    }
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

function startGame(fixedImpostor) {
    playerNames = GetPlayerNames();
    const amountOfPlayers = playerNames.length
    if (amountOfPlayers < 3) {
        console.log("There Are Not Enough Players To Start The Game!");
    } else if (amountOfPlayers >= 3) {
        word = PickRandomItem(amountOfWords, Words)
        let ImpostorName
        if (fixedImpostor == undefined) {
            ImpostorName = PickRandomItem(amountOfPlayers, playerNames);
        } else if (fixedImpostor !== undefined) {
            ImpostorName = fixedImpostor;
        } else {
            console.log("Impossible has become possible!!");
        };
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
        totalVotes = totalVotes + 1;
        console.log(target + " Has Received: " + targetPlayer.Votes + " Amounts Of Votes!");
    if (totalVotes == GetPlayerNames().length) {
        endGame();
    }
    } else if (votingPlayer.HasVoted == true) {
        console.log("Hey " + voter + "! You can't vote more than once!");
    };
};

function endGame() {
    console.log("The Game Has Ended, Here Are The Results:");
    const topName = GetPlayerWithMostVotes().topName;
    // If its a tie, the obj = null
    const nameOfImp = getImpostorForEndGame();
    const topVotes = GetPlayerWithMostVotes().topVotes;
    if (topName == null) {
        console.log("It has been a tie! Therefore, the Impostor Has Won!");
        console.log("The Impostor Was... 👻 " + nameOfImp + " 👻");
        console.log("STATUS: Impostor won! 👻");
    } else if (topName == nameOfImp) {
        console.log(nameOfImp + " Has Been Voted Out With " + topVotes + " Votes!");
        console.log("The Impostor Was... " + nameOfImp);
        console.log("STATUS: Impostor lost!");
    } else if (topName !== nameOfImp) {
        console.log(topName + " Has Been Voted Out With " + topVotes + " Votes!");
        console.log("The Impostor Was... 👻 " + nameOfImp + " 👻");
        console.log("STATUS: Impostor won!");
    } else {
        console.log("idk smth impossible happened XD");
    };
};

/*
        obj = {
            topName: topName,
            topVotes: topVotes
        };
*/

function getImpostorForEndGame() {
    for (let name of GetPlayerNames()) {
        if (PlayersJoined[name].Imposter == false) {

        } else if (PlayersJoined[name].Imposter == true) {
            return name;
        } else {
            console.log("Smth impossible happened XD");
        };
    };
};

function GetPlayerWithMostVotes() {
    let topName = null;
    let topVotes = 0;
    let tie = false;
    
    for (let plrName of playerNames) {
        const plr = PlayersJoined[plrName];
        if (plr.Votes > topVotes) {
            topVotes = plr.Votes;
            topName = plrName;
            tie = false;
        } else if (plr.Votes == topVotes) {
            tie = true
        } else if (plr.Votes < topVotes) {
            //nothing here :D
        } else {
            console.log("Never Happens :D");
        };
    };
    if (tie == false) {
        const returns = {
            topName: topName,
            topVotes: topVotes
        };
        return returns;
    //console.log(GetPlayerWithMostVotes().topName)
    } else if (tie == true) {
        const returns = {
            topName: null,
            topVotes: topVotes
        };

        return returns;
    } else {
        console.log("I dont really wanna fix this, but you will have to, womp womp.");
    };
};

module.exports = {
    addPlayer: addPlayer,
    PlayersJoined: PlayersJoined,
    startGame: startGame,
    getWord: getWord,
    vote: vote
};
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