
var csv = d3.csv("https://raw.githubusercontent.com/PeterCwalina/DaWorskshop2.0/master/21_js-mfr/data/data.csv").then(function(data){
  console.log(data);
  //time for some statistic shenanigans

  //first up average amount of students in grade1
  var grade1 =[];
  for (var i = 0;i < data.length;i++){
    grade1.push(data[i]["grade1"]);
  }
  //console.log(grade1);
  //console.log(Number.isInteger(parseInt("")));
  //filter out the empty strings
  var grade1 = grade1.filter(function(n){return (Number.isInteger(parseInt(n)))});
  var average1 = (grade1.reduce(function(a,b){return parseInt(a)+parseInt(b)}) / grade1.length);
  //average of grade 1 students
  console.log(average1)

  //now lets try something different

  //number of schools with males over 50% and asians over 50%
  var maleAsians = data.filter(function(n){return ((parseInt(n["male_per"]) >= 50)&&(parseInt(n["asian_per"])>=50))});
  var numSchool = maleAsians.length
  console.log(numSchool)

  //now for the final statisticy thing standard deviation of grade8 students
  var grade8 =[];
  //just seperating the 8th graders
  for (var i = 0;i < data.length;i++){
    grade8.push(data[i]["grade8"]);
  }
  //filters out the empty strings
  var grade8 = grade8.filter(function(n){return (Number.isInteger(parseInt(n)))});
  console.log(grade8);
  //avg of numbers
  var avg8 = (grade8.reduce(function(a,b){return parseInt(a)+parseInt(b)}) / grade8.length);
  console.log(avg8);
  //squared diffs
  var diffs = grade8.map(function(n){
    var diff = parseInt(n) - avg8;
    return diff * diff;
  });
  var avgDiff = (diffs.reduce(function(a,b){return a + b}) / diffs.length);
  var standardDeviation = Math.sqrt(avgDiff);
  console.log(standardDeviation);

  //now lets dump all of these into the html
  var first = document.getElementById("avg");
  first.innerHTML = average1;
  var second = document.getElementById("males");
  second.innerHTML = numSchool;
  var third = document.getElementById("standard");
  third.innerHTML = standardDeviation;
});
