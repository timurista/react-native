// using twilio client
// require here
const twilio = require("twilio");
const tws = require("../secrets/twilioSecrets");

module.exports = new twilio(tws.ACCOUNT_SID, tws.AUTH_TOKEN);
