import * as firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrfaw6FO_LFiQn3qTavKEeIAYwuh0iaEs",
  authDomain: "hrm-nsq.firebaseapp.com",
  databaseURL: "https://hrm-nsq-default-rtdb.firebaseio.com",
  projectId: "hrm-nsq",
  storageBucket: "hrm-nsq.appspot.com",
  messagingSenderId: "434056138058",
  appId: "1:434056138058:web:19ca3a1d55ee1ef0f905b3",
  measurementId: "G-QDZTGBM0E1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;