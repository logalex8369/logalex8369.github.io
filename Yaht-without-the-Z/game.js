function roll() {
  let rolledDice = [];
  let dontHold = [];
  for (i = 0; i < 5; i++) {
    rolledDice.push(Math.floor(Math.random() * (6)) + 1);
    if (document.getElementById("die"+i+"Image").src.indexOf("Red") == -1){
      dontHold.push(i)
    }
  }

  for(let i = 0; i < rolledDice.length; i++) {
    if (dontHold.includes(i)) {
      document.getElementById("die"+i+"Image").src="/Yaht-without-the-Z/img/dice/dieWhite_border"+rolledDice[i]+".png"; 
    }
  }
}

function toggleHold (diceSelect){
  if (document.getElementById("die"+diceSelect+"Image").src.indexOf("0") == -1) {  
    if (document.getElementById("die"+diceSelect+"Image").src.indexOf("Red") == -1) {
      document.getElementById("die"+diceSelect+"Image").src = document.getElementById("die"+diceSelect+"Image").src.replace("dieWhite", "dieRed");
    } else {
      document.getElementById("die"+diceSelect+"Image").src = document.getElementById("die"+diceSelect+"Image").src.replace("dieRed", "dieWhite");
    }
  }
  
}