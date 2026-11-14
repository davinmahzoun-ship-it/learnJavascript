# Events Flow

## Questions:

### 1. Who triggers the event and when?
### 2. Who listens for the event?
### 3. What should happen?

## Joined Event:
1. The players who join the game when they join.
2. The server.
3. The player who triggers the wvnt will be added to the lost of players.

## Start Event
1. The admin when he writes "START" in a readline
2. The server.
3. The server get to know that the games are begining.

## Choose Event
1. Admin who fires the Startevent which fires this event.
2. The server.
3. The server chooses a random word and a random person to be impostor.

## Choose Starter Event
1. The choose event after the word and impostor has been picked.
2. The clients.
3. The server finds a person to start by describing the word in one adjective.
Note: This will run itself untill everyone has gave one adjective.

## Chat Event (For later updates)
1. Lets write this after weve done the beta version of impostor.

## Vote Event
1. The choose starter event, after everyone has said an adjective.
2. Every client.
3. Every client will get the oppertunity to vote.

## End-Game Event
1. The vote event after it has counted that everyone has voted.
2. Every client.
3. The results of the game will appear to tell everyone if the impostor won or lost!