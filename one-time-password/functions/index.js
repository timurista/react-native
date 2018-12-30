const admin = require("firebase-admin");
const functions = require("firebase-functions");
const createUser = require("./src/createUser");
const serviceAccount = require("./secrets/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://one-time-password-e5e1d.firebaseio.com"
});

// functions below
exports.createUser = functions.https.onRequest(createUser);
