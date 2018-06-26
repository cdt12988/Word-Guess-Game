var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
	
ctx.strokeStyle="#57585D";

// Top horizontal bar

ctx.moveTo(70, 45);
ctx.lineTo(175-30, 45);
ctx.stroke();

// Rope from top bar

ctx.moveTo(70, 45);
ctx.lineTo(70, 65);
ctx.stroke();

// Main vertical post

ctx.moveTo(175-30, 45);
ctx.lineTo(175-30, 200);
ctx.stroke();

// Bottom horizontal bar

ctx.moveTo(70-30, 200);
ctx.lineTo(245-30, 200);
ctx.stroke();

// Bottom diagonal supports

ctx.moveTo(175-30, 175);
ctx.lineTo(150-30, 200);
ctx.stroke();
ctx.moveTo(175-30, 175);
ctx.lineTo(200-30, 200);
ctx.stroke();

// Stickman:
  
function drawHead() {
	ctx.strokeStyle="#57585D";
	ctx.beginPath();
	ctx.arc(70, 80, 15, 0, 2*Math.PI);
	ctx.stroke();
}

function drawBody() {
	ctx.strokeStyle="#57585D";
	ctx.moveTo(70, 95);
	ctx.lineTo(70, 125);
	ctx.stroke();
}

function drawLeftArm() {
	ctx.strokeStyle="#57585D";
	ctx.moveTo(70, 95);
	ctx.lineTo(60, 125);
	ctx.stroke();
}

function drawRightArm() {
	ctx.strokeStyle="#57585D";
  	ctx.moveTo(70, 95);
	ctx.lineTo(80, 125);
	ctx.stroke();
}

function drawLeftLeg() {
	ctx.strokeStyle="#57585D";
	ctx.moveTo(70, 125);
	ctx.lineTo(60, 155);
	ctx.stroke();
}

function drawRightLeg() {
	ctx.strokeStyle="#57585D";
	ctx.moveTo(70, 125);
	ctx.lineTo(80, 155);
	ctx.stroke();
}

function clearStickman() {
	
	ctx.strokeStyle="#E1E8F0";
	
	for(var i=0; i<11; i++) {
		
		// Head
		ctx.beginPath();
		ctx.arc(70, 80, 15, 0, 2*Math.PI);
		ctx.stroke();
		
		// Body
		ctx.moveTo(70, 95);
		ctx.lineTo(70, 125);
		ctx.stroke();
		
		// Left Arm
		ctx.moveTo(70, 95);
		ctx.lineTo(60, 125);
		ctx.stroke();
		
		// Right Arm
	  	ctx.moveTo(70, 95);
		ctx.lineTo(80, 125);
		ctx.stroke();
	
		// Left Leg
		ctx.moveTo(70, 125);
		ctx.lineTo(60, 155);
		ctx.stroke();
	
		// Right Leg
		ctx.moveTo(70, 125);
		ctx.lineTo(80, 155);
		ctx.stroke();

	}
}
