const board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let isGameActive = true;

const setStatus = (message) => {
    document.getElementById('statusArea').innerText = message;
};

const checkWinner = () => {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            isGameActive = false;
            setStatus(`Player ${currentPlayer} wins!!`);
            return;
        }
    }

    if (!board.includes('')) {
        isGameActive = false;
        setStatus('Game is a draw!!');
    }
};

const makeMove = (cell, index) => {
    if (cell.innerText.trim() === '' && isGameActive) {
        cell.innerText = currentPlayer;
        board[index] = currentPlayer;
        checkWinner();
        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
        if (isGameActive) {
            setStatus(`Player ${currentPlayer}'s turn`);
        }
    }
};

setStatus(`Player ${currentPlayer}'s turn`);
