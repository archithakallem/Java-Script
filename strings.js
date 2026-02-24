document.getElementById("count-el").innerText = 5
let count = 0
console.log(count)
let myAge = 19
console.log(myAge)
let gangamallu = 20
let sumalatha = 50
let total = sumalatha + gangamallu
console.log(total)
let bonusPoint = 50
console.log(bonusPoint)
bonusPoint = bonusPoint + 50
console.log(bonusPoint)
bonuspoint = bonusPoint - 75
console.log(bonusPoint)
bonusPoint = bonusPoint + 40
console.log(bonusPoint)
function increment()
{
    console.log("The button is clicked")
}
lapscompleted = 0
function lapscount()
{
    lapscompleted = lapscompleted + 1
}
lapscount()
lapscount()
lapscount()
console.log(lapscompleted)
let firstName = "Architha"
let lastName = "Reddy"
let fullName = firstName + " "+ lastName
console.log(fullName)

let Name="Linda"
let greeting="Hi there"
function letmegreets()
{
    console.log(greeting + ", " + Name + "!")
}
letmegreets()

let myPoints = 3
function add3points(){
    myPoints = myPoints + 3
}
function remove1point(){
    myPoints = myPoints - 1
}
add3points()
add3points()
add3points()
remove1point()
remove1point()

console.log(myPoints)


console.log("2" + 2)// 22
console.log(11 + 7)// 18
console.log(6 + "5")// 65
console.log("My Points: " + 5 + 9)// My Points: 14
console.log(2 + 2)// 4
console.log("11" + "14")// 1114
let username = "Dev"
let message = "You have three new notifications"
messagetoUser = message + ", " + username + "!"
console.log(messagetoUser)
let myName = "Devansh Agnihotri"
let greet = "Hi, my name is "
mygreeting = greet + myName
console.log(mygreeting)




let welcomeEl = document.getElementById("welcome-el")

let Names = "Architha Reddy"
let greetings = "Welcome back"
welcomeEl.innerText = greetings + " " + Names 
welcomeEl.innerText +=  "👋"




let age = 22
if(age < 21)
{
    console.log("You can not enter the club!")
}
else 
{
    console.log("Welcome!")
}
let popsage = 100
if(popsage < 100)
{
    console.log("Not elegible")
}
else if(popsage === 100)
{
    console.log("Here is your birthday card from the King!")
} 
else{
    console.log("Not elegible, you have already gotten one")
}

let myContent = ["Here's my first project AI-Driven Crop Recommendation, check it out!",
    "WElcome to my 100 days of code with scrimble!",
    "Heyy! I have built my protfolio using Lovable-AI. Check it out!",
    "Another milestone unlocked! I got python essentials 2 certification from Cisco"
]
console.log(myContent[1])
console.log(myContent[2])
console.log(myContent[0])
console.log(myContent[3])
console.log(myContent[6])
console.log(myContent.length())    //returns the length of the array
myContent.push("I achieved another milestone.") 
console.log(myContent) // appends to end of the array
myContent.pop()
console.log(myContent) //pops the last element of array
//Loops
for(let i = 1; i < 11; i++)
{
    console.log(i)
}
for(let i = 10; i < 21; i++)
{
    console.log(i)
}
for(let i = 1; i < 11; i=i+2)
{
    console.log(i)
}
for(let i = 0; i < 5; i++)
{
    console.log(i)
}
for(let i = 10; i < 101; i=i+10)
{
    console.log(i)
}
//arrays + loops
let cards = [7, 3, 9]
for(let i = 0; i < cards.length; i++)
{
    console.log(cards[i])
}
for(let i = 0; i < myContent.length; i++)
{
    console.log(myContent[i])
}
let sentence = ["Hello", "my", "name", "is", "Per"] 
let greetingEl = document.getElementById("greeting-el")
for(let i = 0; i < sentence.length; i++)
{
    greetingEl.textContent += sentence[i] + " "
}