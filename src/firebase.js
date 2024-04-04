import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAEXLUV4crji-i6HDyts4ok11sJbAN_3Rc",
  authDomain: "netflix-clone-49084.firebaseapp.com",
  projectId: "netflix-clone-49084",
  storageBucket: "netflix-clone-49084.appspot.com",
  messagingSenderId: "407673721487",
  appId: "1:407673721487:web:7827fbc53d25a42b9056fa",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
