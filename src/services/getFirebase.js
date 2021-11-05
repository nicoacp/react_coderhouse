import firebase from "firebase/app"

import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAvWx74Y4cQOg6zMCu0OJuhewRGj8Fqkh8",
  authDomain: "myapp-50a49.firebaseapp.com",
  projectId: "myapp-50a49",
  storageBucket: "myapp-50a49.appspot.com",
  messagingSenderId: "758277761953",
  appId: "1:758277761953:web:007c3ca3ed660888e0b9e0"

};
 const app = firebase.initializeApp(firebaseConfig)
 // export function getFirebase(){// return app// }
 
 export function getFirestore(){
     return firebase.firestore(app)
    }
