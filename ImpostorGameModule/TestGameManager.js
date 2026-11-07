const GameManager = require("./GameManager.js");

GameManager.addPlayer("Fob");
GameManager.addPlayer("Cob");
GameManager.addPlayer("Donst");

GameManager.startGame()

GameManager.vote("Fob", "Donst")
GameManager.vote("Fob", "Donst")

console.log(GameManager.PlayersJoined);