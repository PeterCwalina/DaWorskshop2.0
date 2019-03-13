
var pic = document.getElementById("vimage");
var wipe = document.getElementById("but_clear");


var isWithinDot = function(x,y)
{
  var children = pic.children;
  var i;
  if (children.length <= 0){
    return null;
  }
  for (i = children.length - 1;i >= 0;i--){
    var child = children[i];
    var cX = child.getAttribute("cx");
    var cY = child.getAttribute("cy");
    var r = child.getAttribute("r");
    var diffX = x - cX;
    var diffY = y - cY;
    if (Math.sqrt((diffX * diffX)+(diffY * diffY)) <= r){
      return child;
    }
  }
  return null;
}

var createDot = function(e)
{
  console.log("running . . .");

  //store click location, relative to "canvas"
  var newX = e.offsetX;
  var newY = e.offsetY;

  var child = isWithinDot(newX,newY);

  if (child == null)
  {
    var newdot = document.createElementNS(
      "http://www.w3.org/2000/svg", "circle");
    newdot.setAttribute("fill", "red");
    newdot.setAttribute("cx", newX);
    newdot.setAttribute("cy", newY);
    newdot.setAttribute("r", 10)

    pic.appendChild(newdot);
  }
}

var changeDotColor = function(e)
{
  var newX = e.offsetX;
  var newY = e.offsetY;

  var child = isWithinDot(newX,newY);
  if (child != null){
    if (child.getAttribute("fill") == "red"){
      child.setAttribute("fill","blue");
    }
  }
}

var dot = function(e)
{
  var newX = e.offsetX;
  var newY = e.offsetY;

  var child = isWithinDot(newX,newY);
  if (child != null){
    if (child.getAttribute("fill") == "blue"){

      var newdot = document.createElementNS(
        "http://www.w3.org/2000/svg", "circle");
      newdot.setAttribute("fill", "red");
      newdot.setAttribute("cx", Math.random()*500);
      newdot.setAttribute("cy", Math.random()*500);
      newdot.setAttribute("r", 10)

      pic.appendChild(newdot);

      pic.removeChild(child);
    }
    if (child.getAttribute("fill") == "red"){
      child.setAttribute("fill","blue");
    }
  }
  if (child == null)
  {
    var newdot = document.createElementNS(
      "http://www.w3.org/2000/svg", "circle");
    newdot.setAttribute("fill", "red");
    newdot.setAttribute("cx", newX);
    newdot.setAttribute("cy", newY);
    newdot.setAttribute("r", 10)

    pic.appendChild(newdot);
  }

}
//pic.addEventListener("click",changeDotColor); these where for testing
//pic.addEventListener("click", createDot);
pic.addEventListener("click",dot);




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
