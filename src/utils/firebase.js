// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

const apiKey = process.env.FIREBASE_API_KEY;

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: apiKey,
	authDomain: "netflixclone-93452.firebaseapp.com",
	projectId: "netflixclone-93452",
	storageBucket: "netflixclone-93452.appspot.com",
	messagingSenderId: "321788945494",
	appId: "1:321788945494:web:1057abd8381ee086dfc7f7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
