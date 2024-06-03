// Function to generate a random number between 1 and 6 (representing a dice roll)
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  // Function to display the rolled number on the dice
  function displayDice(number) {
    const diceElement = document.getElementById('dice');
    diceElement.textContent = number;
  }
  
  // Function to handle the button click event
  function rollButtonClick() {
    const rolledNumber = rollDice();
    displayDice(rolledNumber);
  }
  
  // Event listener for the roll button
  document.getElementById('rollBtn').addEventListener('click', rollButtonClick);
  