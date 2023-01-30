let rolledDice = [0, 0, 0, 0, 0];
let timesRolled = 0;
let upperGameScore = 0;
let lowerGameScore = 0;
let gameScore = 0;
let scoreForThisRound = 0;
diceRollSFX = new Audio("https://logalex8369githubio.logalex8369.repl.co/Yaht-with-the-Z/diceroll.mp3");

function roll() {
	if (timesRolled < 3) {
		if (diceRollSFX.ended == false) {
			diceRollSFX.currentTime = 0.0;
		}
		diceRollSFX.play()
		let list = [];
		for (i = 0; i < 5; i++) {
			list.push(Math.floor(Math.random() * (6)) + 1);
		}
		for (let i = 0; i < list.length; i++) {
			let source = document.getElementById("die" + i + "Image").src;
			if (source.includes("dieWhite")) {
				document.getElementById("die" + i + "Image").src = "/Yaht-with-the-Z/img/dice/dieWhite_border" + list[i] + ".png";
			}
		}
		timesRolled++;
	}
}

function toggleHold(diceSelect) {
	if (document.getElementById("die" + diceSelect + "Image").src.indexOf("0") == -1) {
		if (document.getElementById("die" + diceSelect + "Image").src.indexOf("Red") == -1) {
			document.getElementById("die" + diceSelect + "Image").src = document.getElementById("die" + diceSelect + "Image").src.replace("dieWhite", "dieRed");
		} else {
			document.getElementById("die" + diceSelect + "Image").src = document.getElementById("die" + diceSelect + "Image").src.replace("dieRed", "dieWhite");
		}
	}

}

function add(number, type, lowOrUp) {
	document.getElementById(type + "Count").innerHTML = number;
	document.getElementById(type + "Score").innerHTML = scoreForThisRound;
	if (lowOrUp == "lower") {
		lowerGameScore += scoreForThisRound;
		document.getElementById("lowerTotalScore").innerHTML = lowerGameScore;
	} else {
		upperGameScore += scoreForThisRound;
		document.getElementById("upperTotalScore").innerHTML = upperGameScore;
	}
	gameScore += scoreForThisRound;
	document.getElementById("totalScore").innerHTML = gameScore;
}

function assign(selectedType, selectedNumber) {
	timesRolled = 0;
	scoreForThisRound = 0;
	if (selectedType == "number") {
		let countOfValidDice = 0;


		for (let heldDieSrc of getHeldDice()) {
			if (selectedNumber == getDieValue(heldDieSrc)) {
				countOfValidDice++;
			}
		}

		scoreForThisRound = selectedNumber * countOfValidDice;
		add(countOfValidDice, selectedNumber, "upper");
	} else if (selectedType == "ofAKind") {

	} else if (selectedType == "fullHouse") {

	} else if (selectedType == "straight") {

	} else if (selectedType == "yahtzee") {
		if ((getDieValue(getHeldDice()[0]) == getDieValue(getHeldDice()[1])) && (getDieValue(getHeldDice()[1]) == getDieValue(getHeldDice()[2])) && (getDieValue(getHeldDice()[2]) == getDieValue(getHeldDice()[3])) && (getDieValue(getHeldDice()[3]) == getDieValue(getHeldDice()[4]))) {
			scoreForThisRound = 50;
			add(5, "yahtzee", "lower");
		} else {
			scoreForThisRound = 0;
			add(0, "yahtzee", "lower");
		}
	} else if (selectedType == "chance") {
		for (let heldDieSrc of getHeldDice()) {
			scoreForThisRound += getDieValue(heldDieSrc);
		}
		add(5, "chance", "lower");
	}
	resetGame();
}

function resetGame() {
	let resetDice = [];
	for (let dieImage of document.querySelectorAll(".die > img")) {
		dieImage.src = "/Yaht-with-the-Z/img/dice/dieWhite_border0.png";
	}

	timesRolled = 0;
	if (gameScore > localStorage.getItem("highScore")) {
		localStorage.setItem("highScore", gameScore);
		document.getElementById("highScore").innerHTML = localStorage.getItem("highScore");
	}
	return resetDice;
}

function getHeldDice() {
	let heldDice = [];
	for (let die of document.querySelectorAll(".die > img")) {
		if (die.src.includes("Red")) {
			heldDice.push(die.src);
		}
	}
	return heldDice;
}

function getDieValue(imageSource) {
	return Number(imageSource.split("/img/")[1].replace(/[^0-9]/ig, ""));
}
