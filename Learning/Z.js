const Zoo = [];

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askAnimal() {
    let value = 1;
    //response could be "add Monkey", "remove Elephant", "show"
    rl.question('Write Something To Do In The Zoo! > ', (response) => {
        const responceSplit = response.split(" ");
        if (response === "Quit") {
            console.log("Thank You For Helping The Zoo! Bye Bye And Have A Great Day!");
            rl.close();
        } else if (responceSplit[0] === "Add") {
            Zoo.push(responceSplit[1]);
            console.log(responceSplit[1] + " Has Been Added To The Zoo!");
            askAnimal();
        } else if (responceSplit[0] === "Remove") {
            value == value + 1;
            if (value === 1) {
                let index = Zoo.indexOf(responceSplit[1]);
                if (index > -1) {
                    Zoo.splice(index, 1);
                    console.log("A " + responceSplit[1] + " Has Been Removed From The Zoo!")
                    askAnimal();
                } else {
                    console.log("Theres Currently No Such Animal In The Zoo!");
                    askAnimal();
                };
            } else {
                index = Zoo.indexOf(responceSplit[1]);
                if (index > -1) {
                    Zoo.splice(index, 1);
                    console.log("A " + responceSplit[1] + " Has Been Removed From The Zoo!");
                    askAnimal()
                } else {;
                    console.log("Theres Currently No Such Animal In The Zoo!");
                    askAnimal();
                };
            };
        } else if (responceSplit[0] === "Show") {
            console.log("We Currently Have These Animals In The Zoo: " + Zoo);
            askAnimal();
        };
    });
};

askAnimal()