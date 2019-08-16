const chai = require('chai');
const expect = chai.expect;
const assert = require('chai').assert;

const Game = require('../src/Game')
const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const prototypeData = require('../src/data')


describe('Game', function() {

  it('should be a function', function() {
    assert.isFunction(Game);
  })

  it('should keep track of current round', function() {
    const card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'})
    const deck = new Deck([card1]);
    const round = new Round(deck);
    const game = new Game(round);
    assert.equal(game.currentRound, round)
  })

  it('Start should create cards', function() {
    const deck = new Deck(prototypeData);
    const round = new Round(deck);
    const game = new Game(round);
    assert.equal(game.start(), deck)
  })
})