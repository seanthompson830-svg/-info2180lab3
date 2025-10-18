// tic-tac-toe.js

window.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('#board div');
  const status = document.getElementById('status');
  let currentPlayer = 'X'; // Start with X

  squares.forEach(square => {
    // Add the base "square" style
    square.classList.add('square');

    // --- Exercise 2: Add X or O when clicked ---
    square.addEventListener('click', () => {
      if (square.textContent === '') {
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    });

    // --- Exercise 3: Hover effect ---
    square.addEventListener('mouseenter', () => {
      square.classList.add('hover');
    });

    square.addEventListener('mouseleave', () => {
      square.classList.remove('hover');
    });
  });
});
