import randomInteger from './utils';

class GameLogic {
  constructor(gameField) {
    this.gameField = gameField;
    this.points = 0;
    this.life = 5;
    this.onClick = this.onClick.bind(this);
  }

  run() {
    this.gameField.draw();
    this.gameField.setClickHandler(this.onClick);

    setInterval(() => {
      const randomCell = randomInteger(0, 15);
      const previous = this.gameField.getActive();
      if (previous.length > 0) {
        this.gameField.removeActiveState(previous[0]);
        this.life -= 1;
        if (this.life <= 0) {
          alert(`Проигрыш. Вы набрали ${this.points} очков`);
          this.life = 5;
          this.points = 0;
        }
      }

      this.gameField.setActive(randomCell);
    }, 1000);
  }

  onClick() {
    this.points += 1;
  }
}

export default GameLogic;
