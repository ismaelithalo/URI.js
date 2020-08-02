var input = require('fs').readFileSync('dev/stdin', 'utf8');
//
var [A,B,C] = input.split('\n').map(num => parseFloat(num));
var MEDIA = ((A*2)+(B*3)+(C*5))/10;
console.log(`MEDIA = ${MEDIA.toFixed(1)}`);


