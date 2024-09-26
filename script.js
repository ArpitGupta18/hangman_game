const animals = {
	easy: [
		"cat",
		"dog",
		"bat",
		"ant",
		"cow",
		"rat",
		"bee",
		"fox",
		"owl",
		"pig",
	],

	medium: [
		"tiger",
		"horse",
		"snake",
		"zebra",
		"panda",
		"sheep",
		"otter",
		"koala",
		"beaver",
		"donkey",
	],

	hard: [
		"elephant",
		"crocodile",
		"chimpanzee",
		"rhinoceros",
		"alligator",
		"kangaroo",
		"hippopotamus",
		"orangutan",
		"armadillo",
		"aardvark",
	],
};

const movies = {
	easy: [
		"Up",
		"Jaws",
		"Rocky",
		"Frozen",
		"Titanic",
		"Gladiator",
		"Shrek",
		"Cars",
		"Aliens",
		"Speed",
	],
	medium: [
		"The Matrix",
		"Iron Man",
		"Star Wars",
		"The Godfather",
		"Inception",
		"Black Panther",
		"Toy Story",
		"The Lion King",
		"Jurassic Park",
		"Forrest Gump",
	],
	hard: [
		"The Silence of the Lambs",
		"Eternal Sunshine of the Spotless Mind",
		"No Country for Old Men",
		"Pirates of the Caribbean",
		"The Curious Case of Benjamin Button",
		"The Lord of the Rings",
		"Harry Potter and the Prisoner of Azkaban",
		"Indiana Jones and the Last Crusade",
		"Guardians of the Galaxy",
		"The Good, the Bad and the Ugly",
	],
};

const countries = {
	easy: [
		"Peru",
		"Italy",
		"Japan",
		"India",
		"Chile",
		"Kenya",
		"Nepal",
		"Spain",
		"Cuba",
		"Egypt",
	],
	medium: [
		"Germany",
		"Ireland",
		"Nigeria",
		"Austria",
		"Vietnam",
		"Belgium",
		"Morocco",
		"Hungary",
		"Sweden",
		"Finland",
	],
	hard: [
		"Argentina",
		"Philippines",
		"Switzerland",
		"Afghanistan",
		"Luxembourg",
		"Uzbekistan",
		"Kazakhstan",
		"Saudi Arabia",
		"Turkmenistan",
		"Papua New Guinea",
	],
};

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
let selectedWordArr = [];
let hiddenWordArr = [];

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
	// console.log(categoryName);
	category = categoryName;
	categorySelection.style.display = "none";
	difficultySelection.style.display = "block";
}

function handleDifficultyClick() {
	const difficultyName = this.getAttribute("name");
	// console.log(difficultyName);
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
				animals[difficulty][
					Math.floor(Math.random() * animals[difficulty].length)
				].toLowerCase();
			selectedWord.split(" ").forEach((word) => {
				let eachWord = word.split("");
				selectedWordArr.push(eachWord);
				hiddenWordArr.push(Array(eachWord.length).fill("_"));
			});
			break;

		case "movies":
			selectedWord =
				movies[difficulty][
					Math.floor(Math.random() * movies[difficulty].length)
				].toLowerCase();
			selectedWord.split(" ").forEach((word) => {
				let eachWord = word.split("");
				selectedWordArr.push(eachWord);
				hiddenWordArr.push(Array(eachWord.length).fill("_"));
			});
			break;

		case "countries":
			selectedWord =
				countries[difficulty][
					Math.floor(Math.random() * countries[difficulty].length)
				].toLowerCase();
			selectedWord.split(" ").forEach((word) => {
				let eachWord = word.split("");
				selectedWordArr.push(eachWord);
				hiddenWordArr.push(Array(eachWord.length).fill("_"));
			});
			break;

		default:
			console.log("Error");
	}

	console.log(selectedWordArr);
	console.log(hiddenWordArr);
	// * Displaying board in web page
	// const wordDisplay = document.getElementById("wordDisplay");
	// wordDisplay.innerHTML = hiddenWordArr.join(" ");
}
