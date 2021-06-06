import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBtxhFo6U158Mr5SLHSILIZaLQiv4LTtE0",
  authDomain: "discord-clone-a8778.firebaseapp.com",
  projectId: "discord-clone-a8778",
  storageBucket: "discord-clone-a8778.appspot.com",
  messagingSenderId: "43399741815",
  appId: "1:43399741815:web:f15c4ed4d37ecf57aaa172",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
