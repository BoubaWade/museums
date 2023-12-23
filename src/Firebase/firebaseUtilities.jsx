import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { auth, db, DOC_ID } from "./firebase-config";

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

export const createDatasMuseumsInFirestore = (data) => {
  const documentReference = doc(db, "ListMuseums", DOC_ID);
  const newDocument = {
    docId: DOC_ID,
    datasMuseums: data,
  };
  setDoc(documentReference, newDocument);
};

export const getDatasMuseumsInFirestore = async () => {
  const documentRef = doc(db, "ListMuseums", DOC_ID);
  const docSnapshot = await getDoc(documentRef);

  if (docSnapshot.exists()) {
    const { datasMuseums } = docSnapshot.data();
    return datasMuseums;
  }
};

export const syncBothListMuseums = (listMuseumsUpdated) => {
  const documentReference = doc(db, "ListMuseums", DOC_ID);
  const newDocument = {
    docId: DOC_ID,
    datasMuseums: listMuseumsUpdated,
  };
  setDoc(documentReference, newDocument);
};
