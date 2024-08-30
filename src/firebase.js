// import React, { useCallback } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import config from './components/config';
import { UserId } from './utils/userId';
import { addDoc, collection, getDocs, doc, deleteDoc, setDoc, getDoc, updateDoc } from 'firebase/firestore'

// Initialize Firebase
const app = initializeApp(config);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Storage
const storage = getStorage(app);

//get userID
const userId = UserId();

//adding docs/agent Registration data to collection
const handleRegister = async (data) => {
  const userId = UserId();

  const userDocRef = doc(db, 'agentUsers', userId);
  await setDoc(userDocRef, data)

}

//retrieve agent registration data from collection
const fetchAgentData = async () => {
  const userId = UserId();

  const userDocRef = doc(db, 'agentUsers', userId);

  const userDoc = await getDoc(userDocRef);
  if (userDoc.exists()) {
    return userDoc.data();
  }

};

//update agent's profile Data on the collection on firebase
const updateAgentData = async (updatedData) => {
  const userId = UserId();

  const userDocRef = doc(db, 'agentUsers', userId);
  const userDoc = await getDoc(userDocRef);

  if (userDoc.exists()) {
    updateDoc(userDocRef, updatedData)
  }
};

//add an agent profile pic to firestore
const uploadAgentProfilePic = async (file) => {
  const userId = UserId();
  // const storage = getStorage();
  const storageRef = ref(storage, `agentProfilePics/${userId}`);
  // Upload the file to the specified reference
  const snapshot = await uploadBytes(storageRef, file)

  const downloadURL = await getDownloadURL(snapshot.ref);

  localStorage.setItem(`agentProfilePic:${userId}`, downloadURL);
};

export {
  app, db, storage, fetchAgentData, handleRegister, updateAgentData,
  uploadAgentProfilePic
};
