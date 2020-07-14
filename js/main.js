//Define variables

const player = "You";
const dealer = "Dealer";

let playerHand = [];
let dealerHand = [];

let pScore = 0;
let dScore = 0;


//Define DOM elements

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



//Deal function

//checkScore function

//Update scores


//Hit function

//Stay function