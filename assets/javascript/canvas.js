var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// function drawGallows() {
	
	ctx.strokeStyle="black";
	
  // Top horizontal
/*
  ctx.moveTo(100,25);
  ctx.lineTo(125,25);
  ctx.stroke();
*/
  
/*
	ctx.moveTo(85+30, 35);
	ctx.lineTo(150+30, 35);
	ctx.stroke();
*/

	ctx.moveTo(70, 45);
	ctx.lineTo(175-30, 45);
	ctx.stroke();

  // Rope from top
/*
  ctx.moveTo(100,25);
  ctx.lineTo(100,35);
  ctx.stroke();
*/

/*
	ctx.moveTo(85+30, 35);
	ctx.lineTo(85+30, 45);			
	ctx.stroke();
*/

	ctx.moveTo(70, 45);
	ctx.lineTo(70, 65);
	ctx.stroke();
	
/*
  // Long vertical post
  ctx.moveTo(125,25);
  ctx.lineTo(125,75);
  ctx.stroke();
*/

/*
	ctx.moveTo(150+30, 35);
	ctx.lineTo(150+30, 100);
	ctx.stroke();
*/

	ctx.moveTo(175-30, 45);
	ctx.lineTo(175-30, 200);
	ctx.stroke();

/*
  // Bottom horizontal base
  ctx.moveTo(100,75);
  ctx.lineTo(150,75);
  ctx.stroke();
*/

/*
	ctx.moveTo(85+15, 100);
	ctx.lineTo(205+15, 100);
	ctx.stroke();
*/

	ctx.moveTo(70-30, 200);
	ctx.lineTo(245-30, 200);
	ctx.stroke();

/*
  // Bottom diagonal supports
  ctx.moveTo(115,75);
  ctx.lineTo(125,65);
  ctx.stroke();
  ctx.moveTo(135,75);
  ctx.lineTo(125,65);
  ctx.stroke();
*/
// }

/*
	ctx.moveTo(125+30, 100);
	ctx.lineTo(150+30, 85);
	ctx.stroke();
	ctx.moveTo(175+30, 100);
	ctx.lineTo(150+30, 85);
	ctx.stroke();
*/

	ctx.moveTo(175-30, 175);
	ctx.lineTo(150-30, 200);
	ctx.stroke();
	ctx.moveTo(175-30, 175);
	ctx.lineTo(200-30, 200);
	ctx.stroke();

// drawGallows();


  // Stickman:
  
/*
// function drawHead() {
  // Head
  ctx.strokeStyle="black";
  ctx.beginPath();
  ctx.arc(100,40,5,0,2*Math.PI);		// X-cord: same as rope
  ctx.stroke();							// Y-cord: same as rope + radius
// }
*/

/*
	ctx.beginPath();
	ctx.arc(85+30, 52, 7, 0, 2*Math.PI);
	ctx.stroke();
*/

	ctx.beginPath();
	ctx.arc(70, 80, 15, 0, 2*Math.PI);
	ctx.stroke();

function drawBody() {
  // Body
  ctx.strokeStyle="black";
  ctx.moveTo(100,45);
  ctx.lineTo(100,55);
  ctx.stroke();
}

/*
	ctx.moveTo(115, 59);
	ctx.lineTo(115, 70);
	ctx.stroke();
*/

	ctx.moveTo(70, 95);
	ctx.lineTo(70, 125);
	ctx.stroke();

function drawLeftArm() {
  // Left Arm
  ctx.strokeStyle="black";
  ctx.moveTo(100,45);
  ctx.lineTo(95, 55);
  ctx.stroke();
}

/*
	ctx.moveTo(115, 59);
	ctx.lineTo(105, 70);
	ctx.stroke();
*/

	ctx.moveTo(70, 95);
	ctx.lineTo(60, 125);
	ctx.stroke();

function drawRightArm() {
  // Right Arm
  ctx.strokeStyle="black";
  ctx.moveTo(100,45);
  ctx.lineTo(105,55);
  ctx.stroke();
}

/*
	ctx.moveTo(115, 59);
	ctx.lineTo(125, 70);
	ctx.stroke();
*/

	ctx.moveTo(70, 95);
	ctx.lineTo(80, 125);
	ctx.stroke();

function drawLeftLeg() {
  // Left Leg
  ctx.strokeStyle="black";
  ctx.moveTo(100,55);
  ctx.lineTo(95, 65);
  ctx.stroke();
}

/*
	ctx.moveTo(115, 70);
	ctx.lineTo(105, 81);
	ctx.stroke();
*/

	ctx.moveTo(70, 125);
	ctx.lineTo(60, 155);
	ctx.stroke();

function drawRightLeg() {
  // Right Leg
  ctx.strokeStyle="black";
  ctx.moveTo(100,55);
  ctx.lineTo(105,65);
  ctx.stroke();
}

/*
	ctx.moveTo(115, 70);
	ctx.lineTo(125, 81);
	ctx.stroke();
*/

	ctx.moveTo(70, 125);
	ctx.lineTo(80, 155);
	ctx.stroke();

function clearCanvas() {
//	var canvas = document.getElementById('myCanvas'),
//    ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function clearStickman() {
	
	ctx.strokeStyle="white";
	
	for(var i=0; i<11; i++) {
	
	  // Head
	  ctx.beginPath();
	  ctx.arc(100,40,5,0,2*Math.PI);		// X-cord: same as rope
	  ctx.stroke();							// Y-cord: same as rope + radius
	
	  // Body
	  ctx.moveTo(100,45);
	  ctx.lineTo(100,55);
	  ctx.stroke();
	  // Left Arm
	  ctx.moveTo(100,45);
	  ctx.lineTo(95, 55);
	  ctx.stroke();
	
	  // Right Arm
	  ctx.moveTo(100,45);
	  ctx.lineTo(105,55);
	  ctx.stroke();
	
	  // Left Leg
	  ctx.moveTo(100,55);
	  ctx.lineTo(95, 65);
	  ctx.stroke();
	
	  // Right Leg
	  ctx.moveTo(100,55);
	  ctx.lineTo(105,65);
	  ctx.stroke();
	}
}
