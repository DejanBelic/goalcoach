import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDtlCF3-MH11u80WcGYD8x8SdfD2TNnoQU",
  authDomain: "goalcoach-780aa.firebaseapp.com",
  databaseURL: "https://goalcoach-780aa.firebaseio.com",
  projectId: "goalcoach-780aa",
  storageBucket: "goalcoach-780aa.appspot.com",
  messagingSenderId: "1093899186083"
};

export const firebaseApp = firebase.initializeApp(config);