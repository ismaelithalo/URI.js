var input = require('fs').readFileSync('dev/stdin', 'utf8');
//
var R = Number(input);
var VOLUME = ((4/3)*3.14159*R*R*R);
console.log(`VOLUME = ${VOLUME.toFixed(3)}`);

