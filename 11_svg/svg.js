//Peter Cwalina
//SoftDev2 pd9
//K11 -- Ask Circles [Change || Die] …While On The Go
//2019-3-16


//code from last hw courtesy of thomas Zhao since I quite liked how he did it : Thanks thomas
var pic = document.getElementById("vimage");

pic.addEventListener('click', function(e){
    generateCircle(e, e.offsetX, e.offsetY)
})

var generateCircle = function(e, xcor, ycor){
    var newdot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    newdot.setAttribute("fill", "purple");
    newdot.setAttribute("cx", xcor);
    newdot.setAttribute("cy", ycor);
    newdot.setAttribute("r", 10)
    pic.appendChild(newdot);

    newdot.addEventListener('click', function(e){
	e.stopPropagation();
	newdot.setAttribute("fill", "green");
	newdot.addEventListener('click', function(e){
	    e.stopPropagation();
	    newdot.remove();
	    generateCircle(e, (Math.random() * 490) + 5, (Math.random() * 490)+5);
	})
    })
}

//Clearing the SVG
var clear_buddon = document.getElementById("but_clear");

clear_buddon.addEventListener('click', function(e){
    window.cancelAnimationFrame(requestID);
    while(pic.children[0] != undefined){
	     pic.removeChild(pic.children[0])
    }
})

//new stuff
var movBut = document.getElementById("move");

var requestID;

var setupMoveDot = function(){
  window.cancelAnimationFrame(requestID);
  var children = pic.children;
  for (var i = 0; i < children.length;i++){
    children[i].setAttribute("vx",1);
    children[i].setAttribute("vy",1);
  }
  var moveDot = function(){
    for (var x = 0;x < children.length;x++){
      var cx = children[x].getAttribute("cx");
      var cy = children[x].getAttribute("cy");
      var vx = children[x].getAttribute("vx");
      var vy = children[x].getAttribute("vy");
      if (vx != null){
        if (cx < 5 || cx > 495){
          vx = Number(vx) * -1;
          //console.log(vx);
        }
        if (cy <5 || cy > 495){
          vy = Number(vy) * -1;
          //console.log(vy);
        }
        //console.log(cx);
        //console.log(cy);
        cx = Number(cx) + Number(vx);
        cy = Number(cy) + Number(vy);
        //console.log(vx);
        //console.log(vy);
        //console.log(cx);
        //console.log(cy);
        children[x].setAttribute("cx",cx);
        children[x].setAttribute("cy",cy);
        children[x].setAttribute("vx",vx);
        children[x].setAttribute("vy",vy);
      }
    }
    requestID = window.requestAnimationFrame(moveDot);
  }
  moveDot();
}

movBut.addEventListener("click",setupMoveDot);
//??????

var whatBut = document.getElementById("?");

var what = function(){
  var children = pic.children;
  for (var i = 0;i < children.length;i++){
    children[i].setAttribute("vx",Math.random()*2);
    children[i].setAttribute("vy",Math.random()*2);
  }
}
whatBut.addEventListener("click",what)
