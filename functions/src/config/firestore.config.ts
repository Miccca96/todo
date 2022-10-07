import * as admin from "firebase-admin";

const serviceAccount = require("C:/Users/mvasovic/serverless/functions/src/serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

export default db;