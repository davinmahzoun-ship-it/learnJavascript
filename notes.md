# Notes

## Array/Object
1. Only arrays have the concept of orders, to get the first variable or whatever it inside of an object, use an if function, no problem Davin!

## How 2 Test
1. 
you can create a js file that might have the same name of the original project, except put "Test" or something among those lines before the name.

2. Inside the main file of the main project, write at the end: `module.exports = {};` write down the "displayname" of the function with a colon and then after the real name of the function. Like this: (Dont mid if some of the displaynames and the functions are green :) )

```js

module.exports = {
    addPlayer: addPlayer,
    PlayersJoined: PlayersJoined,
    startGame: startGame,
    getWord: getWord,
    vote: vote,
    endGame: endGame
};

```

3. On the test file you made write down: 
`const <variable name> = require("./<name of the project file>");`

4. To test your functions, simply do: `<name of the variable>.<name of the function>();`

5. (Tip): Change the real code and modify it to support your testing!

## How To Make Text Easier To Read
1. Dont write the same things twice or more, instead you can write the thing that you wanted to write once, and then change the value or whatever it was you wanted to change in its own small bit of text, example below:

```js
function addPlayer(PlayerName) {,
    const plrObj = {
        Imposter: null,
        Admin: null,
        Votes: 0
    }
    PlayersJoined[PlayerName] = plrObj; // Adds Name as a key in the PlayerJoined object
    if (adminJoined === false) {
        adminJoined = true;
        plrObj.Admin = true
    } else if (adminJoined === true) {
        plrObj.Admin = false
    }
};
```

## Git
1. First-time download to reset the whole folder:
`git clone <url>`

2. Every change (step-wise upload)
Under side bar source control tab, add, commit & sync the change

3. To download each step
`git pull`

## Shortcuts
1. Alt + Up/Down: Move selection
2. Ctrl (x): Copy/Paste C = Copy P = Paste
3. Ctrl + A : Select all
4. Home: Takes You To The Start Of The Line
5. End: Takes You To The End Of The Line
6. Pg up: Takes You Farther Up Between Lines
7. Pg dn: Takes You Farther Down Between Lines

## Class Notes
1. Draw diagrams when things get complicated and write notes otherwise.