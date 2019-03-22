//Peter Cwalina
//SoftDev2 pd8
//K #15: Scattered
//2019-03-21
var data = [
  {temp:14.2,price:215},
  {temp:16.4,price:325},
  {temp:11.9,price:185},
  {temp:15.2,price:332},
  {temp:18.5,price:406},
  {temp:22.1,price:522},
  {temp:19.4,price:412},
  {temp:25.1,price:614},
  {temp:23.4,price:544},
  {temp:18.1,price:421},
  {temp:22.6,price:445},
  {temp:17.2,price:408}
];
var xaxis = ["Price in $"];
var yaxis = ["Temperature in °C"];

var width = 500,
    height = 700;

var x = d3.scaleLinear()
    .range([0,width])
    .domain([0,d3.max(data,function(d){return d.temp;})]);

var y = d3.scaleLinear()
    .range([0,height])
    .domain([0,d3.max(data,function(d){return d.price;})]);


var chart = d3.select(".chart")
    .attr("width", width)
    .attr("height",height);

chart.selectAll("circle")
     .data(data)
     .enter()
     .append("circle")
       .attr("cx",function(d){return x(d.temp); })
       .attr("cy",function(d){return y(d.price); });

var text = chart.selectAll("text");

text.data(data)
    .enter()
    .append("text")
      .text(function(d){return d.temp + "°C,$" + d.price;})
      .attr("x", function(d){return x(d.temp) - 10;})
      .attr("y", function(d){return y(d.price);});

text.data(xaxis)
    .enter()
    .append("text")
      .text(function(d){return d;})
      .attr("x", 50)
      .attr("y", height/2);

text.data(yaxis)
    .enter()
    .append("text")
      .text(function(d){return d;})
      .attr("x",width/2 + 10 )
      .attr("y", 690);
