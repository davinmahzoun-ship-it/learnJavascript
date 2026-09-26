const supabaseJs = require("@supabase/supabase-js");

const SBURL = "https://kjcloyiojqdzbvldphos.supabase.co";
const SBKEY = "sb_publishable_zSBzZ57OSjqLs0EWEHZisA_31I4CG9E";

const supabase = supabaseJs.createClient(SBURL, SBKEY);

const D_Channel = supabase.channel("davin");

// Listening for broadcast messages where the event = "message"
D_Channel.on("broadcast", { event: "message" }, async (payload) => {
  console.log("Received:", payload.payload);
  await supabase.removeAllChannels(); // Disconnect, similar to rl.close()
  process.exit(0);
});

D_Channel.subscribe((status, error) => {
    console.log(error);
    if (status === "SUBSCRIBED") {
        console.log("Listening on channel 'messages'...");
    }
});