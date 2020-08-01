var input = require('fs').readFileSync('dev/stdin', 'utf8');
//
var [A,B] = input.split('\n').map(num => parseInt(num));
var X = A+B;
console.log(`X = ${X}`);


