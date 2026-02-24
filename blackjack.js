let player = 
{
    name: "Devansh Agnihotri",
    chips: 560
}

let cards = []
let sum = 0
let hasblackjack = false
isAlive = false
let message = " "
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips
console.log(playerEl)
function getRandomValue()
{
    let randomCard = Math.floor(Math.random() * 13) + 1
    if(randomCard === 1)
    {
        return 11
    }
    else if(randomCard > 10)
    {
        return 10
    }
    else
    {
        return randomCard
    }
}
function startGame()
{
    isAlive = true
    let firstCard = getRandomValue()
    let secondCard = getRandomValue()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame()
{
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++)
    {
        cardsEl.textContent += cards[i] + " "
    }
    if(sum < 21)
    {
        message = "Do you want to draw another card?"
    }
    else if(sum === 21)
    {
        message = "You've got Blackjack!"
        hasblackjack = true
    }
    else{
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    
}

function newCard() {
    if(isAlive === true && hasblackjack === false)
    {
        console.log("Drawing a new card from the deck")
        let Card = getRandomValue()
        sum += Card
        cards.push(Card)
        renderGame()
    }
    
}



