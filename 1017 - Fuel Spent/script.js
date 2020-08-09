var input = require('fs').readFileSync('dev/stdin', 'utf8');
//
var [time,speed] = input.split('\n').map(num => Number(num));
var fuel = (speed*time)/12;
console.log(`${fuel.toFixed(3)}`);

