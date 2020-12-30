// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBEJOO040guvWbxtaGpUse1CZqNGKtN8OU",
    authDomain: "clone-d7bd8.firebaseapp.com",
    projectId: "clone-d7bd8",
    storageBucket: "clone-d7bd8.appspot.com",
    messagingSenderId: "738560192738",
    appId: "1:738560192738:web:34cad9d38cab6a58edeebb",
    measurementId: "G-PSG17G93QH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };