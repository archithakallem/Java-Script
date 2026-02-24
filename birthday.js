import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js"

const firebaseConfig = {
    apiKey: "AIzaSyATE4pPxsDxU7Xsk0aDjFD58nTrUxS8iOM",
    authDomain: "birthday-app-80c60.firebaseapp.com",
    databaseURL: "https://birthday-app-80c60-default-rtdb.firebaseio.com",
    projectId: "birthday-app-80c60",
    storageBucket: "birthday-app-80c60.firebasestorage.app",
    messagingSenderId: "594696098576",
    appId: "1:594696098576:web:bc22c213ae85f8659d8b95"
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const referenceInDB = ref(database, "birthdays")

const birthdayInputField = document.getElementById("birthday-input")
const submitButton = document.getElementById("submit-button")

submitButton.addEventListener("click", function() {
    push(referenceInDB, birthdayInputField.value)
    birthdayInputField.value = ""
})