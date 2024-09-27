import { data } from "./data.js";
import { generateWord } from "./generateWord.js";

console.log(data);

// * selection of html elements in javascript
const categorySelection = document.querySelector(".category-selection");
const difficultySelection = document.querySelector(".difficulty-selection");
const categoryChoice = document.querySelectorAll(".category-choice");
const difficultyChoice = document.querySelectorAll(".difficulty-choice");
const wordDisplay = document.getElementById("wordDisplay");
const wrongGuesses = document.getElementById("wrongGuesses");

// * Declaration of variables
let difficulty = "";
let category = "";
let selectedWord = "";
let selectedWordArr = [];
let hiddenWordArr = [];
let wrongGuessesArr = [];

// * Adding event listeners for category and difficulty choice
categoryChoice.forEach((category) => {
	category.addEventListener("click", handleCategoryClick);
});

difficultyChoice.forEach((difficulty) => {
	difficulty.addEventListener("click", handleDifficultyClick);
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
	document.body.style.backgroundColor = "white";

	[selectedWord, selectedWordArr, hiddenWordArr] = generateWord(
		category,
		difficulty,
		selectedWord,
		selectedWordArr,
		hiddenWordArr
	);

	displayBoard();
}

function displayBoard() {
	// * Displaying board in web page
	let hiddenWord = "";
	for (let words in hiddenWordArr) {
		hiddenWord += hiddenWordArr[words].join(" ") + "&nbsp;&nbsp;&nbsp;";
	}
	wordDisplay.innerHTML = hiddenWord;

	document.addEventListener("keydown", handleGuess);

	if (!hiddenWord.includes("_")) {
		setTimeout(() => {
			alert("COMPLETED");
		}, 0);
	}
}

function handleGuess(event) {
	const letter = event.key.toLowerCase();
	let indices = [];

	if (!/^[a-z]$/.test(letter)) return;

	for (let i = 0; i < selectedWordArr.length; i++) {
		indices = [];
		selectedWordArr[i].forEach((element, index) => {
			if (element === letter) {
				indices.push(index);
			}
		});

		if (indices.length !== 0) {
			for (let indexVal of indices) {
				hiddenWordArr[i][indexVal] = letter;
			}
		}

		displayBoard();
	}
}
