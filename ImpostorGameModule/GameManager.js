const Players = [
    "Fob", "Cob", "Dob", "Bob"
];

const PlayersJoined = {};

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

for (let plr of Players) {
    addPlayer(plr)
};

function addPlayer(PlayerName) {
    const plrObj = {
        Imposter: null,
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

console.log(PlayersJoined);