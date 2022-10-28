var selectedWord = "";
var countCorrect = 0;

function clearWords() {
  document.getElementById("unscrambled").innerHTML=""
}
function nextWord() {
  debugMode = 1;
  
  const allWords = ["Costumes", "Monster", "Disguise", "Ghost", "Witch", "Pumpkin", "Candle", "Zombie", "Frankenstein", "October", "Scarecrow", "Pirate", "Crow", "Cat", "Broomstick", "Vampire", "Prince", "Princess", "Candy", "Werewolf", "Mask", "Spell", "Goblin", "Ghoul", "Alien", "Mummy", "Spooky", "Creepy", "Slimy", "Fangs", "Blood", "Skeleton", "Graveyard", "Party", "Screaming", "Bats", "Skull", "Wicked", "Scary"];
  const funnyWords = ["Which", "Frank Einstein", "Vampirate", "Werewalffle", "Mommy", "Grave Yard Sale", "Neil A. an Alien"];
  if (debugMode == 1) {
    if (Math.floor(Math.random() * 2) == 0) {
      let randomIndex = Math.floor(Math.random() * (funnyWords.length - 1)); 
      var currentWord = funnyWords[randomIndex];
    } else {
      let randomIndex = Math.floor(Math.random() * (allWords.length - 1)); 
      var currentWord = allWords[randomIndex];
    }
  } else {
    if (Math.floor(Math.random() * 10) == 0) {
      let randomIndex = Math.floor(Math.random() * (funnyWords.length - 1)); 
      var currentWord = funnyWords[randomIndex];
    } else {
      let randomIndex = Math.floor(Math.random() * (allWords.length - 1)); 
      var currentWord = allWords[randomIndex];
    }
  }
  
  document.getElementById("scrambledWord").innerHTML = currentWord.toLowerCase()
    .split("") 
    .sort(() => Math.random() - 0.5) 
    .join(""); 
  return currentWord;

}

function check() {
  if (selectedWord.toLowerCase() === document.getElementById("myWord").value.toLowerCase().trim()) {
    if (document.getElementById('check1').checked) {
      document.getElementById("myWord").style.background = "#00b000"
    }
    document.getElementById("unscrambled").innerHTML += " " + selectedWord + "<br>";
    countCorrect++;
    if (document.getElementById('check2').checked) {
      alert("You have " + countCorrect + " correct!")
    }
    selectedWord = nextWord();
  } else {
    if (document.getElementById('check1').checked) {
      document.getElementById("myWord").style.background = "#cf2222"
    }
    document.getElementById("unscrambled").innerHTML += " " + document.getElementById("myWord").value.charAt(0).toUpperCase().trim() + document.getElementById("myWord").value.slice(1).toLowerCase().trim();
    if (countCorrect == 1) {
      alert("Game Over. You unscrambled 1 word correctly")
    } else {
      alert("Game Over. You unscrambled " + countCorrect + " words correctly")
    }
    countCorrect = 0;
  }
}

function giveUp() {
  if (document.getElementById('check1').checked) {
    document.getElementById("myWord").style.background = "#cf2222"
  }
  document.getElementById("myWord").value = selectedWord;
  if (countCorrect == 1) {
    alert("Game Over. You unscrambled 1 word correctly")
  } else {
    alert("Game Over. You unscrambled " + countCorrect + " words correctly")
  }
  countCorrect = 0;
}

selectedWord = nextWord();