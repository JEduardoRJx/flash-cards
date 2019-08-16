const chai = require('chai');
const expect = chai.expect;
const assert = require('chai').assert;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {

  it('should be a function', function() {
    const deck = new Deck();
    assert.isFunction(Deck)
  })

  it('should be initialized with array of objects', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card3 = new Card(3, 'What is the name of the villian in Endgame', ['Tiger', 'Iron Man', 'Thanos'], 'Thanos');

    const deck = new Deck([card1, card2, card3]);
    assert.equal(deck.cards.length, 3);
  })

  it('should count cards', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card3 = new Card(3, 'What is the name of the villian in Endgame', ['Tiger', 'Iron Man', 'Thanos'], 'Thanos');

    const deck = new Deck([card1, card2, card3]);
    assert.equal(deck.countCards(), 3);
  })



})