
var pic = document.getElementById("vimage");
var wipe = document.getElementById("but_clear");

//coords of last placed dot
var lastX = null;
var lastY = null;


//
var createDot = function(e)
{
  console.log("running . . .");

  //store click location, relative to "canvas"
  var newX = e.offsetX;
  var newY = e.offsetY;

  if ( lastX != null ) {
    e.preventDefault();
    var line = document.createElementNS(
      "http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", lastX);
    line.setAttribute("y1", lastY);
    line.setAttribute("x2", newX);
    line.setAttribute("y2", newY);
    line.setAttribute("stroke", "black")

    pic.appendChild(line);
  }

  var newdot = document.createElementNS(
    "http://www.w3.org/2000/svg", "circle");
  newdot.setAttribute("fill", "red");
  newdot.setAttribute("cx", newX);
  newdot.setAttribute("cy", newY);
  newdot.setAttribute("r", 10)

  pic.appendChild(newdot);

  lastX = newX;
  lastY = newY;
}

pic.addEventListener("click", createDot);


//sequentially remove all dots and lines from "canvas"
wipe.addEventListener(
  "click", function()
  {
    var fc = pic.firstChild;
    while(fc) {
      console.log("removing " + fc + "...");
      pic.removeChild(fc);
      fc = pic.firstChild;
    }
    lastX = null;
    lastY = null;
  });
