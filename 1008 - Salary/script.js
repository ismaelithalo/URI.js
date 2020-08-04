var input = require('fs').readFileSync('dev/stdin', 'utf8');
//
var [NUMBER, HOUR, AMOUNT] = input.split('\n').map(num => Number(num));
var SALARY = (HOUR*AMOUNT);
console.log(`NUMBER = ${NUMBER}\nSALARY = U$ ${SALARY.toFixed(2)}`);

