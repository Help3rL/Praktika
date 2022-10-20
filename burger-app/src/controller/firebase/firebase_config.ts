import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyA_xgfukFdsz0n7Oi7Y5t6NFtZwf21pGIU",
  authDomain: "testproject-tsrecburgerbuilder.firebaseapp.com",
  databaseURL: "https://testproject-tsrecburgerbuilder-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "testproject-tsrecburgerbuilder",
  storageBucket: "testproject-tsrecburgerbuilder.appspot.com",
  messagingSenderId: "772929239656",
  appId: "1:772929239656:web:4b56bbab4725d0e0c759dd",
  measurementId: "G-SZQ8HK01E0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err:any) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email:string, password:string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err:any) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name:string, email:string, password:string, address:string) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid, 
      name,
      authProvider: "local",
      email,
      address,
      orders: []
    });
  } catch (err:any) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email:string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err:any) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};



export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};
