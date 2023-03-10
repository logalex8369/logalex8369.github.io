let word = "";
let story = prompt("Paste the story that you would like to mad lib-inate");
let words = [];
for(let i = 0; i < Math.random() * story.split(" ").length / 3 + 1; i++){
	word = story.split(" ")[Math.floor(Math.random() * story.split(" ").length)];
	if (word != "a" && word != "an" && word != "the") {
		console.log(word);
		words[words.length] = word;
	}
}