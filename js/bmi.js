var inches = parseFloat(prompt("enter height in inches:"));
var lbs = parseInt(prompt("enter in weight:"));

var kg = function(lbs){return lbs * .45};

var weight = (kg(lbs));

var meters = function(inches){return (inches * .025) ** 2};

var height = (meters(inches));

var bmi = function(weight, height){return weight / height};
var bmi = (weight / height);

alert("your bmi is: " + bmi.toPrecision(2));
