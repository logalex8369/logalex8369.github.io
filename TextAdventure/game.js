submit(){
  var number = document.getElementById("gender").value;
  var gender = number.options[number.selectedIndex].text;
  let number = document.getElementById("age").value;
  var age = number.options[number.selectedIndex].text;
  let number = document.getElementById("skinColor").value;
  var skincolor = number.options[number.selectedIndex].text;
  var name = document.getElementById("name").value;
  image = "/TextAdventure/img/" + makePerson(gender, age, skincolor) + ".png"
}

makePerson(g, a, sc){
  if (a == "0-15"){
    if (g == "Boy") {
      if (sc == "Black") {
        image = "black_boy"
      } else {
        image = "white_boy"
      }
    } else {
      if (sc == "Black") {
        image = "black_girl"
      } else {
        image = "white_girl"
      }
    }
  } else if (a == "15-30") {
    if (g == "Boy") {
      if (sc == "Black") {
        image = "black_teen_boy"
      } else {
        image = "white_teen_boy"
      }
    } else {
      if (sc == "Black") {
        image = "black teen_girl"
      } else {
        image = "white_teen_girl"
      }
    }
  } else if (a == "30-50") {
    if (g == "Boy") {
      if (sc == "Black") {
        image = "black_adult_boy"
      } else {
        image = "white_adult_boy"
      }
    } else {
      if (sc == "Black") {
        image = "black_adult_girl"
      } else {
        image = "white_adult_girl"
      }
    }
  } else {
     if (g == "Boy") {
      if (sc == "Black") {
        image = "black_grandpa"
      } else {
        image = "white_grandpa"
      }
    } else {
      if (sc == "Black") {
        image = "black_grandma"
      } else {
        image = "white_grandma"
      }
    } 
  }
  return image;
}
