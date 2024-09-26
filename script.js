const animals = [
	"Elephant",
	"Tiger",
	"Kangaroo",
	"Penguin",
	"Crocodile",
	"Dolphin",
	"Giraffe",
	"Hippopotamus",
	"Chimpanzee",
	"Octopus",
];

const movies = [
	"Titanic",
	"Inception",
	"Gladiator",
	"The Godfather",
	"Avatar",
	"Jurassic Park",
	"The Matrix",
	"The Lion King",
	"Interstellar",
	"Forrest Gump",
];

const countries = [
	"Australia",
	"Brazil",
	"Canada",
	"Denmark",
	"Egypt",
	"Finland",
	"Germany",
	"India",
	"Japan",
	"Switzerland",
];

// * selection of html elements in javascript
const categorySelection = document.querySelector(".category-selection");
const difficultySelection = document.querySelector(".difficulty-selection");
const categoryChoice = document.querySelectorAll(".category-choice");
const difficultyChoice = document.querySelectorAll(".difficulty-choice");

// * Declaration of variables
let categoryName;
let difficulty = "";
let category = "";
let selectedWord = "";
let hiddenWord = [];

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
	console.log(categoryName);
	category = categoryName;
	categorySelection.style.display = "none";
	difficultySelection.style.display = "block";
}

function handleDifficultyClick() {
	const difficultyName = this.getAttribute("name");
	console.log(difficultyName);
	difficulty = difficultyName;
	difficultySelection.style.display = "none";
	document.body.style.backgroundColor = "white";

	displayBoard();
}

// * Game Board (yet to add difficulty feature)
function displayBoard() {
	switch (category) {
		case "animals":
			selectedWord =
				animals[
					Math.floor(Math.random() * animals.length)
				].toLowerCase();
			hiddenWord = Array(selectedWord.length).fill("_");
			break;
		case "movies":
			selectedWord =
				movies[Math.floor(Math.random() * movies.length)].toLowerCase();
			hiddenWord = Array(selectedWord.length).fill("_");
			break;
		case "countries":
			selectedWord =
				countries[
					Math.floor(Math.random() * countries.length)
				].toLowerCase();
			hiddenWord = Array(selectedWord.length).fill("_");
			break;
		default:
			console.log("Error");
	}

	console.log(selectedWord);
	console.log(hiddenWord);
	// * Displaying board in web page
	// const wordDisplay = document.getElementById("wordDisplay");
	// wordDisplay.innerHTML = hiddenWord.join(" ");
}

// const gameChoice = document.getElementById("gameChoice");
// const submitBtn = document.getElementById("submitBtn");
// const choice = "";

// submitBtn.addEventListener("click", (e) => {
// 	e.preventDefault();
// 	const choice = gameChoice.value;
// 	console.log(choice);
// 	gameChoice.value = "";
// });
