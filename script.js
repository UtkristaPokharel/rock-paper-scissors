const rockchar = '&#9994';
const paperchar = '&#9995';
const scisschar = '&#9996';

function stringToRPSChar(inputstr) {
	switch (inputstr) {
		case 'rock':
			return rockchar;
		case 'paper':
			return paperchar;
		case 'scissors':
			return scisschar;
	}
}

const choice = ['rock', 'paper', 'scissors']

const getComputerChoice = () => {
	let randomChoice = Math.floor(Math.random() * choice.length);
	return choice[randomChoice];
}
console.log(getComputerChoice());


const getUserChoice = () => {
	let isValidChoice = false;
	let choices;
	while (!isValidChoice) { // Loop until a valid choice is entered
		choices = prompt('Rock, Paper, or Scissors? (case-insensitive)').toString();
		choices = choices.toLowerCase();
		isValidChoice = choice.includes(choices); // Check if entered choice is in the valid options
		if (!isValidChoice) {
			alert('Invalid choice! Please enter rock, paper, or scissors.');
		}
	}
	return choices;
}


const playRound = () => {
	let computerChoice = getComputerChoice();
	let humanChoice = getUserChoice();
	let result;

	document.getElementById('oppchoice').innerHTML = stringToRPSChar(humanChoice);
	document.getElementById('playchoice').innerHTML = stringToRPSChar(computerChoice);

	if (humanChoice === computerChoice) {
		result = 'Draw!'
	}
	else if (humanChoice === 'rock') {
		if (computerChoice == 'paper') {
			result = 'You lose!'
		}
		else {
			result = 'You win!'
		}
	}
	else if (humanChoice === 'paper') {
		if (computerChoice == 'scissors') {
			result = 'You lose!'
		}
		else {
			result = 'You win!';
		}
	}
	else if (humanChoice === 'scissors') {
		if (computerChoice == 'rock') {
			result = 'You lose!';
		}
		else {
			result = 'You win!';
		}
	}
	return result;
}

document.getElementById('gobutton').addEventListener('click', () => {
	document.getElementById('playresult').innerText = playRound();
})




