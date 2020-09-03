import firebase from 'firebase';
//require('firebase/auth')


var firebaseConfig = {
  apiKey: "AIzaSyAlokXejb03Eqn5XBsG7JF9eOTPkz38iSY",
  authDomain: "pro-organizer-app-1e969.firebaseapp.com",
  databaseURL: "https://pro-organizer-app-1e969.firebaseio.com",
  projectId: "pro-organizer-app-1e969",
  storageBucket: "pro-organizer-app-1e969.appspot.com",
  messagingSenderId: "349037720140",
  appId: "1:349037720140:web:8bcb2cde4ef983e7487ae9",
  measurementId: "G-8SYFBTCE55"
};
// Initialize Firebase
export const  firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();