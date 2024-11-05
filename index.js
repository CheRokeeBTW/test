let test = [4,4]
var ComfyJS = require("comfy.js");
require('dotenv').config({path: __dirname + '/.env'})
ComfyJS.onCommand = ( user, command, message, flags, extra ) => {
  if( command === "test" ) {
    ComfyJS.Say( "replying to !test" );
}
}
ComfyJS.Init( process.env.TWITCHUSER, process.env.OAUTH );