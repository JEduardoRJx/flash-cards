const chai = require('chai');
const expect = chai.expect;
const assert = require('chai').assert;


const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    assert.isFunction(Turn);
  });

  it('should have a guess', function() {
    const card = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'})
    const turn = new Turn({guess: 'pug', card: card});
    assert.equal(turn.guess, 'pug')
  })

  it('should return the guess', function() {
    const card = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
    const turn = new Turn({guess:'pug', card: card});
    turn.returnGuess();
    assert.equal(turn.returnGuess(), 'pug');
  })

  it('should return the card', function() {
    const card = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
    const turn = new Turn({guess:'pug', card: card});
    turn.returnCard();
    assert.equal(turn.returnCard(), card);
  })

  it('should return ture/false based on guess', function() {
    const card = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
    const turn = new Turn({guess:'sea otter', card: card});
    turn.evaluateGuess();
    assert.equal(turn.evaluateGuess(), true);
  })

  it('should return correct/incorrect based on guess', function() {
    const card = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
    const turn = new Turn({guess:'sea otter', card: card});
    turn.giveFeedback();
    assert.equal(turn.giveFeedback(), 'correct!');
  })
})