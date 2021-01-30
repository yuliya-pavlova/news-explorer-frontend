export default class CardList {
  constructor(conteiner) {
      this.conteiner = conteiner;
  }

  addCard = (card) => {
      this.conteiner.appendChild(card);
  }

  clear() {
    while (this.conteiner.firstChild) {
      this.conteiner.firstChild.remove();
    }
  }

  render(cards) {
      cards.forEach(card => {
          this.addCard(card);
      });
  }
}