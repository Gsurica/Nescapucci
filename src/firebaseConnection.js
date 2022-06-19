import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

let firebaseConfig = {
  apiKey: "AIzaSyB2S42xBMC263Llgxz_UD4PXerZ4Z7kJLA",
  authDomain: "bia-project-c75f9.firebaseapp.com",
  projectId: "bia-project-c75f9",
  storageBucket: "bia-project-c75f9.appspot.com",
  messagingSenderId: "63580651432",
  appId: "1:63580651432:web:c3af33ec2d182c2a7f279d",
  measurementId: "G-YXTWYPHRWG"
};

firebase.initializeApp(firebaseConfig);

export default firebase
