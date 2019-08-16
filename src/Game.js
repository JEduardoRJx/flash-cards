const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const prototypeData = require('../src/data')


class Game {
  constructor(round) {
    this.currentRound = round;
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    const deck = new Deck(prototypeQuestions.map(element => new Card(element)));
    const round = new Round(deck)
    this.printMessage(deck, round);
    this.printQuestion(round);
  }
}

module.exports = Game;