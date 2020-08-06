var input = require('fs').readFileSync('dev/stdin', 'utf8');
//
var [X,Y] = input.split('\n').map(num => Number(num));
var TOTAL = (X/Y);
console.log(`${TOTAL.toFixed(3)} km/l`);

