import firebase from 'firebase';

import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyDxZSBy7SVM8e4Ypir_Ok6v-MDnpP3C5dQ",
    authDomain: "likor-web-app.firebaseapp.com",
    databaseURL: "https://likor-web-app.firebaseio.com",
    projectId: "likor-web-app",
    storageBucket: "likor-web-app.appspot.com",
    messagingSenderId: "951675922857",
    appId: "1:951675922857:web:dc6e4ea0351082d6cafcb8",
    measurementId: "G-HJ191V5B2P"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;