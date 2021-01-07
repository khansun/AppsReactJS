import firebase from 'firebase/app';
import 'firebase/auth';
const app = firebase.initializeApp({
    apiKey: "AIzaSyCStRDcXGcJ_lbqy0QS0Cq6RXgVt60mT78",
    authDomain: "private-profile-development.firebaseapp.com",
    projectId: "private-profile-development",
    storageBucket: "private-profile-development.appspot.com",
    messagingSenderId: "524628015168",
    appId: "1:524628015168:web:6d1f8d487c91c8958707a5"
  });
  
  const auth = app.auth();
  export {auth};
