// using twilio client
// require here
const twilio = require("twilio");
import { ACCOUNT_SID, AUTH_TOKEN } from "../secrets/twilioSecrets.json";

module.exports = twilio(ACCOUNT_SID, AUTH_TOKEN);
