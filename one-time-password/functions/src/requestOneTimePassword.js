const admin = require("firebase-admin");
const twilio = require("./twilio");

module.exports = (req, rese) => {
  if (!req.body.phone) {
    return rese.status(422).send({ error: "You must provide a phone number" });
  }

  const phone = String(req.body.phone).replace(/[^\d]/g, "");

  admin
    .auth()
    .getUser(phone)
    .then(userRecord => {
      // 4 digits between 0, 9999
      const code = Math.floor(Math.random() * 8999 + 1000);

      twilio.messages.create(
        {
          body: "Your code is " + code,
          to: phone,
          from: "+13238949531"
        },
        err => {
          if (err) {
            return res.status(500).send({ error: err });
          }

          // user model has finite set of properties
          admin
            .database()
            .ref("users/" + phone)
            .update({ code: code, codeValid: true }, () => {
              res.send({ success: true });
            });
        }
      );
    })
    .catch(err => res.status(422).send({ error: err }));
};
