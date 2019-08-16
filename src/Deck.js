class Deck {
  constructor(cards) {
    this.cards = cards;
  }

  countCards() {
    var count = 0;
    this.cards.map(element => {
      count += 1;
    })
    return count;
  }
}

module.exports = Deck;