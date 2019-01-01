const admin = require("firebase-admin");

module.exports = (req, rese) => {
  try {
    if (!req.body.phone || !req.body.code) {
      return rese.status(422).send({ error: "Phone and code must be present" });
    }

    const phone = String(req.body.phone).replace(/[^\d]/g, "");
    const code = parseInt(req.body.code);

    admin
      .auth()
      .getUser(phone)
      .then(() => {
        const ref = admin.database.ref("users/" + phone);
        ref.on("value", snapshot => {
          ref.off();
          const user = snapshot.val();

          if (user.code !== code || !user.validCode) {
            return res.status(422).send({ error: "code not valid" });
          }

          ref.update({ codeValid: false });
          admin
            .auth()
            .createCustomToken(phone)
            .then(token => res.send({ token }));
        });
      })
      .catch(err => res.status(422).send({ error: err }));
  } catch (err) {
    res.status(500).send(err);
  }
  // get currrent user look at current collection and compare code
};
