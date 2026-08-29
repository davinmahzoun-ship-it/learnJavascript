// split will show whats after and before whatever you put between the two ""

const userInput = "add monkey";
const splitString = userInput.split(" ");
console.log(splitString[0]); // add
console.log(splitString[1]); // monkey

const animals = ["Monkey", "Parrot", "Zebra", "Monkey"];

//1st argument -> Start deleting from here
//2nd argument -> Delete these many items
animals.splice(1, 2);
console.log(animals);