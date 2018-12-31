const admin = require("firebase-admin");
const twilio = require("./twilio");

module.exports = (req, rese) => {
  if (!req.body.phone || !req.body.code) {
    return rese.status(422).send({ error: "Phone and code must be present" });
  }

  const phone = String(req.body.phone).replace(/[^\d]/g, "");
  const code = parseInt(req.body.code);

  // get currrent user look at current collection and compare code
};
