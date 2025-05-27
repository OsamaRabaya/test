

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7IvQeA7yfBOBd6iELl378RzdaA5YSFQ0",
  authDomain: "test-16009.firebaseapp.com",
  projectId: "test-16009",
  storageBucket: "test-16009.firebasestorage.app",
  messagingSenderId: "11096612994",
  appId: "1:11096612994:web:fd7ea3dc2c81736bdfd49b",
  measurementId: "G-V5Y6MYDM5J"
};

// Initialize Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js';
import { getFirestore, collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-storage.js';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc, getDocs, ref, uploadBytes, getDownloadURL };
