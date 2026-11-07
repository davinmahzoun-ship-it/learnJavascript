function PickRandomItem(number, array) {
    const randomPicker = Math.floor(Math.random() * number);
    return array[randomPicker];
};

const Words = [
    "Pizza", "Beach", "Guitar", "Elephant", "Volcano",
    "Library", "Rocket", "Snowman", "Pirate", "Rainbow",
    "Javascript", "Friends"
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
        Votes: 0
    };
    PlayersJoined[PlayerName] = plrObj; // Adds Name as a key in the PlayerJoined object
    if (adminJoined === false) {
        adminJoined = true;
        plrObj.Admin = true;
    } else if (adminJoined === true) {
        plrObj.Admin = false;
    };
};

function startGame() {
    const playerNames = GetPlayerNames();
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
    return word
}

module.exports = {
    addPlayer: addPlayer,
    PlayersJoined: PlayersJoined,
    startGame: startGame,
    getWord: getWord
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