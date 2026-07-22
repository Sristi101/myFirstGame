let player = {
    name: "Sristi",
    chips: 150
}

let cards = []
let sum = 0
let message = ""
let hasBlackJack = false
let isAlive = false

let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById("card-el")
let sumEl = document.getElementById("sum-el")
// for my improvement, why querySelector instead getElementById? 
// let sumEl = document.querySelector("sum-el")
playerEl = document.getElementById('player-el')


function getRandomCard() {

    let randomCard = Math.floor(Math.random()*13) + 1

    // As ACE + any(jack, queen or king) = 11 + 10 = 21 Blackjack!

    // if i get randomCard = 1 -> ACE value will be ACE = 10
    if (randomCard == 1) {
        return 11
    }else if (randomCard >= 11) {
        return 10  // if i get jack, queen  or king (randomCard = 11, 12 or 13) which value will be 10
    }else {
        return randomCard
    }

}


function startGame() {

    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        isAlive = true
        player.chips = 0
        playerEl.textContent = player.name + ": $" + player.chips

    } else if (sum == 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
                
        player.chips = 200
        playerEl.textContent = player.name + ": $" + player.chips

    } else {
        message = "Yo're out of the game!"
        isAlive = false
        player.chips = -50
        playerEl.textContent = player.name + ": $" + player.chips
    }

    messageEl.textContent = message

    // render out all cards in the cards array
    let size = cards.length
    cardEl.textContent = "Cards: "
    for (let i = 0; i < size; i++)
    {
        cardEl.textContent += cards[i] + " "
        
    }

    // render out sum of all the cards we have
    sumEl.textContent = "Sum: " + sum
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
    console.log("Drawing a new card from the deck!")
    let new_card = getRandomCard()
    // card.push(new_card)
    sum += new_card
    cards.push(new_card)
    renderGame()
    }

}



