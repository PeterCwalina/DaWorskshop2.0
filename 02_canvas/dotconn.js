//Team SlavSquad
//SofDev Period 8
//K02 connecting the dots
//2019-2-1
var c = document.getElementById("playground");
var ctx = c.getContext("2d");
//previous dots coords
var pX = null;
var pY = null;

function clearTime() {
  //clears entire canvas by clearing from x=0 to x=width and from y=0 to y=height.
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  //reset the coords for previous dot
  pX = null;
  pY = null;
}


c.addEventListener('click', function(e) {
  e.preventDefault();
  //red dots
  ctx.fillStyle = "#FF0000";
  //if there exists a previous dot
  if (pX != null){
    //draw a line from the preious dot to the new dot
    ctx.beginPath();
    ctx.moveTo(pX,pY);
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    //draw a dot in the new place
    ctx.beginPath()
    ctx.ellipse(e.offsetX, e.offsetY, 3,3, 0, 0, 2 * Math.PI);
    ctx.fill();
    //cover up the line in the previous dot with a new dot
    ctx.beginPath();
    ctx.ellipse(pX, pY, 3,3, 0, 0, 2 * Math.PI);
    ctx.fill();
    //set it so that the next dot can connect to this one
    pX = e.offsetX;
    pY = e.offsetY;

  }
  else{
    //no other dot exists so just draw a dot
    ctx.beginPath();
    ctx.ellipse(e.offsetX, e.offsetY, 3,3, 0, 0, 2 * Math.PI);
    //fills ellipse with color.
    ctx.fill();
    pX = e.offsetX;
    pY = e.offsetY;
  }
}
);
