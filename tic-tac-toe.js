// tic-tac-toe.js

window.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('#board div');
  const status = document.getElementById('status');
  const newGameBtn = document.querySelector('.btn');
  let currentPlayer = 'X';
  let gameOver = false;

  squares.forEach(square => {
    square.classList.add('square');

    // --- Handle clicks on squares ---
    square.addEventListener('click', () => {
      // Prevent cheating: don't allow clicking an already filled square or if game is over
      if (square.textContent !== '' || gameOver) {
        return;
      }

      square.textContent = currentPlayer;
      square.classList.add(currentPlayer);

      // Check for winner after every move
      if (checkWinner(currentPlayer)) {
        status.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
        status.classList.add('you-won');
        gameOver = true;
      } else {
        // Switch turns
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    });

    // --- Hover effect ---
    square.addEventListener('mouseenter', () => {
      if (!gameOver && square.textContent === '') {
        square.classList.add('hover');
      }
    });

    square.addEventListener('mouseleave', () => {
      square.classList.remove('hover');
    });
  });

  // --- Restart button ---
  newGameBtn.addEventListener('click', () => {
    squares.forEach(square => {
      square.textContent = '';
      square.classList.remove('X', 'O', 'hover');
    });

    currentPlayer = 'X';
    gameOver = false;
    status.textContent = 'Move your mouse over a square and click to play an X or an O.';
    status.classList.remove('you-won');
  });

  // --- Helper: Check for winning combinations ---
  function checkWinner(player) {
    const combos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    return combos.some(combo =>
      combo.every(index => squares[index].textContent === player)
    );
  }
});
