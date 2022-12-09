let rolledDice = [0, 0, 0, 0, 0];
let timesRolled = 0;
let gameScore = 0;

function roll() {
  if (timesRolled < 3) {
    let list = [];
    for (i = 0; i < 5; i++) {
      list.push(Math.floor(Math.random() * (6)) + 1);
    }
    for (let i = 0; i < list.length; i++) {
      let source = document.getElementById("die" + i + "Image").src;
      if (source.includes("dieWhite")) {
        document.getElementById("die" + i + "Image").src = "/Yaht-without-the-Z/img/dice/dieWhite_border" + list[i] + ".png";
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

function assign(selectedType, selectedNumber) {
  let scoreForThisRound = 0;
  if (selectedType == "number") {
    let countOfValidDice = 0;


    for (let heldDieSrc of getHeldDice()) {
      if (selectedNumber == getDieValue(heldDieSrc)) {
        countOfValidDice++;
      }
    }

    scoreForThisRound = selectedNumber * countOfValidDice;
    document.getElementById(selectedNumber + "Count").innerHTML = countOfValidDice;
    document.getElementById(selectedNumber + "Score").innerHTML = scoreForThisRound;
    upperGameScore += scoreForThisRound;
    document.getElementById("upperTotalScore").innerHTML = upperGameScore;
  } else if (selectedType == "ofAKind") {

  } else if (selectedType == "fullHouse") {
    
  } else if (selectedType == "straight") {

  } else if (selectedType == "yahtzee") {
    
  } else if (selectedType == "chance") {
    for (let heldDieSrc of getHeldDice()) {
      scoreForThisRound += getDieValue(heldDieSrc);
    }
    document.getElementById("chanceCount").innerHTML = 5;
    document.getElementById("chanceScore").innerHTML = scoreForThisRound;
    lowerGameScore += scoreForThisRound;
    document.getElementById("lowerTotalScore").innerHTML = lowerGameScore;
  }
  resetGame();
}

function resetGame() {
  let resetDice = [];
  for (let dieImage of document.querySelectorAll(".die > img")) {
    dieImage.src = "/Yaht-without-the-Z/img/dice/dieWhite_border0.png";
  }

  timesRolled = 0;
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
