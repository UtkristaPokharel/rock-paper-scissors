Rock, Paper, Scissors Game

This is a simple Rock, Paper, Scissors game implemented using JavaScript.

How to Play

Open the HTML file in your web browser.
Click the button labeled "Play".
A prompt will ask you to enter your choice: "Rock, Paper, or Scissors?". You can enter your choice in any case (uppercase or lowercase).
The computer will also make a random choice.
The result of the round (win, lose, or draw) will be displayed on the screen.
Playing Again

Simply click the "Play" button again to start a new round.

Code Breakdown

The code consists of several functions:

stringToRPSChar: Converts a string ("rock", "paper", or "scissors") to its corresponding unicode character for display.
getComputerChoice: Generates a random choice ("rock", "paper", or "scissors") for the computer.
getUserChoice: Prompts the user for their choice and ensures it's a valid option (rock, paper, or scissors).
playRound: Compares the user's choice with the computer's choice and determines the winner or if it's a draw.
