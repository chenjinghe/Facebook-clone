import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyAjTY6YvQkHa_nlHjq7iGa2E0CzL9r7VOI",
    authDomain: "fb-clone-f19f1.firebaseapp.com",
    databaseURL: "https://fb-clone-f19f1.firebaseio.com",
    projectId: "fb-clone-f19f1",
    storageBucket: "fb-clone-f19f1.appspot.com",
    messagingSenderId: "363413523058",
    appId: "1:363413523058:web:21e5ce2753b87dbdc990eb",
    measurementId: "G-MH5MESNZQW"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export {auth, provider};
  export default db;