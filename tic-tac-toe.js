// tic-tac-toe.js

window.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('#board div');
  const status = document.getElementById('status');
  let currentPlayer = 'X'; // Start with X
  let gameOver = false;

  squares.forEach(square => {
    square.classList.add('square');

    // --- Click Event (Exercise 2) ---
    square.addEventListener('click', () => {
      if (!gameOver && square.textContent === '') {
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);

        // Check for a winner after each move
        if (checkWinner(currentPlayer)) {
          status.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
          status.classList.add('you-won');
          gameOver = true;
        } else {
          // Switch player
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

  // --- Helper function to check for a winner ---
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
