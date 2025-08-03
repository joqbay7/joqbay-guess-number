# Guess the Secret Number Game

A modern, responsive web game built with HTML, CSS, and JavaScript (ES6) using Vite. The goal is to guess a randomly generated secret number between 1 and 100. The project emphasizes clean code, modular structure, and clear separation between game logic and user interface.

## Features

- **Modern dark theme** with CSS variables and responsive design
- **Separation of concerns**: game logic and UI are in different modules
- **Animated UI**: fade-in, shake, and pulse effects for better user experience
- **Accessible**: keyboard navigation, focus management, and ARIA labels
- **Displays all user guesses** for easy tracking
- **Professional code structure** suitable for learning and showcasing

## Project Structure

```
src/
  guess-number-play.js   # Game logic (GuessNumberGame class)
  guess-number-ui.js     # UI logic and DOM manipulation
  header.js              # Header rendering
  footer.js              # Footer rendering
  style.css              # Modern dark theme, animations, responsive layout
index.html               # Main HTML file
```

## Programming Logic

### Game Logic (`guess-number-play.js`)
- **Class-based design**: The `GuessNumberGame` class encapsulates all game state and logic.
- **Random number generation**: The secret number is generated using `Math.random()` within a configurable range (default 1-100).
- **Guess validation**: The class checks if the guess is within range and notifies the UI of the result (`higher`, `lower`, `correct`, or `finished`).
- **Attempts tracking**: The number of attempts and all guesses are tracked for user feedback.
- **Reset functionality**: The game can be restarted at any time, resetting all state.

### UI Logic (`guess-number-ui.js`)
- **DOM manipulation**: Handles rendering, input focus, and updating messages.
- **Event listeners**: Listens for guess submissions and restart actions.
- **Animations**: Triggers shake animation on invalid input and fade-in for main elements.
- **Guesses display**: Shows all numbers the user has tried, updating live after each guess.
- **Accessibility**: Ensures input is focused on load and after each guess, and uses semantic HTML.

### CSS (`style.css`)
- **Dark palette**: Uses CSS variables for easy theme management.
- **Responsive layout**: Flexbox and media queries for mobile and desktop.
- **Animations**: Keyframes for fadeIn, shake, and pulse effects.
- **Modern input/button styles**: Large, accessible, and visually appealing.

## How to Run

1. **Install dependencies** (requires Node.js):
   ```bash
   npm install
   ```
2. **Start the development server**:
   ```bash
   npm run dev
   ```
3. **Open your browser** at the provided local address (usually `http://localhost:5173`).

## Customization
- You can easily change the number range by editing the `GuessNumberGame` constructor.
- All styles and animations are in `src/style.css` for quick visual tweaks.
- The UI and logic are decoupled, making it easy to add new features or change the interface.

## Learning Focus
This project is ideal for:
- Understanding **modular JavaScript** and separation of concerns
- Practicing **class-based logic** and state management
- Exploring **modern CSS** (variables, flexbox, grid, animations)
- Building accessible and responsive web apps

## License
MIT
