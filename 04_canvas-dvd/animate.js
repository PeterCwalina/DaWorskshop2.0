//<insert team name here>
//Sofdev pd8
//K04 - : What is it saving the screen from?
//2019-2-6
//canvas
var c = document.getElementById('playground');
//ctx of canvas
var ctx = c.getContext("2d");
//req id for animation frame
var requestID;
//starting radius of dot
var radius = 0;
//boolean for growing vs not growing
var growing = true
//button for dot
var dotButton = document.getElementById("circle");
//button to stop
var stopButton = document.getElementById("stop");
//button for the dvd animation
var dvdBut = document.getElementById("dvd");
//clears the canvas
var clear = function(e) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

//sets up dvd animation
var dvdLogoSetup = function() {
  //reset so no 2 animation frames exist at a time
  window.cancelAnimationFrame( requestID);
  //clear whats on the screen
  clear();
  //width and height of the picture
  var rectWidth = 100;
  var rectHeight = 50;
  //random starting positions
  var rectX = Math.floor(Math.random()*(c.width - rectWidth));
  var rectY = Math.floor(Math.random()*(c.height - rectHeight));
  //vectors
  var xVel = 1;
  var yVel = 1;
  //the new image
  var logo = new Image();
  logo.src = "logo_dvd.jpg"
  //funct to call itself for the animation
  var dvdLogo = function(){
    clear();
    // if its out of bounds on the x axis fix that
    if (rectX > c.width - 100||rectX < 0){
      xVel = -1 * xVel;
    }
    //if its out of bounds on the y axis fix that
    if (rectY > c.height - 50||rectY < 0){
      yVel = -1 * yVel;
    }
    //change the coords accordingly
    rectX = rectX + xVel;
    rectY = rectY + yVel;
    //draw the image at said coords
    ctx.beginPath();
    ctx.drawImage(logo, rectX,rectY,rectWidth,rectHeight);
    //recurse
    requestID = window.requestAnimationFrame(dvdLogo);
  }
  dvdLogo();

}

//draws ze dot
var drawDot = function(e) {
  window.cancelAnimationFrame(requestID);
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
dotButton.addEventListener("click", drawDot);
stopButton.addEventListener("click", stopIt);
dvdBut.addEventListener("click",dvdLogoSetup);
