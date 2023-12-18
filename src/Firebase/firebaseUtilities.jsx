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

export const createUserDataBasketInFirestore = (datas, userName) => {
  const documentReference = doc(db, "Users", userName);

  const newDocument = {
    userName: userName,
    // MuseumsCardsList: museumsFakeDatas,
    BasketCardsList: datas,
  };
  setDoc(documentReference, newDocument);

  // const emptyDocument = {
  //   userName: userName,
  //   BasketCardsList: [],
  // };
  // if (datas.length !== 0) {
  //   setDoc(document, newDocument);
  // } else {
  //   setDoc(document, emptyDocument);
  // }
};

export const getUserDataBasketInFirestore = async (userName) => {
  const documentRef = doc(db, "Users", userName);

  const docSnapshot = await getDoc(documentRef);
  // console.log("docSnapshot", docSnapshot);
  if (docSnapshot.exists()) {
    const dataUserBasket = docSnapshot.data();
    // console.log(dataUserBasket);
    return dataUserBasket;
  }
};
