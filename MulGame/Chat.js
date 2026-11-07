const supabaseJs = require("@supabase/supabase-js");

const chalk = require('chalk').default;

const SBURL = "https://kjcloyiojqdzbvldphos.supabase.co";
const SBKEY = "sb_publishable_zSBzZ57OSjqLs0EWEHZisA_31I4CG9E";

const supabase = supabaseJs.createClient(SBURL, SBKEY);

const D_Channel = supabase.channel("davin");

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

<<<<<<< HEAD
=======
const code = "legoStrechband12345"


rl.question('Enter The Code To Enter The Conversation > ', (Input) => {
  if (Input === code) {
    rl.question('Set Your Name Here > ', (Name) => {
      name = Name;
      nameColor = GetRandomColor();
      D_Channel.subscribe(async (status) => {
        if (status === "SUBSCRIBED") {
          console.log("Subscribed to davin.");

          D_Channel.on('broadcast', { event: "message" }, (payload) => {
            messageArray.push(payload.payload);
            console.clear(); // "Davin 2 > I am" vanishes
            printAllMessages();
            rl.prompt(true); // "Davin 2 > I am" reappears
          });
          askMessage();
        };
      });
    });
  } else {
    console.log(chalk.bold.red("Nice try 👀! But The Code Was Incorrect"));
    rl.close();
  };
});

>>>>>>> 25a5bac0a6d39e45aab8d196b6aeb44ac4e8b48b
const messageArray = [

];

<<<<<<< HEAD
function askMessage() {
  rl.question(name + ' > ', async (message) => {
    await D_Channel.send({
      type: "broadcast",
      event: "message",
      payload: { name: name, message: message },
    });
    messageArray.push({ name: name, message: message });
    console.clear();
    printAllMessages();
    askMessage()
  });
}
=======
//const variable here (colour)

function GetRandomColor() {
  const colors = ["blue", "red", "yellow", "magenta", "green", "gray", "cyan"];

  const randomNumber = Math.random(); // 0.01, 0.99
  const randomIndex = Math.floor(randomNumber * colors.length);
  return colors[randomIndex];
};

// const colouredText = chalk.bold[textColor]("Hello Random Color")

function printMessage(Text) {
  const coloredName = chalk.bold[Text.nameColor](Text.name);
  console.log(coloredName + " : " + Text.message);
};

function askMessage() {
  rl.question(name + ' > ', async (message) => {
    const payload = { name: name, message: message, nameColor: nameColor };
    await D_Channel.send({
      type: "broadcast",
      event: "message",
      payload: payload,
    });
    messageArray.push(payload);
    console.clear();
    printAllMessages();
    askMessage();
  });
};
>>>>>>> 25a5bac0a6d39e45aab8d196b6aeb44ac4e8b48b

/*
[
  {name: "Davin", message: "Hello"},
  {name: "Person 1", message: message }
]
*/

// Sender > Message
function printAllMessages() {
  for (let Text of messageArray) {
<<<<<<< HEAD
    console.log(Text.name + " : " + Text.message);
=======
    printMessage(Text);
>>>>>>> 25a5bac0a6d39e45aab8d196b6aeb44ac4e8b48b
  };
};


<<<<<<< HEAD
let name = "";

rl.question('Set Your Name Here > ', (Name) => {
  name = Name;
=======

let name = "";
let nameColor = "";

rl.question('Set Your Name Here > ', (Name) => {
  name = Name;
  nameColor = GetRandomColor();
>>>>>>> 25a5bac0a6d39e45aab8d196b6aeb44ac4e8b48b
  D_Channel.subscribe(async (status) => {
    if (status === "SUBSCRIBED") {
      console.log("Subscribed to davin.");

      D_Channel.on('broadcast', { event: "message" }, (payload) => {
        messageArray.push(payload.payload);
        console.clear(); // "Davin 2 > I am" vanishes
        printAllMessages();
        rl.prompt(true); // "Davin 2 > I am" reappears

      });
<<<<<<< HEAD
      askMessage()
=======
      askMessage();
>>>>>>> 25a5bac0a6d39e45aab8d196b6aeb44ac4e8b48b
    };
  });
});

// Computer 2
// Davin 2 >

// When a message arrives
// Davin 1 > Hello?
// Davin 2 >

<<<<<<< HEAD
// Ask the user's name and save it in a variable
=======
// Ask the user's name and save it in a variable

//multiple channels based in code

// \U Hello there? -> HELLO THERE?
// :) :( -> 
>>>>>>> 25a5bac0a6d39e45aab8d196b6aeb44ac4e8b48b
