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

const messageArray = [

];

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

/*
[
  {name: "Davin", message: "Hello"},
  {name: "Person 1", message: message }
]
*/

// Sender > Message
function printAllMessages() {
  for (let Text of messageArray) {
    printMessage(Text);
  };
};



let name = "";
let nameColor = "";

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

// Computer 2
// Davin 2 >

// When a message arrives
// Davin 1 > Hello?
// Davin 2 >

// Ask the user's name and save it in a variable

//multiple channels based in code

// \U Hello there? -> HELLO THERE?
// :) :( -> 