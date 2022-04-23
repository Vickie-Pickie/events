class GameField {
  constructor() {
    this.clickHandler = null;
  }

  getActive() {
    return this.wrapper.getElementsByClassName('active');
  }

  // eslint-disable-next-line class-methods-use-this
  removeActiveState(el) {
    el.classList.remove('active');
  }

  setActive(index) {
    this.wrapper.children[index].classList.add('active');
  }

  setClickHandler(handler) {
    this.clickHandler = handler;
  }

  draw() {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('wrapper');
    for (let i = 0; i < 16; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      this.wrapper.appendChild(cell);
    }
    const app = document.getElementById('app');
    app.appendChild(this.wrapper);
    this.wrapper.addEventListener('click', (e) => {
      const active = e.target.closest('.active');
      if (active) {
        if (this.clickHandler) {
          this.clickHandler();
        }
        active.classList.remove('active');
      }
    });
  }
}

export default GameField;
