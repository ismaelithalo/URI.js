var input = require('fs').readFileSync('dev/stdin', 'utf8');
//
var [A,B] = input.split('\n').map(num => parseInt(num));
var SOMA = A+B;
console.log(`SOMA = ${SOMA}`);


