# Notes

## Array/Object
1. Only arrays have the concept of orders, to get the first variable or whatever it inside of an object, use an if function, no problem Davin!

## How To Make Text Easier To Read
1. Dont write the same things twice or more, instead you can write the thing that you wanted to write once, and then change the value or whatever it was you wanted to change in its own small bit of text, example below:

```js
function addPlayer(PlayerName) {
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

## Shortcuts
1. Alt + Up/Down: Move selection
2. ctrl (x): Copy/Paste C = Copy P = Paste

## Class Notes
1. Draw diagrams when things get complicated and write notes otherwise.