const admin = require("firebase-admin");

// req, res modeled like express API
const createUser = (req, res) => {
  // verify user provided a phone
  if (!req.body.phone) {
    return res.status(422).send({ error: "Bad Input - need phone number" });
  }

  // format phone number to remove dashes and parens
  // you don't know if you get a string or number
  const phone = String(req.body.phone).replace(/[^\d]/g, "");

  // Create a new user account using admin service
  admin
    .auth()
    .createUser({
      uid: phone
    })
    .then(user => res.send(user))
    .catch(err => res.status(422).send({ error: err }));
};

module.exports = createUser;
