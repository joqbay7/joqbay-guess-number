// Lógica do jogo do número secreto
export class GuessNumberGame {
  constructor(min = 1, max = 100) {
    this.min = min;
    this.max = max;
    this.reset();
  }

  reset() {
    this.secretNumber = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    this.attempts = 0;
    this.finished = false;
  }

  guess(number) {
    if (this.finished) return { status: 'finished' };
    this.attempts++;
    if (number === this.secretNumber) {
      this.finished = true;
      return { status: 'correct', attempts: this.attempts };
    } else if (number < this.secretNumber) {
      return { status: 'higher' };
    } else {
      return { status: 'lower' };
    }
  }
}
