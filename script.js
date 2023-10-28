let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const cells = document.querySelectorAll('.cell');
const audio = document.getElementById('audio');

function checkWinner() {
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return gameBoard[a];
        }
    }
    return null;
}

function cellClicked(index) {
    if (gameBoard[index] === '') {
        gameBoard[index] = currentPlayer;
        cells[index].innerText = currentPlayer;
        audio.play();
        const winner = checkWinner();
        if (winner) {
            alert(`${winner} wins!`);
            resetGame();
            return;
        }
        if (!gameBoard.includes('')) {
            alert("It's a tie!");
            resetGame();
            return;
        }
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    cells.forEach(cell => cell.innerText = '');
    currentPlayer = 'X';
}
