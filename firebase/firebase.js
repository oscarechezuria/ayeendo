"use client";

import { initializeApp, getApps } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  setDoc,
  deleteDoc,
} from "firebase/firestore";

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  getBytes,
} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
export const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export async function userExists(uid) {
  const docRef = doc(db, "users", uid);
  const res = await getDoc(docRef);
  return res.exists();
}

//Obtener información de un usuario
export async function getUserInfo(uid) {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
}

//Registrar un nuevo usuario
export async function registerNewUser(user) {
  try {
    const collectionRef = collection(db, "users");
    const docRef = doc(collectionRef, user.uid);
    await setDoc(docRef, user);
  } catch (error) {
    console.log(error);
  }
}

//Actualizar un usuario
export async function updateUser(user) {
  try {
    const collectionRef = collection(db, "users");
    const docRef = doc(collectionRef, user.uid);
    await setDoc(docRef, user);
  } catch (error) {
    console.log(error);
  }
}

//Consultar si existe un username y te devuelve el id
export async function existsUserName(username) {
  console.log(username);
  const users = [];
  const docsRef = collection(db, "users"); //minuto 1:12:30
  const q = query(docsRef, where("username", "==", username));

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    users.push(doc.data());
  });

  return users.length > 0 ? users[0].uid : null;
}

export async function logout() {
  return signOut(auth);
}

//// Registrar servicios

export async function insertNewService(newService) {
  try {
    const docRef = collection(db, "services");
    const res = await addDoc(docRef, newService);
    return res;
  } catch (error) {
    console.log(error);
  }
}

//// Obtener todos los servicios

export async function getAllServices(uid) {
  const services = [];
  try {
    if (uid != undefined) {
      const collectionRef = collection(db, "services");
      const q = query(collectionRef, where("uid", "==", uid));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        const service = { ...doc.data() };
        service.docId = doc.id;
        services.push(service);
      });
      return services;
    }
  } catch (error) {
    console.log(error);
  }
}

// Obtener info de un servicio

export async function getInfoService(id) {
  const infoService = [];
  try {
    const collectionRef = collection(db, "services");
    const q = query(collectionRef, where("id", "==", id));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const service = { ...doc.data() };
      service.docId = doc.id;
      infoService.push(service);
    });

    return infoService;
  } catch (error) {
    console.log(error);
  }
}

// Actualizar un servicio

export async function updateService(docId, data) {
  try {
    const docRef = doc(db, "services", docId);
    const res = await setDoc(docRef, data);
    return res;
  } catch (error) {
    console.log(error);
  }
}

// eliminar un servicio

export async function deletedService(docId) {
  try {
    const docRef = doc(db, "services", docId);
    const res = await deleteDoc(docRef);
    return res;
  } catch (error) {
    console.log(error);
  }
}

// subir foto se perfil

export async function setUserProfilePhoto(uid, file) {
  try {
    const imageRef = ref(storage, `images/${uid}`);
    const resUpload = uploadBytes(imageRef, file);
    return resUpload;
  } catch (error) {
    console.log(error);
  }
}

//Obtener una foto

export async function getProfilePhotoUrl(profilePicture) {
  try {
    const imageRef = ref(storage, profilePicture);
    const url = await getDownloadURL(imageRef);
    return url;
  } catch (error) {
    console.log(error);
  }
}

//Registrar un nuevo formulario

export async function insertUserForm(newForm) {
  try {
    const collectionRef = collection(db, "form");
    const docRef = doc(collectionRef, newForm.uid);
    await setDoc(docRef, newForm);
  } catch (error) {
    console.log(error);
  }
}

//Obtener form de un user
export async function getUserForm(uid) {
  const docRef = doc(db, "form", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
}

//Insetar redes sociales
export async function insertUserSocialMedia(newData) {
  try {
    const collectionRef = collection(db, "socialMedia");
    const docRef = doc(collectionRef, newData.uid);
    await setDoc(docRef, newData);
  } catch (error) {
    console.log(error);
  }
}

//Obtener redes sociales
export async function getUserSocialMedia(uid) {
  const docRef = doc(db, "socialMedia", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
}
