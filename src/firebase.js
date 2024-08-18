// import React, { useCallback } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
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
      .then(() => {
        alert("Profile data updated successfully")
      })
  }

};

export { app, db, storage, fetchAgentData, handleRegister, updateAgentData };
