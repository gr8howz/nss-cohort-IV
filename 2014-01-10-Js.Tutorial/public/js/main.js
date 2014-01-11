console.log();

var length  = 8;
var width  = 12;
var area = length * width;
var areaMessage = 'the area of a 8X12 feet is ' + area + ' square feet';
console.log(areaMessage);




var sqFeet = 29572;
var floor = (15 + 63 + 12);
var totalHouses = sqFeet / floor;
totalHouses = Math.floor(totalHouses);

var totalMessage = 'Total full houses you could paint is ' + totalHouses + ' houses';
console.log(totalMessage);



var l = prompt('Enter the length of your room');
l = parseInt(l);
var w = prompt('Enter the width of your room');
w = parseInt(w);
var h = prompt('Enter the height of your room');
h = parseInt(h);

var volume = h * w * l;
console.log(volume);


var age = prompt('what is your age');
age = parseInt(age) 
if(age < 18)
  console.log('You are a young baby!');
else
  console.log('You are an old fart you idiot!');
