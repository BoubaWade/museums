// import {
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
// } from "firebase/auth";
// import { auth } from "../firebaseConfig.jsx";

import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { museumsFakeDatas } from "../config/fakeDatas";
import { useSelector } from "react-redux";

// export const signUp = async (email, password) => {
//   const userCredential = await createUserWithEmailAndPassword(
//     auth,
//     email,
//     password
//   );
//   const user = userCredential.user;
//   console.log(user);
// };

export const createDatasMuseumsInFirestore = (docId) => {
  const documentReference = doc(db, "ListMuseums", docId);

  const newDocument = {
    docId: docId,
    // MuseumsCardsList: museumsFakeDatas,
    datasMuseums: museumsFakeDatas,
  };
  setDoc(documentReference, newDocument);
};

export const getDatasMuseumsInFirestore = async (docId) => {
  const documentRef = doc(db, "ListMuseums", docId);
  const docSnapshot = await getDoc(documentRef);

  if (docSnapshot.exists()) {
    const { datasMuseums } = docSnapshot.data();
    return datasMuseums;
  }
};
