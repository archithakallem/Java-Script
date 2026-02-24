let player1Time = 102
let player2Time = 107

// cmd+d - ctrl+d
function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time
    }
}
let getFastest = getFastestRaceTime()
console.log(getFastest)
function getTotalRaceTime()
{
    return player1Time + player2Time
}
let getTime = getTotalRaceTime()
console.log(getTime)

let randomNumber = Math.random() * 6

console.log(randomNumber)
let flooredNumber = Math.floor(-5.25632)

console.log(flooredNumber)

function rollDice()
{
    let randomNum = Math.floor( Math.random() * 6 ) + 1
    return randomNum
}
console.log(rollDice())

let hasSolvedChallenge = false
let hasHintsLeft = false

// Create an if statement that checks that both variables are false.
// If so, run the showSolution() function
if(hasSolvedChallenge === false && hasHintsLeft === false)
{
    showSolution()
}

function showSolution() {
    console.log("Showing the solution....")
}
// Create two boolean variables, likesDocumentaries and likesStartups
// Use an OR statement (||) to call recommendMovie() if either of those variables are true
let likesDocumentaries = true
let likesStartups = false
if(likesDocumentaries || likesStartups)
{
    recommendMovie()
}

function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}

let airbnb =
{
    location: "Galway",
    cost: 5190,
    type: "private room",
    isAvailable: true,
    options: ["4 gueste", "1 bedroom", "2 beds", "private half-bath"]
}
console.log(airbnb.type)
console.log(airbnb.cost)

let person = 
{
    name: "Devansh Agnihotri",
    age : 21,
    country : "India"
}
function logData()
{
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
}
logData()
let age = 15
if(age < 6)
{
    console.log("Free ticket")
}
else if(age >= 6 && age <= 17)
{
    console.log("Child discount")
}
else if(age >= 18 && age <= 26)
{
    console.log("Student discount")
}
else if(age >= 27 && age <= 66)
{
    console.log("Full price")
}    
else
{
    console.log("Senior Citizen discount")
}
let largeCountries = ["China","India","USA","Indonesia","Pakistan"]
console.log("The 5 largest countries in the world: ")
for(let i = 0; i < largeCountries.length; i++)
{
    console.log("- " + largeCountries[i])
}
let largeCountries2 = ["Tuvalu","India","USA","Indonesia","Monaco"]
console.log(largeCountries2)
largeCountries2.shift()
largeCountries2.unshift("China")
largeCountries2.pop()
largeCountries2.push("Pakistan")
console.log(largeCountries2)
let dayOfMonth = 13
let weekday = "Friday"
if(dayOfMonth === 13 && weekday === "Friday")
{
    console.log("😱")
}
let hands = ["rock", "paper", "scissor"]
function startGame()
{
    let getRandom = Math.floor(Math.random() * hands.length)
    let handsRandom = hands[getRandom]
    console.log(handsRandom)
}
startGame()
let inputBox = document.getElementById("box")
inputBox.addEventListener("click", function()
{
    console.log("I want to open the box!")
})

let container = document.getElementById("container")
container.innerHTML = "<button onclick='buy()'>Buy!</button>"
function buy()
{
    container.innerHTML+="<p>Thank you for buying!</p>"
}


//Template Strings
const recipient = "James"
const sender = "Devansh"
// Refactor the email string to use template strings
const email = `Hey ${recipient}! How is it going? Cheers ${sender}`

console.log(email) 