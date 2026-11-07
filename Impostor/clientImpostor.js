const supabaseJs = require("@supabase/supabase-js");

const SBURL = "https://kjcloyiojqdzbvldphos.supabase.co";
const SBKEY = "sb_publishable_zSBzZ57OSjqLs0EWEHZisA_31I4CG9E";

const supabase = supabaseJs.createClient(SBURL, SBKEY);

const ImpostorChannel = supabase.channel("Impostors");
// client: Send our name on the channel (Davin)
// server: Informs everyone that "Davin joined"

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function print(message) {
    readline.clearLine(process.stdout, 0);   // erase the current prompt line
    readline.cursorTo(process.stdout, 0);    // move cursor to the start
    console.log(message);                    // print the message
    rl.prompt(true);                         // redraw prompt + what they'd typed
}

ImpostorChannel.subscribe(async (status, error) => {
    if (status === "SUBSCRIBED") {
        console.log("You have joined the game!");
        ImpostorChannel.on('broadcast', { event: "serverMessage" }, async (payload) => {
            print(payload.payload.message)
        });
        rl.question('Please enter a name here > ', async (name) => {
            await ImpostorChannel.send({
                type: "broadcast",
                event: "intro",
                payload: { name: name }
            });
        });

    } else {
        console.log(error);
        console.log("An Error Has Occurred! Please Read Above!");
    };
});
