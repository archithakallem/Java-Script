import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js"
const firebaseConfig = {
    apiKey: "AIzaSyCQvKuufuGZ8lT3i-z7mywpyiYT7UqIOmg",
    authDomain: "leads-tracker-app-a7be2.firebaseapp.com",
    databaseURL: "https://leads-tracker-app-a7be2-default-rtdb.firebaseio.com/",
    projectId: "leads-tracker-app-a7be2",
    storageBucket: "leads-tracker-app-a7be2.firebasestorage.app",
    messagingSenderId: "596080688330",
    appId: "1:596080688330:web:22534333bb634c7c6f4833"
    //databaseURL: process.env.DATABASE_URL --if you do it in node.js or scrimba
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const referenceInDB = ref(database, "LeadsTracker")
//let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
// 1. Store the delete button in a deleteBtn variable
const deleteBtn = document.getElementById("delete-btn")
//const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
//const tabBtn = document.getElementById("tab-btn")

//if (leadsFromLocalStorage) {
    //myLeads = leadsFromLocalStorage
    //render(myLeads)
//}

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}
// 2. Listen for double clicks on the delete button (google it!)
// 3. When clicked, clear localStorage, myLeads, and the DOM

deleteBtn.addEventListener("dblclick", function() {
    
    //localStorage.clear();
    //myLeads = [];
    //render(myLeads);

    
})

//tabBtn.addEventListener("click", function() {
    //chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //})
    //chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        //myLeads.push(tabs[0].url)
        //localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        //render(myLeads)
    //})
    //myLeads.push(tabs[0].url)
    //localStorage.setItem("myLeads", JSON.stringify(myLeads))
    //render(myLeads)
//})
inputBtn.addEventListener("click", function() {
    push(referenceInDB, inputEl.value)
    inputEl.value = ""
    //localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    
})




//let myLeads = `["www.myLeads.com"]`
//myLeads = JSON.parse(myLeads)
//myLeads.push("www.epicLeads.com")
//myLeads = JSON.stringify(myLeads)
//console.log(typeof myLeads)
//const ulEl = document.getElementById("ul-el")
//listItems +=  "<li><a target='_blank' href='"+myLeads[i]+"'>"+myLeads[i] + "</a></li>"
//Another method
//const li = document.createElement("li") --create element
//li.textContent=myLeads[i] --set textContent
//ulEl.append(li) --append it to ul

