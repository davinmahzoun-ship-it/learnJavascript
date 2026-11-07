const supabaseJs = require("@supabase/supabase-js");

const SBURL = "https://kjcloyiojqdzbvldphos.supabase.co";
const SBKEY = "sb_publishable_zSBzZ57OSjqLs0EWEHZisA_31I4CG9E";

const supabase = supabaseJs.createClient(SBURL, SBKEY);

const ImpostorChannel = supabase.channel("Impostors");

//  event: "introduction" -> Inform everyone,
//  event: "hint"
// Client A -> intro event -> Server
// Server -> server_message event -> to everyone (Client A & B)

ImpostorChannel.subscribe(async (status, error) => {
    if (status === "SUBSCRIBED") {
        console.log("Game Server Started 🎮!");
        ImpostorChannel.on('broadcast', { event: "intro" }, async (payload) => {
            await ImpostorChannel.send({
                type: "broadcast",
                event: "serverMessage",
                payload: { message: payload.payload.name + " has joined the game! 🎮" }
            });
        });
    } else {
        console.log(error);
        console.log("An Error Has Occurred! Please Read Above!");
    };
});