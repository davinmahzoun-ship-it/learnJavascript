let value = 10;
let subtraction = 5;

value = value - subtraction;
console.log(value);

if (value < 10) {
    console.log("Value is less than 10");
}

const HelloMessage = "Hello Andrew! How are you doing today?";
const word = HelloMessage.slice(0, 5);
const name = HelloMessage.slice(6, 12);
console.log(word, name);

const CoolSymbol = "ꦚ"
const repeatSymbol = CoolSymbol.repeat(5);
console.log(repeatSymbol);

let bananas = "         Banana!🍌                "
let trimmedBananas = bananas.trim();
console.log(bananas);
console.log(trimmedBananas);

    
//anotherName = "Changed"; //Won't works
// Ctrl + S to save the file
// node <file-name> to run the file