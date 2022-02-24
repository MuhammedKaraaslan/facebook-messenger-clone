import firebase from 'firebase/compat/app'// Use npm install firebase to install firebase
import 'firebase/compat/firestore'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD646vb23nRhpYMulK8Xa_yYDNAPVIou7o",
    authDomain: "facebook-messenger-clone-15a20.firebaseapp.com",
    projectId: "facebook-messenger-clone-15a20",
    storageBucket: "facebook-messenger-clone-15a20.appspot.com",
    messagingSenderId: "995316669446",
    appId: "1:995316669446:web:0f27d5a031f4e52d7b3787",
    measurementId: "G-Q1FWESQJV4"
})

const dataBase = firebaseApp.firestore();
 
export default dataBase; 
