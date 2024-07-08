import { initializeApp } from "firebase/app";
import config from "./components/config";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

//initialize firebase
const app = initializeApp(config)
export const firestore = getFirestore(app)
export const storage = getStorage(app)