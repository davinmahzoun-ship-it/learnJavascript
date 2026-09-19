const supabaseJs = require("@supabase/supabase-js");

const SBURL = "https://kjcloyiojqdzbvldphos.supabase.co";
const SBKEY = "sb_publishable_zSBzZ57OSjqLs0EWEHZisA_31I4CG9E";

const supabase = supabaseJs.createClient(SBURL, SBKEY);

const D_Channel = supabase.channel("davin");

const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

/*
[
  {
    "name": "Pepperoni",
    "ingredients": [
      "Dough",
  },
  {
    "name": "Margharita",
    "ingredients": [
      "Dough",
    ]
  },
]
  */
const ME = [
  {"Sender": "Person1", "Message": "Hello Andrew!"},
  {"Sender": "Person2","Message": "Hello Davin!"},
  {"Sender": "Person1", "Message": "Hello Andrew!"},
  {"Sender": "Person2","Message": "Hello Davin!"},
  {"Sender": "Person1", "Message": "Hello Andrew!"}
]

/*
    for (let pizza of allPizzas) {
        const AIS = isSame(userIngredients, pizza.ingredients);
        if (AIS === true) {
            return pizza.name;
        };
    };
*/
// Sender > Message
function PrintM() {
  for (let Text of ME) {
    console.log(Text.Sender + " > " + Text.Message)
  };
};

PrintM()
 
/*  D_Channel.subscribe(async (status) => {
   if (status === "SUBSCRIBED") {
     console.log("Subscribed to davin.");

     D_Channel.on('broadcast', {event: "message"}, (payload) => {
      console.clear();
      console.log()
     })

     rl.question('Person 1 > ', async (message) => {
       await D_Channel.send({
         type: "broadcast",
         event: "message",
         payload: { name: "Person 1", text: message },
       });
    });
   };
}); */