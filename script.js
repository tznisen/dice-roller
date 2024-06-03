// Function to generate a random number between 1 and 6 (representing a dice roll)
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// Function to display the rolled number as a dice face with animation
function displayDiceWithAnimation(number) {
  const diceElement = document.getElementById('dice');
  // Unicode characters for dice faces: U+2680 to U+2685
  const diceFaces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
  diceElement.textContent = diceFaces[number - 1];
  
  // Trigger animation by adding a class with the animation property
  diceElement.classList.add('rotateAnimation');
  
  // Remove the class after the animation completes to reset for the next roll
  setTimeout(() => {
    diceElement.classList.remove('rotateAnimation');
  }, 500); // Duration of the animation in milliseconds
}

// Function to handle the button click event
function rollButtonClick() {
  const rolledNumber = rollDice();
  displayDiceWithAnimation(rolledNumber);
}

// Event listener for the roll button
document.getElementById('rollBtn').addEventListener('click', rollButtonClick);
