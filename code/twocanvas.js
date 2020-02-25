var canvas1 = document.getElementById("canvas1");
var ctx1 = canvas1.getContext("2d");
var canvas2 = document.getElementById("canvas2");
var ctx2 = canvas2.getContext("2d");
let i = 0

function primacanvas() {
ctx1.rect(20,20,100-i,100-i);
ctx1.stroke();
i=i-1;
ctx1.font="20px Helvetica";
ctx1.strokeText("                  ",10,10);
ctx1.strokeText("wow" +i, 10,10);

}

function secondacanvas() {
ctx2.fillStyle = "white";
ctx2.fillRect(0, 0, ctx2.canvas.width, ctx2.canvas.height)
ctx2.rect(20,20,100-i,100-i);
ctx2.stroke()

i=i-1}
