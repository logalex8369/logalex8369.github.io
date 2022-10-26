/********************************************************************
  --- Now that we dont have to reload the page to get a new word, we can actually build a game --- 
  TODO 8:
    - The UI is BORING! It needs styling and images
*********************************************************************/


var selectedWord = "";
//TODO: countcorrect variable not globally transported
let countCorrect = 0;
let gameOver = false;
lucky = 0;
luckyAmount = 0;

// This is a placeholder. You will need to move code into this funcation as part of the assignment. HINT -- the code you want to move into this function is above. :)
function nextWord() {
  // Our master array of Halloween words.  Note how it is declared as a CONST. Thats because we dont want anything changing these values
  const allWords = ["Costumes", "Monster", "Disguise", "Ghost", "Witch", "Pumpkin", "Candle", "Zombie", "Frankenstein", "October", "Scarecrow", "Pirate", "Crow", "Cat", "Broomstick", "Vampire", "Prince", "Princess", "Candy", "Werewolf", "Mask", "Spell", "Goblin", "Ghoul", "Alien", "Mummy", "Spooky", "Creepy", "Slimy", "Fangs", "Blood", "Skeleton", "Graveyard", "Party", "Screaming", "Bats", "Skull", "Wicked", "Scary"];

  //Select a random word from the "allWords" array and assign it to a variable called "selectedWord"
  let randomIndex = Math.floor(Math.random() * (allWords.length - 1)); //Don't worry about this math, but it will select a random number between 0 and the last index of the allWords array.
  let currentWord = allWords[randomIndex]; // Use that random index in allWords and set that to a new variable that will hold our selectedWord.

  //Scramble the selectedWord and display it inside of a div called "scrambledWord"
  document.getElementById("scrambledWord").innerHTML = currentWord.toLowerCase()
    .split("") //This will split the word into an array of letters
    .sort(() => Math.random() - 0.5) //This will randomly sort the array of letters
    .join(""); // Now we want to join all those array elements back together into a string
  return currentWord;

}

//TODO: textbox color not working properly
// This function is called when the user clicks on the "Check" button.
function check() {
  if (selectedWord.toLowerCase() === document.getElementById("myWord").value.toLowerCase().trim()) {
    document.getElementById("myWord").style.background = "#00b000"
    countCorrect++;
    alert("You have " + countCorrect + " correct!")
    document.getElementById("unscrambled").innerHTML += "<br>" + selectedWord;
    selectedWord = nextWord();
    document.getElementById("myWord").style.background = "#ffffff"
  } else {
    document.getElementById("myWord").style.background = "#cf2222"
    if (countCorrect == 1) {
      alert("You unscrambled 1 word correctly")
    } else {
      alert("You unscrambled " + countCorrect + " words correctly")
    }
    let gameOver = true;
    let countCorrect = 0;
    document.getElementById("myWord").style.background = "#ffffff"
    return gameOver;
  }
}

//This function gets called when the user clicks on the "Give Up" button.
function giveUp() {
  document.getElementById("myWord").style.background = "#cf2222"
  document.getElementById("myWord").value = selectedWord;
  if (countCorrect == 1) {
    alert("You unscrambled 1 word correctly")
  } else {
    alert("You unscrambled " + countCorrect + " words correctly")
  }
  let gameOver = true;
  let countCorrect = 0;
  document.getElementById("myWord").style.background = "#ffffff"
  return countCorrect;
  return gameOver;
}

selectedWord = nextWord();