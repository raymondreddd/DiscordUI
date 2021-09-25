import firebase from 'firebase';
// import { Provider } from 'react-redux';

const firebaseConfig = {
    apiKey: "AIzaSyABWtUKFYzEMuBeNdx5TvanqGLa9Ok21Mc",
    authDomain: "distort-9fff3.firebaseapp.com",
    projectId: "distort-9fff3",
    storageBucket: "distort-9fff3.appspot.com",
    messagingSenderId: "810129638304",
    appId: "1:810129638304:web:339689d2add86c1276dac5",
    measurementId: "G-1SZTZVRDLX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  //as explicit exports
  export { auth, provider}

  export default db;