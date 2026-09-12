const supabaseJs = require("@supabase/supabase-js");

const SBURL = "https://kjcloyiojqdzbvldphos.supabase.co";
const SBKEY = "sb_publishable_zSBzZ57OSjqLs0EWEHZisA_31I4CG9Ecom";

const supabase = supabaseJs.createClient(SBURL, SBKEY);

const D_Channel = supabase.channel("davin");

const message = "Hello This Is A Message!";

/*

{
    type: "broadcast",
    event: "message",
    payload: "Hello Supabase"
}
*/



D_Channel.subscribe(async (status) => {
  if (status === "SUBSCRIBED") {
    console.log("Subscribed.");
    await D_Channel.send({
      type: "broadcast",
      event: "message",
      payload: { text: message },
    });
  };
});