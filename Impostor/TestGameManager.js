const GameManager = require("./GameManager.js");

GameManager.addPlayer("Fob");
GameManager.addPlayer("Donst");

GameManager.startGame("Donst");

GameManager.vote("Fob", "Fob");
GameManager.vote("Donst", "Fob");