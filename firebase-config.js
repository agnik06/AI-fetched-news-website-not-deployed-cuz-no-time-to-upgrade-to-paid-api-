// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAWzXV-UhLVA1YDzILyk6EmYDPeB3wNoQk",
    authDomain: "vuechat-20f8b.firebaseapp.com",
    projectId: "vuechat-20f8b",
    storageBucket: "vuechat-20f8b.appspot.com",
    messagingSenderId: "673301393041",
    appId: "1:673301393041:web:12fb9a574847114aea1930",
    measurementId: "G-9675X428R8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Google Sign-In function
export function googleLogin() {
    signInWithPopup(auth, provider)
        .then(result => {
            document.getElementById('googleSignIn').style.display = 'none';
            document.getElementById('signOut').style.display = 'inline';
            document.getElementById('generateNews').style.display = 'inline';
            document.getElementById('userWelcome').innerText = `Welcome, ${result.user.displayName}`;
            document.getElementById('userWelcome').style.display = 'block';
        })
        .catch(error => console.error("🔥 Firebase Auth Error:", error));
}

// Google Sign-Out function
export function googleLogout() {
    signOut(auth).then(() => {
        document.getElementById('googleSignIn').style.display = 'inline';
        document.getElementById('signOut').style.display = 'none';
        document.getElementById('generateNews').style.display = 'none';
        document.getElementById('userWelcome').style.display = 'none';
    });
}
