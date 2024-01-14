import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db, DOC_ID } from "./firebase-config";
import { getEmailLocalStorage } from "../utils/user";

export const signUp = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential;
};

export const signIn = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential;
};

export const getMuseumsInFirestore = async (path) => {
  const documentRef = doc(db, "ListMuseums", path);
  const docSnapshot = await getDoc(documentRef);

  if (docSnapshot.exists()) {
    const { datasMuseums } = docSnapshot.data();
    return datasMuseums;
  } else {
    const initialedocumentRef = doc(db, "ListMuseums", DOC_ID);
    const initialedocSnapshot = await getDoc(initialedocumentRef);

    const { datasMuseums } = initialedocSnapshot.data();
    return datasMuseums;
  }
};

export const initialiseMyListMuseumsInFirestore = async (userEmail) => {
  const userMuseums = await getMuseumsInFirestore(userEmail);

  const documentReference = doc(db, "ListMuseums", userEmail);
  const newDocument = {
    docId: userEmail,
    datasMuseums: userMuseums,
  };
  setDoc(documentReference, newDocument);
};

export const syncBothMuseums = (museumsUpdated) => {
  const userEmail = getEmailLocalStorage();
  const documentReference = doc(db, "ListMuseums", userEmail);
  const newDocument = {
    docId: userEmail,
    datasMuseums: museumsUpdated,
  };
  setDoc(documentReference, newDocument);
};
