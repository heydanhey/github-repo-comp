
import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "frameworkwars.firebaseapp.com",
  databaseURL: "https://frameworkwars.firebaseio.com",
  projectId: "frameworkwars",
  storageBucket: "frameworkwars.appspot.com",
  messagingSenderId: "51745222359",
  appId: "1:51745222359:web:109a55a6ca7e8f9f1c4a92"
}

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
export const increment = firebase.firestore.FieldValue.increment(1)