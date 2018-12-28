var canvas = document.getElementById("canv");
var ctx = canvas.getContext("2d");

// ##################################################
ctx.beginPath(); // drawing the circle

ctx.strokeStyle = "green";
ctx.lineWidth = 3;
ctx.arc(250, 100, 50, 0, Math.PI * 2);

ctx.stroke();

// ##################################################
ctx.beginPath(); //drawing the body

ctx.strokeStyle = "green";
ctx.lineWidth = 3;
ctx.moveTo(250, 150);
ctx.lineTo(250, 300);

ctx.stroke();

// ##################################################
ctx.beginPath(); //now drawing the legs

ctx.strokeStyle = "green"; // left leg
ctx.lineWidth = 3;
ctx.moveTo(250, 300);
ctx.lineTo(180, 450);

ctx.stroke();

//
ctx.beginPath(); //drawing the right legs

ctx.strokeStyle = "green";
ctx.lineWidth = 3;
ctx.moveTo(250, 300);
ctx.lineTo(320, 450);

ctx.stroke();

//##############################
ctx.beginPath(); //drawing the hands

ctx.strokeStyle = "green";
ctx.lineWidth = 3;
ctx.moveTo(150, 160);
ctx.lineTo(250, 220);
ctx.lineTo(350, 160);

ctx.stroke();

//#############################
ctx.beginPath(); //drawing the left eye

ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.moveTo(220, 90);
ctx.lineTo(235, 90);

ctx.stroke();

ctx.beginPath(); //drawing the right eye

ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.arc(270, 90, 5, 0, Math.PI * 2);

ctx.stroke();

//##################################
ctx.beginPath(); //drawing the nose

ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.moveTo(250, 90);
ctx.lineTo(250, 110);

ctx.stroke();

//######################
ctx.beginPath(); //drawing the lips

ctx.arc(250, 130, 10, 0, Math.PI, false);
ctx.closePath();
ctx.lineWidth = 3;
ctx.fillStyle = "red";
ctx.fill();
ctx.strokeStyle = "black";

ctx.stroke();
