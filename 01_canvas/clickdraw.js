var state = true;
var c = document.getElementById("slate");
var ctx = c.getContext("2d");

function clearTime(){
  //clears entire canvas by clearing from x=0 to x=width and from y=0 to y=height.
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function switchTime(){
  //switches the state from rectangle to dot mode and vice versa.
  if (state){
    state = false;
  }
  else{
    state = true;
  }
}

function mainFunc(event){
  event.preventDefault();
  //if in rectangle state, draw rectangle at mouse location.
  if (state){
    //set fill color to red.
    ctx.fillStyle = "#FF0000";
    //offsetX and offsetY are the x and y coordinates of the mouse with reference to the canvas.
    ctx.fillRect(event.offsetX, event.offsetY, 150, 100);
  }
  //if in dot state, draw ellipse at mouse location.
  else {
    //set fill color to blue.
    ctx.fillStyle = "#0000FF";
    //beginPath starts the instructions for drawing an ellipse.
    ctx.beginPath();
    ctx.ellipse(event.offsetX, event.offsetY, 20, 20, 0, 0, 2 * Math.PI);
    //fills ellipse with color.
    ctx.fill();
  }
}
