var input = require('fs').readFileSync('dev/stdin', 'utf8');
//
var R = parseFloat(input);
var n = 3.14159;
var A = n*R*R;
console.log(`A=${A.toFixed(4)}`);


