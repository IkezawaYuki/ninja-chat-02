import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyBAujVTVx_shHW7Gxb6jP8dsZLhI4kG6_w",
  authDomain: "ninja-chat-d2ce2.firebaseapp.com",
  databaseURL: "https://ninja-chat-d2ce2.firebaseio.com",
  projectId: "ninja-chat-d2ce2",
  storageBucket: "",
  messagingSenderId: "829272420876",
  appId: "1:829272420876:web:eb2a27f1ac9e7da0"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore()