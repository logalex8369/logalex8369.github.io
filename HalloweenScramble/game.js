/********************************************************************
  --- Now that we dont have to reload the page to get a new word, we can actually build a game --- 

  TODO 5: 
    - We need to keep track of successfully unscrambled words.  There's a DIV in the HTML called "unscrambled", we need to populate it with the words when they are unscrambled.
    - This is how you SET/GET the HTML of the "unscrambled" div:  document.getElementById("unscrambled").innerHTML="";
    - Think back to class when I showed you how we can add strings together.  That is what you want to do here.  You want to combine the existing string value of the "unscrambled" div with the string value of the unscrambled word. 

  TODO 8:
    - The UI is BORING! It needs styling and images
*********************************************************************/


var selectedWord = "";

let countCorrect = 0;
let gameOver = false;
lucky = 0;
luckyAmount = 0;

//TODO: "Save Changes" Button not working
const cb = document.getElementById('accept');
const btn = document.getElementById('btn');
const cb2 = document.getElementById('accept2');

btn.onclick = () => {
  alert(cb.value);
  alert(cb2.value);
  let correctAlert = cb.value;
  let correctAlert = cb2.value;
};

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


// This function is called when the user clicks on the "Check" button.
function check() {
  if (selectedWord.toLowerCase() === document.getElementById("myWord").value.toLowerCase().trim()) {
    alert("You have " + countCorrect + " correct!")
    document.getElementById("unscrambled").innerHTML="";
    countCorrect++;
    selectedWord = nextWord();
  } else {
    //TODO: Not executing
    if (countCorrect == 1) {
      alert("You unscrambled 1 word correctly")
    } else {
      alert("You unscrambled " + countCorrect + " words correctly")
    }
    let gameOver = true;
    let countCorrect = 0;
  }
}

//This function gets called when the user clicks on the "Give Up" button.
function giveUp() {
  document.getElementById("myWord").value = selectedWord;
  let gameOver = true;
  let countCorrect = 0;
  return countCorrect;
  return gameOver;
}

selectedWord = nextWord();