import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAnszzPVMj5AYFT1bRwpxzwUDJN8XBnqUo",
    authDomain: "my-personal-twitter.firebaseapp.com",
    databaseURL: "https://my-personal-twitter.firebaseio.com",
    projectId: "my-personal-twitter",
    storageBucket: "my-personal-twitter.appspot.com",
    messagingSenderId: "3794923693",
    appId: "1:3794923693:web:325e538ba5053e11149624",
    measurementId: "G-2FTPTH3G09"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebase.firestore();

export default db;