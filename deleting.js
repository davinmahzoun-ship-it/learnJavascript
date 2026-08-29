const pizzaAllDetails = [{
    "name": "Kebab",
    "ingredients": [
        "1 Tomato sauce",
        "1 Cheese",
        "Kebab"
    ]
}, {
    "name": "Wurst",
    "ingredients": [
        "1 Tomato sauce",
        "1 Cheese",
        "Sausage"
    ]
}]

const pizzaOnlyName = [];

for (let pizza of pizzaAllDetails) {
    pizzaOnlyName.push({
        name: pizza.name
    })
}

console.table(pizzaOnlyName);