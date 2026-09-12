
let randomizer = Math.random();

console.log(randomizer);

if (randomizer <= 0.5) { // Between 0 and 0.5
    console.log("You shouldnt be gambling, your luck sucks! (50% chance 💸)");
} else if (randomizer > 0.5 && randomizer <= 0.75) {
    console.log("You arent very lucky today, but you can still hit the jackpot! (25% chance 🪙 )");
} else if (randomizer > 0.75 && randomizer <= 0.90) {
    console.log("You are getting pretty lucky! (15% chance 💵)")
} else if (randomizer > 0.90 && randomizer <= 0.99) {
    console.log("Wow! U are getting very lucky! (9% chance 💰)")
} else {
    console.log("JJJJJJJAAAAAAAAAACCCCCCCCKKKKKKKKKKKKKPPPPPPPPOOOOOOOOOOOOOOTTTTTTTTTTTTTTT (1% CHANCE 💎)")
}
//else if (randomizer < 50 && randomizer >=)

// Windows + .