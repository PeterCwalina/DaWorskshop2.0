//Peter Cwalina
//SoftDev2 pd8
//K13 Diving Deeper Into D3
//2019-03-19

//so time to recreate stuff
//data
var data = [4, 8, 15, 16, 23, 42];
//scale funct thing
var x = d3.scaleLinear()
  .domain([0,d3.max(data)])
  .range([0,420]);
//big in one go thing


d3.select(".chart")
  .selectAll("div")
    .data(data)
  .enter().append("div")
    .style("width",function(d){return x(d)+"px";})
    .text(function(d){return d;});
