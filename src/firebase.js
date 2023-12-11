import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const firebaseApp = initializeApp({
  // enter your firebase project details
  
  apiKey: "AIzaSyADaX0D5ft4J1h-3_pjKui-iY_tBX6DrmE",
  authDomain: "visadoc-1c7a1.firebaseapp.com",
  projectId: "visadoc-1c7a1",
  storageBucket: "visadoc-1c7a1.appspot.com",
  messagingSenderId: "758515798098",
  appId: "1:758515798098:web:7c0f7084bd7a8bb7000f8b",
  measurementId: "G-PS9FWCHZ4W"

});

export const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(firebaseApp);

export const storage = getStorage(firebaseApp);