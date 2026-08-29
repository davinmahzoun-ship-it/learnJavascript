const zoo = ["monkey", "lion", "monkey", "giraffe", "monkey", "elephant", "zebra"];

// How many monkeys are there in the zoo?

let numMonkeys = 0;


for (let animal of zoo) {
    //console.log(animal); // This line runs once for every item in the array
    if (animal === "monkey") {
        numMonkeys = numMonkeys + 1;
        console.log("We found a monkey! 🙈")
    }
}

console.log(numMonkeys + " monkeys found in the zoo!")

// cd 02-arrays (cd stands for change directory)

const AnotherZoo = ["baboon", "parrot", "giraffe", "peacock", "shark", "pigeon", "parrot", "parrot", "pigeon"]

let birdsFound = 0
let parrotsFound = 0
let peacocksFound = 0
let pigeonsFound = 0

// || = or
for (let biggestAttraction of AnotherZoo) { 
    if (biggestAttraction === "parrot") {
        birdsFound = birdsFound + 1
        parrotsFound = parrotsFound + 1
    } else if (biggestAttraction === "peacock") {
        birdsFound = birdsFound + 1
        peacocksFound = peacocksFound + 1
    } else if (biggestAttraction === "pigeon") {
        birdsFound = birdsFound + 1
        pigeonsFound = pigeonsFound + 1
    }
    
}

console.log(parrotsFound + " parrots were found in the zoo! 🦜")
console.log(peacocksFound + " peacocks were found in the zoo! 🦚")
console.log(pigeonsFound + " pigeons were found in the zoo! 🕊️")
console.log("We have managed to find and count all birds in the zoo, the total amount of birds we saw were: " + birdsFound + " birds!")