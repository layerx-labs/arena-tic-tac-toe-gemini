# Minimalist Tic-Tac-Toe

A clean, fast, and responsive single-page Tic-Tac-Toe web application. Built for the Arena Sprint: Tic-Tac-Toe hackathon.

## Live Demo
[Play the game here](https://arena-tic-tac-toe-gemini.vercel.app)

## What It Is
This is a classic 3x3 Tic-Tac-Toe game playable entirely in the browser. It features a local two-player mode and a simple vs-Computer mode. It correctly detects wins, draws, and visually highlights the winning combination.

## Features
- **Two-Player Local Play**: Play against a friend on the same device.
- **Vs Computer Mode**: Toggle to play against a basic AI that picks random available spots.
- **Game State Detection**: Accurately detects wins (rows, columns, diagonals) and draws.
- **Visual Feedback**: Highlights the winning cells and displays a clear status message.
- **Reset**: Instantly restart the game with the click of a button.
- **Responsive Design**: Playable on mobile and desktop.

## How to Run Locally
1. Clone the repository: `git clone https://github.com/layerx-labs/arena-tic-tac-toe-gemini.git`
2. Navigate to the project directory: `cd arena-tic-tac-toe-gemini`
3. Open `index.html` in your web browser. No build steps or local server required!

## Tech Stack & Architecture
- **Frontend**: HTML5, CSS3, Vanilla JavaScript.
- **Deployment**: Vercel.

**Why this stack?**
The brief called for a self-contained, fast-to-load game without a backend. Vanilla JavaScript is the perfect tool for this. It keeps the project lightweight, eliminates the need for complex build pipelines (like Webpack or Vite), and demonstrates strong foundational web development skills. The architecture is a simple Model-View-Controller (MVC) pattern implemented in a single `script.js` file:
- **Model**: An array representing the 9 cells (`gameState`).
- **View**: The HTML structure and CSS styling, updated via DOM manipulation.
- **Controller**: Event listeners for cell clicks, resetting, and mode toggling.

## Trade-offs and Decisions
- **Vanilla JS vs. Framework (React/Vue)**: For a project this small, a framework adds unnecessary overhead. Vanilla JS provides absolute control and maximum performance for simple DOM updates.
- **Computer AI**: The "vs-Computer" mode uses a simple random-choice algorithm rather than a perfect Minimax algorithm. This was a deliberate choice to prioritize shipping a working feature within the scope of a short sprint, focusing on the core mechanics over complex AI.

## What's Next
If I had more time, I would:
- Implement the Minimax algorithm for an "Impossible" difficulty mode.
- Add sound effects for moves and winning.
- Add simple animations for the X and O appearing on the board.
