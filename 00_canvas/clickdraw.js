var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var boxDot = 0;
var clearBut = document.getElementById('clear');
clearBut.addEventListener('click',function(e){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
);
var toggleBut = document.getElementById('toggle');
toggleBut.addEventListener('click',function(e){
    if (boxDot == 0){
      boxDot = 1;
    }
    else{
      boxDot = 0;
    }
}
);

c.addEventListener('click',function(e){
  if (boxDot == 0){
    ctx.fillRect(e.layerX,e.layerY,100,100);
  }
  else{
    ctx.fillRect(e.layerX,e.layerY,2,2);
  }
}
);
