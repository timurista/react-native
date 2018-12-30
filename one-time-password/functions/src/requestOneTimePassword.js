const admin = require("firebase-admin");

module.exports = (req, rese) => {
  if (!req.body.phone) {
    return rese.status(422).send({ error: "You must provide a phone number" });
  }

  const phone = String(req.body.phone).replace(/[^\d]/g, "");

  admin
    .auth()
    .getUser(phone)
    .then(userRecord => {
      rese.send({ message: "sent text to user" });
    });
};
