const GameManager = require("./GameManager.js");

GameManager.addPlayer("Fob");
GameManager.addPlayer("Cob");
GameManager.addPlayer("Donst");

GameManager.startGame()

console.log(GameManager.PlayersJoined);