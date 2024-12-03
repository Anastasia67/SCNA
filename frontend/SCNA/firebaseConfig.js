// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyAkZYGFn6QyX2TqdTHqdxkhzcNb_RMq7_I",
  authDomain: "scna-c9bfa.firebaseapp.com",
  projectId: "scna-c9bfa",
  storageBucket: "scna-c9bfa.firebasestorage.app",
  messagingSenderId: "794002645490",
  appId: "1:794002645490:android:4a45077904e79aa6a20b6b",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with AsyncStorage persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
