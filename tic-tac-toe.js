// tic-tac-toe.js

window.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('#board div');
  const status = document.getElementById('status');
  const newGameBtn = document.querySelector('.btn');
  let currentPlayer = 'X'; // Start with X
  let gameOver = false;

  squares.forEach(square => {
    square.classList.add('square');

    // --- Click event (Exercise 2 & 4) ---
    square.addEventListener('click', () => {
      if (!gameOver && square.textContent === '') {
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);

        if (checkWinner(currentPlayer)) {
          status.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
          status.classList.add('you-won');
          gameOver = true;
        } else {
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
      }
    });

    // --- Hover effect (Exercise 3) ---
    square.addEventListener('mouseenter', () => {
      if (!gameOver) square.classList.add('hover');
    });

    square.addEventListener('mouseleave', () => {
      square.classList.remove('hover');
    });
  });

  // --- Exercise 5: Restart game ---
  newGameBtn.addEventListener('click', () => {
    // Reset all squares
    squares.forEach(square => {
      square.textContent = '';
      square.classList.remove('X', 'O', 'hover');
    });

    // Reset game state
    currentPlayer = 'X';
    gameOver = false;

    // Reset status message
    status.textContent = 'Move your mouse over a square and click to play an X or an O.';
    status.classList.remove('you-won');
  });

  // --- Helper function: Check for a winner ---
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
