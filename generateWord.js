import { data } from "./data.js";

let selectedWordUpd, selectedWordArrUpd, hiddenWordArrUpd;
export function generateWord(
	category,
	difficulty,
	selectedWord,
	selectedWordArr,
	hiddenWordArr
) {
	[selectedWordUpd, selectedWordArrUpd, hiddenWordArrUpd] = generate(
		selectedWord,
		category,
		difficulty,
		selectedWordArr,
		hiddenWordArr
	);

	console.log(selectedWordUpd);

	return [selectedWordUpd, selectedWordArrUpd, hiddenWordArrUpd];
}

function generate(
	selectedWord,
	category,
	difficulty,
	selectedWordArr,
	hiddenWordArr
) {
	selectedWord =
		data[category][difficulty][
			Math.floor(Math.random() * data[category][difficulty].length)
		].toLowerCase();
	selectedWord.split(" ").forEach((word) => {
		let eachWord = word.split("");
		selectedWordArr.push(eachWord);
		hiddenWordArr.push(Array(eachWord.length).fill("_"));
	});

	return [selectedWord, selectedWordArr, hiddenWordArr];
}
