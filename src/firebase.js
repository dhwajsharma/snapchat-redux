import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCrUCtOrR88dXD4zqgxSWhe_J82J_AtMoU",
    authDomain: "snapchat-redux.firebaseapp.com",
    projectId: "snapchat-redux",
    storageBucket: "snapchat-redux.appspot.com",
    messagingSenderId: "25087070368",
    appId: "1:25087070368:web:7f4aed89853f5374fe39c5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };