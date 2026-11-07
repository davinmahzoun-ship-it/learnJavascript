const supabaseJs = require("@supabase/supabase-js");

const SBURL = "https://kjcloyiojqdzbvldphos.supabase.co";
const SBKEY = "sb_publishable_zSBzZ57OSjqLs0EWEHZisA_31I4CG9E";

const supabase = supabaseJs.createClient(SBURL, SBKEY);

const D_Channel = supabase.channel("davin");

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const messageArray = [

];

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

/*
[
  {name: "Davin", message: "Hello"},
  {name: "Person 1", message: message }
]
*/

// Sender > Message
function printAllMessages() {
  for (let Text of messageArray) {
    console.log(Text.name + " : " + Text.message);
  };
};


let name = "";

rl.question('Set Your Name Here > ', (Name) => {
  name = Name;
  D_Channel.subscribe(async (status) => {
    if (status === "SUBSCRIBED") {
      console.log("Subscribed to davin.");

      D_Channel.on('broadcast', { event: "message" }, (payload) => {
        messageArray.push(payload.payload);
        console.clear(); // "Davin 2 > I am" vanishes
        printAllMessages();
        rl.prompt(true); // "Davin 2 > I am" reappears

      });
      askMessage()
    };
  });
});

// Computer 2
// Davin 2 >

// When a message arrives
// Davin 1 > Hello?
// Davin 2 >

// Ask the user's name and save it in a variable