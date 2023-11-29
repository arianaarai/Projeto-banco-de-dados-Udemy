import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth' 

const firebaseConfig = {
    apiKey: "AIzaSyD-U7pLyUeRtUr7eo8irUMSXis2JSQug4w",
    authDomain: "curso-cf9fc.firebaseapp.com",
    projectId: "curso-cf9fc",
    storageBucket: "curso-cf9fc.appspot.com",
    messagingSenderId: "297155426332",
    appId: "1:297155426332:web:c52a8728477de3d1d4c7d9",
    measurementId: "G-ZLVLF0CN00"
  };


  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  export { db, auth };