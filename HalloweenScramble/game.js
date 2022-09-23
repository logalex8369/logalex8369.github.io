/********************************************************************
  TODO
    - With one letter capitalized, it makes it too easy. The letters in the scrambled words, should all be either UPPER or lower case.  
    - When checking what you submitted, the comparision is case sensitive. You should make sure that the cases are the same when comparing the values
    - Right now you have to reload the page each time. That means the game really can't keep score. Alter the code so that when the player successfully unscrambles a word the game will call the nextWord function.  
    - We need to keep track of successfully unscrambled words.  There's a DIV in the HTML called "unscrambled", we need to populate it with the words when they are unscrambled
    - The UI is BORING! It needs styling and images 
*********************************************************************/

var counter = 0
// Our master array of Halloween words
const allWords = ["Costumes", "Monster", "Disguise", "Ghost", "Witch", "Pumpkin", "Candle", "Zombie", "Frankenstein", "October", "Scarecrow", "Pirate", "Crow", "Cat", "Broomstick", "Vampire", "Prince", "Princess", "Candy", "Werewolf", "Mask", "Spell", "Goblin", "Ghoul", "Alien", "Mummy", "Spooky", "Creepy", "Slimy", "Fangs", "Blood", "Skeleton", "Graveyard", "Party", "Screaming", "Bats", "Skull", "Wicked", "Scary"];

let selectedWord = allWords[Math.floor(Math.random() * (allWords.length - 1))];
  
  //Scramble the selectedWord and display it inside of a div
  document.getElementById("scrambledWord").innerHTML = selectedWord
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

// This is a placeholder. You will need to move code into this funcation as part of the assignment.
function nextWord(){
  //Select a random word from the "words" array and assign it to a variable called "selectedWord";
  let selectedWord = allWords[Math.floor(Math.random() * (allWords.length - 1))];
  
  //Scramble the selectedWord and display it inside of a div
  document.getElementById("scrambledWord").innerHTML = selectedWord
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
}

//A function that gets called when the user clicks on the Check button. 
function check() {
  if (selectedWord.toLowerCase === document.getElementById("myWord").value.toLowerCase) {
    counter++;
    alert("YES! You have "+ counter +" correct");
    selectedWord
    nextWord();
  }
}

//A function that gets called when the user clicks on the Give Up button.
function giveUp() {
  document.getElementById("myWord").value = selectedWord;
}