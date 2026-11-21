# Events Flow

## Questions:

### 1. Who triggers the event and when?
### 2. Who listens for the event?
### 3. What should happen?

## Notice Event:
1. The server (in response to other events).
2. All clients.
3. Something gets logged to all clients (The server gives us a value to log).

## Joined Event:
1. The players who join the game when they join.
2. The server.
3. The player who triggers the event will be added to the list of players, triggers the notice-event.

## Start Event
1. The admin when he writes "/startGame" in a readline.
2. Server.
3. The server gets to know that the game is beginning, fires choose-event, fires notice-event (GAME STARTED!), chooses word and impostor, fire reveal-word event, and chatEnabled = false.

##  Reveal-word Event
1. Start-event (server).
2. The clients.
3. The server finds a person to start by describing the word in one adjective, fires notice-event (informs about the word, and impostor if its you.).
Note: This will run itself untill everyone has gave one adjective and will then enable chat-event and vote-event

## Chat Event
1. Clients.
2. Server.
3. Server checks if chatEnabled = true/false:
    - True-Scenario: The server will trigger notice-event tell players about what the client said.
    - False-Scenario: The server will trigger the notice event and tell the client chat is disabled.

## Vote Event
1. Reveal-word-event (Server) while the chat-event is also running.
2. Every client.
3. Every client will get the oppertunity to vote, and when a client does vote the notice-event will log it.
Note: Runs the end-game-event after everyone has voted.

## End-Game Event
1. The vote-event (server)
2. Every client.
3. The results of the game will appear with the help of notice-event!

## Next steps
- Polish up the last 2 events.
- Run the game in your head using these steps
- Type out the notices
- Type out what the players type