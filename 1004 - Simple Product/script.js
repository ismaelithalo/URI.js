var input = require('fs').readFileSync('dev/stdin', 'utf8');
//
var [A,B] = input.split('\n').map(num => parseInt(num));
var PROD = A*B;
console.log(`PROD = ${PROD}`);


