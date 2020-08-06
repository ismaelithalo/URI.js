var input = require('fs').readFileSync('dev/stdin', 'utf8');
//
var [A, B, C] = input.split(' ').map(num => Number(num));
var M1 = (A+B+Math.abs(A-B))/2;
var M2 = (B+C+Math.abs(B-C))/2;
var M = (M1+M2+Math.abs(M1-M2))/2;

console.log (`${M} eh o maior`);

