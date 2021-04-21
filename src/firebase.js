import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAZPjPTeXGAFfQo5jVhdEO1DE4T7JOAlHg",
    authDomain: "clone-app-9f1d3.firebaseapp.com",
    projectId: "clone-app-9f1d3",
    storageBucket: "clone-app-9f1d3.appspot.com",
    messagingSenderId: "665243456772",
    appId: "1:665243456772:web:f2f794787aaa8b10fbac51",
    measurementId: "G-N4HQEPHTP0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth }; 