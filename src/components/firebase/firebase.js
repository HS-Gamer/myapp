import app from "firebase/app";
import "firebase/auth";
import 'firebase/firestore'
import 'firebase/database'
const config = {
    apiKey: "AIzaSyC0BJoWoVdQgnrNh-pvIWq__PYI59kQdc4",
    authDomain: "projet-hamza-da21d.firebaseapp.com",
    projectId: "projet-hamza-da21d",
    storageBucket: "projet-hamza-da21d.appspot.com",
    messagingSenderId: "972558589027",
    appId: "1:972558589027:web:961864a2819bc0c1bbac56",
    measurementId: "G-KCWQT6X8H6",
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.firestore();
    }

    // inscription
    signupUser = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    // Connexion
    loginUser = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    // Déconnexion
    signoutUser = () => this.auth.signOut();

    // Récupérer le mot de passe
    passwordReset = (email) => this.auth.sendPasswordResetEmail(email);

    // firestore
    user = (uid) => this.db.doc(`users/${uid}`);



    ReadBd = ref  =>this.db.doc(`Bookings/${ref}`);


  GetBd =ref => this.bd.ref(`Bookings/${ref}`);
  WriteBd =ref => this.db.collection("Bookings").doc(ref);
  GetInfo = username => this.db.collection("Bookings").doc(username).get();




}

export default Firebase;
