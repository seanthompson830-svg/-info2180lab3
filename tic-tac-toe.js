

// tic-tac-toe.js

window.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('#board div');
  const status = document.getElementById('status');
  let currentPlayer = 'X'; // Start with X

  // Step 1: Add the "square" class to each square
  squares.forEach(square => {
    square.classList.add('square');

    // Step 2: Add a click event to handle moves
    square.addEventListener('click', () => {
      // Only allow marking an empty square
      if (square.textContent === '') {
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);

        // Switch player
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    });
  });
});
