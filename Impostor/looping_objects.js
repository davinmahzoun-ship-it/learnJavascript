const PlayersJoined = {
    Bob: {
        Imposter: false,
        Admin: null,
        Votes: 0
    },
    Cob: {
        Imposter: true,
        Admin: null,
        Votes: 0
    },
    Dob: {
        Imposter: false,
        Admin: null,
        Votes: 0
    }
};

function GetPlayerNames() {
    return Object.keys(PlayersJoined);
};

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

getImpostorForEndGame();

console.log(getImpostorForEndGame());