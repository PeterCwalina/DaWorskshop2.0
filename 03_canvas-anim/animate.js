//Team <insert team name here>
//Sofdev pd8
//K03 - They lock us in the tower whenever we get caught
//2019-2-4
var c = document.getElementById('playground');
var ctx = c.getContext("2d");
var requestID;
var radius = 0;
var growing = true;
var dotButton = document.getElementById("circle");
var stopButton = document.getElementById("stop");
var clear = function(e) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

var drawDotH = function(e){
  //so that it wont make multiple animation frame requests
  if (requestID != null){
    e.preventDefault()
  }
  else{
    //start the recursion
    requestID = window.requestAnimationFrame(drawDot);
  }
}

var drawDot = function(e) {
  //clear before redrawing
  clear(e);
  //start drawing new circle
  ctx.beginPath();
  ctx.arc(c.width / 2, c.height / 2, radius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
  console.log(radius);
  //if its reached max size make it stop growing
  if (radius > c.height/2){
    growing = false;
  }
  //too small make it start growing
  if (radius < 1){
    growing = true;
  }
  //if growing increase radius else decrease it
  if (growing) {
    radius += 0.5;
  }
  else{
    radius -= 0.5;
  }
  //recursion
  requestID = window.requestAnimationFrame(drawDot);


}
var stopIt = function() {
  console.log(requestID);
  //cancel the animation frame
  window.cancelAnimationFrame(requestID);
  //reset the request id so that the preventDefault wont stop you from hitting the button again
  requestID = null;
};
//event listeners
dotButton.addEventListener("click", drawDotH);
stopButton.addEventListener("click", stopIt);
