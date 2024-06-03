// Function to generate a random number between 1 and 6 (representing a dice roll)
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// Function to display the rolled number as a dice face
function displayDice(number) {
  const diceElement = document.getElementById('dice');
  // Unicode characters for dice faces: U+2680 to U+2685
  const diceFaces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
  diceElement.textContent = diceFaces[number - 1];
}

// Function to handle the button click event
function rollButtonClick() {
  const rolledNumber = rollDice();
  displayDice(rolledNumber);
}

// Event listener for the roll button
document.getElementById('rollBtn').addEventListener('click', rollButtonClick);
