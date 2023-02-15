if (localStorage.getItem("level") === null) {
	localStorage.setItem("level", 1);
}
document.getElementById("level").innerHTML = "Level " + localStorage.getItem("level") + ":";

function roll() {
	let number = Math.ceil(Math.random() * localStorage.getItem("level"));
	document.getElementById("number").innerHTML = number;
	if (number == localStorage.getItem("level")) {
		if (Number(localStorage.getItem("level")) + 1 == 13) {
			localStorage.setItem("level", Number(localStorage.getItem("level")) + 2);
		document.getElementById("level").innerHTML = "Level " + localStorage.getItem("level") + ":";
		} else {
			localStorage.setItem("level", Number(localStorage.getItem("level")) + 1);
			document.getElementById("level").innerHTML = "Level " + localStorage.getItem("level") + ":";
		}
	}
}