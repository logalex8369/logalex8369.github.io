function submit() {
  var gender = document.getElementById("gender").value;
  var age = document.getElementById("age").value;
  var skincolor = document.getElementById("skinColor").value;
  var name = document.getElementById("name").value;
	localStorage.setItem("pastName", name);
  var image = "/TextAdventure/img/" + makePerson(gender, age, skincolor) + ".png";
	localStorage.setItem("pastLink", image);
  document.getElementById('youAre').innerHTML = 'console.log("Hello ' + name + '. This will be your avatar:");';
	document.getElementById('image').src = image;
	console.log("Hello " + name + ". This will be your avatar:");
	go(name);
}

function pastLogin() {
	var name = localStorage.getItem("pastName");
	var image = localStorage.getItem("pastLink");
	document.getElementById('youAre').innerHTML = 'console.log("Hello ' + name + '. This will be your avatar:");';
	document.getElementById('image').src = image;
	console.log("Hello " + name + ". This will be your avatar:");
	go(name);
}

function makePerson(g, a, sc) {
  if (a == "from0to15") {
    if (g == "boy") {
      if (sc == "black") {
        image = "black_boy"
      } else {
        image = "white_boy"
      }
    } else {
      if (sc == "black") {
        image = "black_girl"
      } else {
        image = "white_girl"
      }
    }
  } else if (a == "from15to30") {
    if (g == "boy") {
      if (sc == "black") {
        image = "black_teen_boy"
      } else {
        image = "white_teen_boy"
      }
    } else {
      if (sc == "black") {
        image = "black teen_girl"
      } else {
        image = "white_teen_girl"
      }
    }
  } else if (a == "from30to50") {
    if (g == "boy") {
      if (sc == "black") {
        image = "black_adult_boy"
      } else {
        image = "white_adult_boy"
      }
    } else {
      if (sc == "black") {
        image = "black_adult_girl"
      } else {
        image = "white_adult_girl"
      }
    }
  } else {
    if (g == "boy") {
      if (sc == "black") {
        image = "black_grandpa"
      } else {
        image = "white_grandpa"
      }
    } else {
      if (sc == "black") {
        image = "black_grandma"
      } else {
        image = "white_grandma"
      }
    }
  }
  return image;
}

function go(name){
	
}