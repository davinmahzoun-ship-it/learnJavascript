const fs = require("fs");
const pizzaString = fs.readFileSync("pizza.json", "utf-8");
const pizzaJson = JSON.parse(pizzaString);

// const details = "name - Andrew, job - teacher";
// const detailsJson = {
//     name: "Andrew",
//     job: "teacher"
// }

pizzaJson.push({
    name: "Mine!",
    ingredients: ["1 Onion", "1 Tuna"]
})

console.log(pizzaJson[1].name);
console.log("Press any numbers from 0 to 5 to pick an existing pizza");
console.table(pizzaJson);

fs.writeFileSync("pizza.json", JSON.stringify(pizzaJson, null, 2));