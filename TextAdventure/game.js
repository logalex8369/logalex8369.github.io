/*
World Map Key:

" ":								floor
"↑", "↓", "←", "→":	conveyor belt
"⇵":								elevator
"K":								key
"D":								locked door
"B":								bully
"H":								hole
"!":								item
*/

/*
Wall Key:

Straight:	"─", "│", "┼", "🞎"
Angles:		"┌", "┐", "└", "┘"
Combined:	"┬", "┴", "┤", "├"
Ends:			"╷", "╵", "╶", "╴"

*/

let player = {}
let world_map = [
[	["┌","─","─","─","─","─","─","┐"],
	["│"," "," "," "," "," "," ","│"],
	["│"," ","╶","┐"," ","🞎"," ","│"],
	["│"," "," ","╵"," "," "," ","│"],
	["│","B"," "," ","🞎"," ","╶","┤"],
	["│","↑","🞎"," "," "," "," ","│"],
	["│","↑","K","🞎"," ","┌","D","┤"],
	["│","↑"," "," "," ","│","⇵","│"],
	["└","─","─","─","─","┴","─","┘"] ],
	
[	["┌","─","─","─","─","─","─","┐"],
	["│","!","⇵"," ","H"," ","K","│"],
	["├","╴"," ","╶","┬","D","─","┤"],
	["│"," "," "," ","╵"," "," ","│"],
	["│","↓","╷"," "," ","╷"," ","│"],
	["│","↓","│"," "," ","│"," ","│"],
	["│","↓","└","╴"," ","╵"," ","│"],
	["│","!","B"," "," "," ","⇵","│"],
	["└","─","─","─","─","─","─","┘"] ]
]
let player_map = [
[	["┌──────┐"],
	["│      │"],
	["│ ╶┐ 🞎 │"],
	["│  ╵   │"],
	["│   🞎 ╶┤"],
	["│↑🞎    │"],
	["│↑!🞎 ┌D┤"],
	["│↑   │⇵│"],
	["└────┴─┘"] ],
	
[	["┌──────┐"],
	["│!⇵   !│"],
	["├╴ ╶┬D─┤"],
	["│   ╵  │"],
	["│↓╷  ╷ │"],
	["│↓│  │ │"],
	["│↓└╴ ╵ │"],
	["│!    ⇵│"],
	["└──────┘"] ]
]
let simple_map = [
[	["┌","─","─","─","─","─","─","┐"],
	["│"," "," "," "," "," "," ","│"],
	["│"," ","╶","┐"," ","🞎"," ","│"],
	["│"," "," ","╵"," "," "," ","│"],
	["│"," "," "," ","🞎"," ","╶","┤"],
	["│"," ","🞎"," "," "," "," ","│"],
	["│"," "," ","🞎"," ","┌","D","┤"],
	["│"," "," "," "," ","│"," ","│"],
	["└","─","─","─","─","┴","─","┘"] ],
	
[	["┌","─","─","─","─","─","─","┐"],
	["│"," "," "," "," "," "," ","│"],
	["├","╴"," ","╶","┬","D","─","┤"],
	["│"," "," "," ","╵"," "," ","│"],
	["│"," ","╷"," "," ","╷"," ","│"],
	["│"," ","│"," "," ","│"," ","│"],
	["│"," ","└","╴"," ","╵"," ","│"],
	["│"," "," "," "," "," "," ","│"],
	["└","─","─","─","─","─","─","┘"] ]
]

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
	player = {"gender": gender, "age": age, "skincolor": skincolor, "name": name, "pos_x": 4, "pos_y": 1, "pos_z": 0};
	go();
}

function pastLogin() {
	var name = localStorage.getItem("pastName");
	var image = localStorage.getItem("pastLink");
	document.getElementById('youAre').innerHTML = 'console.log("Hello ' + name + '. This will be your avatar:");';
	document.getElementById('image').src = image;
	console.log("Hello " + name + ". This will be your avatar:");
	go();
}

function makePerson(g,a,sc) {
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

function go() {
	let text = "";
	console.log("")
	console.log(" You wake up in an empty abbey and don't remember anything about how you got there or what your name even is.")
	console.log("You have a scar on your left cheek. You guess that some bullies probably beat you up and left you here.")
	console.log("Thankfully, they aren't here anymore, so you can explore now. What direction do you walk?")
}

function move(x,y,z) {
	let x_want = player.pos_x + x;
	let y_want = player.pos_y + y;
	let z_want = player.pos_z + z;
	
	if (simple_map[z_want][y_want][x_want] == " ") {
		player = {"gender": player.gender, "age": player.age, "skincolor": player.skincolor, "name": player.name, "pos_x": x_want, "pos_y": y_want, "pos_z": z_want};
	} else if (simple_map[z_want][y_want][x_want] == "D") {
		console.log("You bump into a door.");
	} else {
		console.log("You bump into a wall.");
	}
	console.log(player_map[player.pos_z])
}