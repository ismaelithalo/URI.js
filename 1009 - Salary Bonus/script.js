var input = require('fs').readFileSync('dev/stdin', 'utf8');
//
var [NAME, SALARY, SOLD] = input.split('\n');
SALARY = parseFloat(SALARY);
SOLD = parseFloat(SOLD);
var TOTAL = (SALARY+(SOLD*0.15));
console.log(`TOTAL = R$ ${TOTAL.toFixed(2)}`);
