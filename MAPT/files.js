const fs = require("fs");
const pizzaString = fs.readFileSync("pizza.json", "utf-8");
const pizzaJson = JSON.parse(pizzaString);

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// const details = "name - Andrew, job - teacher";
// const detailsJson = {
    //     name: "Andrew",
    //     job: "teacher"
    // }
    
    // Adding a pizza:
    // pizzaJson.push({
//     name: "Mine!",
//     ingredients: ["1 Onion", "1 Tuna"]
// })

console.log(pizzaJson[1].name);
console.log("Press any numbers from 0 to 5 to pick an existing pizza");

const pizzaName = [];

for (let pizza of pizzaJson) {
    pizzaName.push({
        name: pizza.name
    });
};

console.table(pizzaName)

// Alt + Shift + Down (Duplicate current line)
// Alt + Down (Move line)

rl.question('Type In The Index Number Of The Pizza You Want The Ingredients Of! > ', (number) => {
    showPizza(pizzaJson[number]);
    rl.close()
});

function showPizza(pizza) {
    console.log("------------------------------------------------------------------------");
    console.log("Ingredients Needed For " + pizza.name + ": " + pizza.ingredients);
    console.log("------------------------------------------------------------------------");
};


fs.writeFileSync("pizza.json", JSON.stringify(pizzaJson, null, 2));