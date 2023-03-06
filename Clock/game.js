var canvas = document.getElementById("canvas");
var canvas2 = document.getElementById("canvas2");
var ctx = canvas.getContext("2d");
var ctx2 = canvas2.getContext("2d");
var radius = canvas.height / 2;
var radius2 = canvas2.height / 2;
ctx.translate(radius, radius);
ctx2.translate(radius2, radius2);
radius = radius * 0.90
document.getElementById("secondChanges").innerHTML = "Second changes watched: " + localStorage.getItem("seconds");
document.getElementById("minuteChanges").innerHTML = "Minute changes watched: " + localStorage.getItem("minutes");
document.getElementById("hourChanges").innerHTML = "Hour changes watched: " + localStorage.getItem("hours");
setInterval(drawClocks, 1000);

function drawClocks() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
	drawDigital(ctx2, radius2);
}

function drawFace(ctx, radius) {
  var grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = '#f8ffff';
  ctx.fill();
  grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
  grad.addColorStop(0, '#222244');
  grad.addColorStop(0.5, '#eeffff');
  grad.addColorStop(1, '#222244');
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius*0.1;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
  ctx.fillStyle = '#222244';
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  var ang;
  var num;
  ctx.font = radius*0.15 + "px arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  for(num = 1; num < 13; num++){
		ang = num * Math.PI / 6;
    ctx.rotate(ang);
		if (Math.round(num / 3) == num / 3) {
			ctx.font = radius*0.2 + "px arial";
			ctx.translate(0, -radius*0.85);
    	ctx.rotate(-ang);
    	ctx.fillText(num.toString(), 0, 0);
    	ctx.rotate(ang);
    	ctx.translate(0, radius*0.85);
			ctx.font = radius*0.15 + "px arial";
		} else {
    	ctx.translate(0, -radius*0.85);
    	ctx.rotate(-ang);
    	ctx.fillText(num.toString(), 0, 0);
    	ctx.rotate(ang);
    	ctx.translate(0, radius*0.85);
		}
		ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour=hour%12;
    hour=(hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    // second
    second=(second*Math.PI/30);
    drawHand(ctx, second, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}
function drawDigital(ctx2, radius2) {
	var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
	ctx2.fillStyle = "#f8ffff";
	ctx2.fillRect(-radius2 * 5 / 6, -radius2 / 4, radius2 * 5 / 3, radius2 / 2);
	ctx2.fillStyle = "#ff3333";
	ctx2.font = radius2 * 0.45 + "px digital7";
	ctx2.fillText(hour.toString().padStart(2, '0') + ":" + minute.toString().padStart(2, '0') + ":" + second.toString().padStart(2, '0'), -radius2 * 32 / 41, radius2 * 0.15);
	localStorage.setItem("seconds", Number(localStorage.getItem("seconds")) + 1);
	document.getElementById("secondChanges").innerHTML = "Second changes watched: " + localStorage.getItem("seconds");
	if (second == 0) {
		localStorage.setItem("minutes", Number(localStorage.getItem("minutes")) + 1);
		document.getElementById("minuteChanges").innerHTML = "Minute changes watched: " + localStorage.getItem("minutes");
		 if (minute == 0) {
			 localStorage.setItem("hours", Number(localStorage.getItem("hours")) + 1);
			 document.getElementById("hourChanges").innerHTML = "Hour changes watched: " + localStorage.getItem("hours");
		 }
	}
	
}