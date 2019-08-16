const chai = require('chai');
const expect = chai.expect;
const assert = require('chai').assert;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');


describe('Round', function() {

  it('should be a function', function() {
    assert.isFunction(Round);
  })


  it('should be an instance of Round', function() {
    const card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'})
    const card2 = new Card({id:14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
    const card3 = new Card({id: 12, question: 'What is Travis\'s favorite stress reliever?', answers:['listening to music', 'watching Netflix', 'playing with bubble wrap'], correctAnswer: 'playing with bubble wrap'});
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    assert.equal(round instanceof Round, true)
  })

  it('should store deck', function() {
    const card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'})
    const card2 = new Card({id:14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
    const card3 = new Card({id: 12, question: 'What is Travis\'s favorite stress reliever?', answers:['listening to music', 'watching Netflix', 'playing with bubble wrap'], correctAnswer: 'playing with bubble wrap'});
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    assert.deepEqual(round.deck.cards, [card1, card2, card3]);
  });

  //method that returns current card being played
  it('should return first card', function() {
    const card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'})
    const card2 = new Card({id:14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
    const card3 = new Card({id: 12, question: 'What is Travis\'s favorite stress reliever?', answers:['listening to music', 'watching Netflix', 'playing with bubble wrap'], correctAnswer: 'playing with bubble wrap'});
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    assert.deepEqual(round.currentCard(), card1)
  })
  
  it('should have incorrect guesses', function() {
    const round = new Round()
    assert.deepEqual(round.incorrectGuesses, [])
  })

  //method that updates 'turns' count, evaluates guesses, gives feedback, store's id of incorect guesses
  it('should take turn and update turns count', function() {
    const card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'})
    const deck = new Deck([card1]);
    const round = new Round(deck);
    assert.equal(round.turns, 0)
    round.takeTurn({guess:'pug', card: card1});
    assert.equal(round.turns, 1)
  })

  it('should make the next card the current card', function() {
    const card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'})
    const card2 = new Card({id:14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
    const deck = new Deck([card1, card2]);
    const round = new Round(deck);
    round.takeTurn({guess:'pug', card: card1});
    assert.deepEqual(round.returnCurrentCard(), card2);
  }); 

  it('should give feedback', function() {
    const card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'})
    const deck = new Deck([card1]);
    const round = new Round(deck);
    assert.equal(round.takeTurn({guess: 'sea otter', card: card1}), 'correct!')
  })

  it('should store incorrectGuesses', function() {
    const card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'})
    const deck = new Deck([card1]);
    const round = new Round(deck);
    round.takeTurn({guess:'pug', card: card1});
    assert.deepEqual(round.incorrectGuesses, [1])
  })

  it('should calculate percent correct', function() {
    const card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'})
    const card2 = new Card({id:14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
    const card3 = new Card({id:2, question:'What is capital of CO?', answers:['Denver', 'Co. Springs', 'Boulder'], correctAnswer:'Boulder'});
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn({guess:'sea otter', card: card1});
    round.takeTurn({guess: 'heart', card: card2});
    round.takeTurn({guess:'Boulder', card: card3});
    assert.equal(round.calculatePercentCorrect(), 67);
  })

  it('should end round', function() {
    const card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'})
    const card2 = new Card({id:14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
    const card3 = new Card({id:2, question:'What is capital of CO?', answers:['Denver', 'Co. Springs', 'Boulder'], correctAnswer:'Boulder'});
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn({guess:'sea otter', card: card1});
    round.takeTurn({guess: 'heart', card: card2});
    round.takeTurn({guess:'Boulder', card: card3});
    assert.equal(round.endRound(), `**Round over!** You answered 67% correctly!`);
  }) 
})