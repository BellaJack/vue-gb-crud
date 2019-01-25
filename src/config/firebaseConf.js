import firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_URL.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_URL.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_URL.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID"
};

firebase.initializeApp(config)

// firebase utils
const database = firebase.database()
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
  timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')

export {
  db,
  auth,
  currentUser,
  usersCollection,
  database
}