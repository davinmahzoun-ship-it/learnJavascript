const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What Word Would You Like To Look Up? > ', async (Word) => {
    const API_Data = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + Word);
    
    if (!API_Data.ok) {
        console.log("An Error Has Occurred Or A Falsy Word! Check The Spelling!")
    };
});