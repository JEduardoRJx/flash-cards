/* eslint-disable max-len */
const chai = require('chai');
const expect = chai.expect;
const assert = require('chai').assert;

const Card = require('../src/Card');

describe('Card', function() {

  it('should be a function', function() {
    assert.isFunction(Card);
  });

  it('should store a question', function() {
    const card = new Card({question: 'What allows you to define a set of related information using key-value pairs?'});
    assert.equal(card.question, 'What allows you to define a set of related information using key-value pairs?');
  });  

  it('should store a list of possible answers', function() {
    const card = new Card({id: 1, question:'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});
    assert.deepEqual(card.answers, ['object', 'array', 'function']);
  });  

  it('should store the correct answer', function() {
    const card = new Card({id: 1, question:'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});
    assert.equal(card.correctAnswer, 'object');
  });
});