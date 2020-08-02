var input = require('fs').readFileSync('dev/stdin', 'utf8');
//
var [A,B] = input.split('\n').map(num => parseFloat(num));
var MEDIA = ((A*3.5)+(B*7.5))/11;
console.log(`MEDIA = ${MEDIA.toFixed(5)}`);


