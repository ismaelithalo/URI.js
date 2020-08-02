var input = require('fs').readFileSync('dev/stdin', 'utf8');
//
var [A,B,C,D] = input.split('\n').map(num => parseInt(num));
var DIFERENCA = (A*B-C*D);
console.log(`DIFERENCA = ${DIFERENCA}`);


