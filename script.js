import { generateWord } from "./generateWord.js";
import { drawBaseStructure, drawHangman } from "./drawHangman.js";

// * selection of html elements in javascript
const categorySelection = document.querySelector(".category-selection");
const difficultySelection = document.querySelector(".difficulty-selection");
const categoryChoice = document.querySelectorAll(".category-choice");
const difficultyChoice = document.querySelectorAll(".difficulty-choice");
const gameBoard = document.querySelector(".game-board");
const theme = document.getElementById("theme");
const wordDisplay = document.getElementById("wordDisplay");
const wrongGuesses = document.getElementById("wrongGuesses");
const correctGuesses = document.getElementById("correctGuesses");
const canvas = document.getElementById("hangmanCanvas");
const restartBtn = document.getElementById("restartBtn");
gameBoard.style.display = "none";
const gameFailed = document.querySelector(".gameFailed");
const gamePassed = document.querySelector(".gamePassed");
const correctAnswer = document.getElementById("correctAnswer");
const correctGuess = document.getElementById("correctGuess");
const alreadyGuessedValue = document.getElementById("alreadyGuessedValue");

// * Declaration of variables
let difficulty = "";
let category = "";
let selectedWord = "";
let selectedWordArr = [];
let hiddenWordArr = [];
let correctGuessesArr = [];
let wrongGuessesArr = [];
let remainingLife = 6;
let keyboardDisabled = false;
const context = canvas.getContext("2d");

// * Adding event listeners for category and difficulty choice
categoryChoice.forEach((category) => {
	category.addEventListener("click", handleCategoryClick);
});

difficultyChoice.forEach((difficulty) => {
	difficulty.addEventListener("click", handleDifficultyClick);
});

restartBtn.addEventListener("click", () => {
	window.location.reload();
});

// * Callback functions for category and difficulty choice
function handleCategoryClick() {
	const categoryName = this.getAttribute("name");
	category = categoryName;
	categorySelection.style.display = "none";
	difficultySelection.style.display = "block";
}

function handleDifficultyClick() {
	const difficultyName = this.getAttribute("name");
	difficulty = difficultyName;
	difficultySelection.style.display = "none";
	document.body.style.backgroundColor = "rgb(83, 83, 83)";
	gameBoard.style.display = "flex";

	[selectedWord, selectedWordArr, hiddenWordArr] = generateWord(
		category,
		difficulty,
		selectedWord,
		selectedWordArr,
		hiddenWordArr
	);

	displayBoard();
	drawBaseStructure(context);
}

function displayBoard() {
	// * Displaying board in web page
	let hiddenWord = "";
	theme.innerHTML = `Theme: ${category}`;
	for (let words in hiddenWordArr) {
		hiddenWord += hiddenWordArr[words].join(" ") + "&nbsp;&nbsp;&nbsp;";
	}
	wordDisplay.innerHTML = hiddenWord;

	document.addEventListener("keydown", handleGuess);

	if (remainingLife <= 0) {
		document.removeEventListener("keydown", handleGuess);
		setTimeout(() => {
			correctAnswer.innerHTML = selectedWord;
			gamePassed.style.display = "none";
			gameFailed.style.display = "block";

			setTimeout(() => {
				gameFailed.style.display = "none";
				window.location.reload();
			}, 5000);
		}, 100);
		return;
	}
	if (!hiddenWord.includes("_") && remainingLife > 0) {
		document.removeEventListener("keydown", handleGuess);
		setTimeout(() => {
			correctGuess.innerHTML = selectedWord;
			gameFailed.style.display = "none";
			gamePassed.style.display = "block";

			setTimeout(() => {
				gamePassed.style.display = "none";
				window.location.reload();
			}, 5000);
		}, 100);
	}
}

// * Callback function for handling the guess of player
function handleGuess(event) {
	const letter = event.key.toLowerCase();

	if (!/^[a-z]$/.test(letter)) return;

	let letterFound = false;

	if (
		correctGuessesArr.includes(letter) ||
		wrongGuessesArr.includes(letter)
	) {
		alreadyGuessedValue.innerHTML = `'${letter}' already guessed`;
		alreadyGuessedValue.style.display = "block";
		setTimeout(() => {
			alreadyGuessedValue.style.display = "none";
		}, 1100);
	}

	for (let i = 0; i < selectedWordArr.length; i++) {
		for (let j = 0; j < selectedWordArr[i].length; j++) {
			if (selectedWordArr[i][j] === letter) {
				hiddenWordArr[i][j] = letter;
				letterFound = true;
			}
		}
	}

	if (letterFound) {
		if (!correctGuessesArr.includes(letter)) {
			correctGuessesArr.push(letter);
		}
		wrongGuessesArr = wrongGuessesArr.filter((el) => el !== letter);
	} else if (!wrongGuessesArr.includes(letter)) {
		wrongGuessesArr.push(letter);
		remainingLife--;
		drawHangman(context, wrongGuessesArr.length);
	}

	correctGuesses.innerHTML = `Correct Guesses: ${correctGuessesArr.join(
		", "
	)}`;
	wrongGuesses.innerHTML = `Wrong Guesses: ${wrongGuessesArr.join(", ")}`;
	displayBoard();
}

function disableKeyboard() {
	keyboardDisabled = true;
	document.addEventListener("keydown", preventTyping, true);

	setTimeout(() => {
		keyboardDisabled = false;
		document.removeEventListener("keydown", preventTyping, true);
	}, 5000);
}

function preventTyping(event) {
	if (keyboardDisabled) {
		event.preventDefault();
	}
}
