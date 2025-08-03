// Manipulação da interface do jogo
import { GuessNumberGame } from './guess-number-play.js';

export function setupGuessNumberUI() {
  document.querySelector('#app').innerHTML = `
    <div class="game-container">
      <h1>Jogo do Número Secreto</h1>
      <p>Tente adivinhar o número entre 1 e 100</p>
      <input type="number" id="guess-input" min="1" max="100" placeholder="Digite seu palpite" />
      <button id="guess-btn">Chutar</button>
      <p id="message"></p>
      <div id="guesses-container" style="width:100%;margin-top:1.2em;text-align:left;">
        <strong>Seus palpites:</strong>
        <span id="guesses-list" style="display:inline-block;margin-left:0.5em;color:var(--color-accent);"></span>
      </div>
      <button id="restart-btn" style="display:none;">Jogar Novamente</button>
    </div>
  `;

  const game = new GuessNumberGame();
  const guessInput = document.getElementById('guess-input');
  const guessBtn = document.getElementById('guess-btn');
  const message = document.getElementById('message');
  const restartBtn = document.getElementById('restart-btn');

  // Foco automático ao carregar
  guessInput.focus();

  const guessesList = document.getElementById('guesses-list');
  let guesses = [];

  function handleGuess() {
    const guess = Number(guessInput.value);
    const result = game.guess(guess);
    if (!guess || guess < game.min || guess > game.max) {
      message.textContent = `Digite um número válido entre ${game.min} e ${game.max}.`;
      guessInput.classList.add('shake');
      setTimeout(() => guessInput.classList.remove('shake'), 400);
      return;
    }
    guesses.push(guess);
    guessesList.textContent = guesses.join(', ');
    if (result.status === 'correct') {
      message.textContent = `Parabéns! Você acertou em ${result.attempts} tentativas!`;
      guessBtn.disabled = true;
      guessInput.disabled = true;
      restartBtn.style.display = 'inline-block';
    } else if (result.status === 'higher') {
      message.textContent = 'O número secreto é maior.';
    } else if (result.status === 'lower') {
      message.textContent = 'O número secreto é menor.';
    } else if (result.status === 'finished') {
      message.textContent = 'O jogo já terminou!';
    }
    guessInput.value = '';
    guessInput.focus();
  }

  guessBtn.addEventListener('click', handleGuess);
  guessInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleGuess();
  });

  restartBtn.addEventListener('click', () => {
    game.reset();
    message.textContent = '';
    guessBtn.disabled = false;
    guessInput.disabled = false;
    guessInput.value = '';
    guesses = [];
    guessesList.textContent = '';
    restartBtn.style.display = 'none';
    guessInput.focus();
  });
}
