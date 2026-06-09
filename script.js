const board = document.getElementById('game-board');
const currentPlayerDisplay = document.getElementById('current-player');
const resetButton = document.getElementById('reset-button');

let boardState = Array(9).fill(null);
let currentPlayer = 'X';
let gameActive = true;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function createBoard() {
    board.innerHTML = ''; // Clear existing cells
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;
        cell.addEventListener('click', handleCellClick);
        board.appendChild(cell);
    }
}

function handleCellClick(event) {
    const index = event.target.dataset.index;

    if (boardState[index] === null && gameActive) {
        boardState[index] = currentPlayer;
        event.target.textContent = currentPlayer;

        if (checkWin()) {
            currentPlayerDisplay.textContent = `Player ${currentPlayer} wins!`;
            gameActive = false;
            return;
        }

        if (checkDraw()) {
            currentPlayerDisplay.textContent = "It's a draw!";
            gameActive = false;
            return;
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        currentPlayerDisplay.textContent = `Player ${currentPlayer}'s turn`;
    }
}

function checkWin() {
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (boardState[a] !== null && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            return true;
        }
    }
    return false;
}

function checkDraw() {
    return boardState.every(cell => cell !== null);
}

function resetGame() {
    boardState.fill(null);
    currentPlayer = 'X';
    gameActive = true;
    currentPlayerDisplay.textContent = `Player ${currentPlayer}'s turn`;
    createBoard(); // Re-render the board to clear cell content
}

resetButton.addEventListener('click', resetGame);

createBoard();