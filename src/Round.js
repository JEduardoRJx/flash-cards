const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  currentCard() {
    return this.deck.cards[this.turns];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard());
    this.turns += 1;
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(turn.card.id)
    }
    return turn.giveFeedback(); 
  }

  calculatePercentCorrect() {
    return Math.round(100 - ((this.incorrectGuesses.length / this.turns) * 100));
  }

  endRound() {
    var percent = this.calculatePercentCorrect();
    console.log(`**Round over!** You answered ${percent}% correctly!`);
  }
}

module.exports = Round;