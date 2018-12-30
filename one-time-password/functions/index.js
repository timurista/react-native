const functions = require("firebase-functions");

exports.createUser = functions.https.onRequest(require("./src/createUser"));

// // // Create and Deploy Your First Cloud Functions
// // // https://firebase.google.com/docs/functions/write-firebase-functions
// //

// // on request google cloud function
// // setting name as exports
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   response.send("Hello from Firebase!");
// });

// exports.goodbye = functions.https.onRequest((request, response) => {
//   response.send("Goodbye from Firebase!");
// });
