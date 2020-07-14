console.log("It Works");




//Define variables

const player = "You";
const dealer = "Dealer";

let playerHand = [];
let dealerHand = [];

let pScore = 0;
let dScore = 0;


//Define DOM elements

const winnerID = document.getElementById("winner");
const hitID = document.getElementById("hit");
const stayID = document.getElementById("stay");
const resetID = document.getElementById("reset");


//Game

//Shuffle function

//Fisher-Yate's algorithm

function shuffle(deck) {
    let i = 0,
        j = 0,
        temp = null;
    for (i = deck.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1));
        temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
}

//Gives 2 cards to the dealer and player at the start

function initialHand() {
    shuffle(deck);
    for (let i = 0; i < 2; i++) {
        playerHand.push(deck.pop());
        dealerHand.push(deck.pop());
    }
    return playerHand, dealerHand;
}

//calculates the score
function calculateScore(hand) {
    let score = 0;
    let aces = 0;
    hand.forEach(function (card) {
        score += card.value;
        if (card.value === 11) {
            aces++;
        }
    });
    while (score > 21 && aces) {
        score -= 10;
        aces--;
    }
    return score;
}





//checkScore function

//Update scores


//Hit function

//Stay function




