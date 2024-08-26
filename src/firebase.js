// import React, { useCallback } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// import { getStorage } from 'firebase/storage';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import config from './components/config';
import { addDoc, collection, getDocs, doc, deleteDoc, setDoc, getDoc, updateDoc } from 'firebase/firestore'

// Initialize Firebase
const app = initializeApp(config);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Storage
const storage = getStorage(app);

//adding docs/agent Registration data to collection
const handleRegister = (data) => {
  const dataFromLocalStorage = localStorage.getItem("userRentEasy");
  const userData = JSON.parse(dataFromLocalStorage)
  const userId = userData.sub;

  const userDocRef = doc(db, 'agentUsers', userId);
  setDoc(userDocRef, data)
    .then(() => {
      alert("Registration Complete")
    })
}

//retrieve agent registration data from collection
const fetchAgentData = async () => {
  const dataFromLocalStorage = localStorage.getItem("userRentEasy");
  const userData = JSON.parse(dataFromLocalStorage)
  const userId = userData.sub;

  const userDocRef = doc(db, 'agentUsers', userId);

  const userDoc = await getDoc(userDocRef);
  if (userDoc.exists()) {
    return userDoc.data();
  }

};

//update agent's profile Data on the collection on firebase
const updateAgentData = async (updatedData) => {
  const dataFromLocalStorage = localStorage.getItem("userRentEasy");
  const userData = JSON.parse(dataFromLocalStorage);
  const userId = userData?.sub;

  const userDocRef = doc(db, 'agentUsers', userId);
  const userDoc = await getDoc(userDocRef);

  if (userDoc.exists()) {
    updateDoc(userDocRef, updatedData)
  }

};

//add an agent profile pic to firestore
const uploadAgentProfilePic = async (file) => {
  const dataFromLocalStorage = localStorage.getItem("userRentEasy");
  const userData = JSON.parse(dataFromLocalStorage);
  const userId = userData?.sub;

  // const storage = getStorage();
  const storageRef = ref(storage, `agentProfilePics/${userId}`);

  // Upload the file to the specified reference
  const snapshot = await uploadBytes(storageRef, file)

  const downloadURL = await getDownloadURL(snapshot.ref);

  // console.log(downloadURL);
  localStorage.setItem(`agentProfilePic:${userId}`, downloadURL);
  // Get the download URL
  // const downloadURL = await getDownloadURL(storageRef);

  // return downloadURL;

};

//get agent profile picture from firestore
const getAgentLogo = () => {
  const dataFromLocalStorage = localStorage.getItem("userRentEasy");
  const userData = JSON.parse(dataFromLocalStorage);
  const userId = userData?.sub;

  // Retrieve the logo URL from localStorage using the userId as the key
  const userLogo = localStorage.getItem(`agentProfilePic:${userId}`);
  console.log(userLogo);
};

export {
  app, db, storage, fetchAgentData,
  handleRegister, updateAgentData,
  uploadAgentProfilePic, getAgentLogo
};
