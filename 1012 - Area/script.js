var input = require('fs').readFileSync('dev/stdin', 'utf8');
//
var [A, B, C] = input.split(' ').map(num => Number(num));
var TRIANGULO = (A*C)/2;
var CIRCULO = (3.14159*C*C);
var TRAPEZIO = ((A+B)*C)/2;
var QUADRADO = B*B;
var RETANGULO = A*B;

console.log (
`TRIANGULO: ${TRIANGULO.toFixed(3)}
CIRCULO: ${CIRCULO.toFixed(3)}
TRAPEZIO: ${TRAPEZIO.toFixed(3)}
QUADRADO: ${QUADRADO.toFixed(3)}
RETANGULO: ${RETANGULO.toFixed(3)}`
);

