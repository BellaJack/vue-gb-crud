import firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyCEtUh1iaDTNQBVySPSmbGZUKExtTORrQY",
  authDomain: "vue-gb-crud.firebaseapp.com",
  databaseURL: "https://vue-gb-crud.firebaseio.com",
  projectId: "vue-gb-crud",
  storageBucket: "vue-gb-crud.appspot.com",
  messagingSenderId: "178577413075"
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