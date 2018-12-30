import firebase from 'firebase';

let app = '';

const config = {
  apiKey: "AIzaSyCEtUh1iaDTNQBVySPSmbGZUKExtTORrQY",
  authDomain: "vue-gb-crud.firebaseapp.com",
  databaseURL: "https://vue-gb-crud.firebaseio.com",
  projectId: "vue-gb-crud",
  storageBucket: "vue-gb-crud.appspot.com",
  messagingSenderId: "178577413075"
};

app = firebase.initializeApp(config)

//export const db = app.database();
export const userAuth = app.auth();