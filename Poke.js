const pokemon = "pikachu";
// Ctrl + Z for rewind

// Interview: why did you make the semi colons optional in JS?
// JS Creator: So people can argue whether or not to have them!

async function getPokemon(name) {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/andrew");

        if (!response.ok) {
            throw new Error("Pokemon not found");
        }

        const data = await response.json(); //.json() pulls the body from the response 
        console.log("Pikachu Has The Following Abilities:");
        for (let currentAbility of data.abilities) {
            console.log(currentAbility.ability.name);
        };
    } catch (e) {
        console.log("I am in the catch block!!!");
        console.log(e);
    };
};

// throw e

getPokemon(pokemon);


function add(a, b) {
    return
    (a + b);
}