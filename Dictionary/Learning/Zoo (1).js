const Zoo = [];

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// The question function presents the string to the user and then waits
// After the user presses Enter, it invokes the callback function

function askAnimal() {
    rl.question('Write In An Animal To Be Added To The Zoo! > ', (Animal) => {
        if (Animal === "Quit") {
            console.log("Thank You For Helping The Zoo! Bye Bye And Have A Great Day!");
            rl.close();
        } else {
            Zoo.push(Animal)
            console.log(Animal + " Has Been Added To The Zoo!")
            console.log(Zoo)
            askAnimal()
        };
    });
};

askAnimal()