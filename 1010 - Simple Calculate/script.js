var input = require('fs').readFileSync('dev/stdin', 'utf8');
//
var [V1,V2] = input.split('\n');
var [C1, N1, P1] = V1.split(' ').map(num => Number(num));
var [C2, N2, P2] = V2.split(' ').map(num => Number(num));
var VALOR = ((N1*P1)+(N2*P2));
console.log(`VALOR A PAGAR: R$ ${VALOR.toFixed(2)}`);

