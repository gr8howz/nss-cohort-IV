console.log('welcome o your calc app');

var operator = prompt('Add (+) or Substract (-));
console.log(opertator);
var x = prompt('Enter first number');
var y = prompt('Enter second number');
console.log(x);
console.log(y);
x = parseInt (x);
y = parseInt (y);


var result;

if(operator === '+')
  result = add(x,y);
else
  result = sub(x,y);
//???
//a
//---------------------------------------------//
function add(a,b) {
  return a + b;
}

function add(a,b) {
  return a - b;
}

