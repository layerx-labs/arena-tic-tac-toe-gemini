document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const cells = document.querySelectorAll('.cell');
    const statusText = document.getElementById('status-text');
    const resetButton = document.getElementById('reset-button');
    const modeToggleBtn = document.getElementById('mode-toggle');

    let gameState = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let gameActive = true;
    let isVsComputer = false; // Default is 2 players

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const handleCellPlayed = (clickedCell, clickedCellIndex) => {
        gameState[clickedCellIndex] = currentPlayer;
        clickedCell.textContent = currentPlayer;
        clickedCell.classList.add(currentPlayer.toLowerCase());
    };

    const handlePlayerChange = () => {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        statusText.textContent = `Player ${currentPlayer}'s Turn`;
    };

    const handleResultValidation = () => {
        let roundWon = false;
        let winningCells = [];

        for (let i = 0; i <= 7; i++) {
            const winCondition = winningConditions[i];
            let a = gameState[winCondition[0]];
            let b = gameState[winCondition[1]];
            let c = gameState[winCondition[2]];

            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                winningCells = winCondition;
                break;
            }
        }

        if (roundWon) {
            statusText.textContent = `Player ${currentPlayer} Wins!`;
            gameActive = false;
            // Highlight winning cells
            winningCells.forEach(index => {
                cells[index].classList.add('winning-cell');
            });
            return;
        }

        let roundDraw = !gameState.includes('');
        if (roundDraw) {
            statusText.textContent = 'Game ended in a draw!';
            gameActive = false;
            return;
        }

        handlePlayerChange();
    };

    const computerPlay = () => {
        if (!gameActive) return;

        // Simple AI: Random available spot
        let availableSpots = [];
        gameState.forEach((cell, index) => {
            if (cell === '') availableSpots.push(index);
        });

        if (availableSpots.length > 0) {
            // Disable clicks momentarily to simulate "thinking"
            board.style.pointerEvents = 'none';
            
            setTimeout(() => {
                const randomIndex = Math.floor(Math.random() * availableSpots.length);
                const computerMoveIndex = availableSpots[randomIndex];
                const cell = cells[computerMoveIndex];

                handleCellPlayed(cell, computerMoveIndex);
                handleResultValidation();
                board.style.pointerEvents = 'auto';
            }, 500); // 500ms delay
        }
    };

    const handleCellClick = (event) => {
        const clickedCell = event.target;
        const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

        if (gameState[clickedCellIndex] !== '' || !gameActive) {
            return;
        }

        handleCellPlayed(clickedCell, clickedCellIndex);
        handleResultValidation();

        if (gameActive && isVsComputer && currentPlayer === 'O') {
            computerPlay();
        }
    };

    const handleRestartGame = () => {
        gameActive = true;
        currentPlayer = 'X';
        gameState = ['', '', '', '', '', '', '', '', ''];
        statusText.textContent = `Player ${currentPlayer}'s Turn`;
        cells.forEach(cell => {
            cell.textContent = '';
            cell.classList.remove('x', 'o', 'winning-cell');
        });
        board.style.pointerEvents = 'auto'; // Ensure board is clickable if reset during computer turn
    };

    const handleModeToggle = () => {
        isVsComputer = !isVsComputer;
        modeToggleBtn.textContent = isVsComputer ? 'Mode: Vs Computer' : 'Mode: 2 Players';
        handleRestartGame();
    };

    cells.forEach(cell => cell.addEventListener('click', handleCellClick));
    resetButton.addEventListener('click', handleRestartGame);
    modeToggleBtn.addEventListener('click', handleModeToggle);
});
