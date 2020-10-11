import firebase from 'firebase/app'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyBHO7udqFnvRec7tL18eNa7V6Sryk0P2AE",
    authDomain: "sit31392d1.firebaseapp.com",
    databaseURL: "https://sit31392d1.firebaseio.com",
    projectId: "sit31392d1",
    storageBucket: "sit31392d1.appspot.com",
    messagingSenderId: "574532025482",
    appId: "1:574532025482:web:7499cca11f210638760173",
    measurementId: "G-JGYR28YH7J"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  const storage=firebase.storage();

  export{
      storage, firebase as default
  }