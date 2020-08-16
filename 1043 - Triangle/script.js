var input = require('fs').readFileSync('dev/stdin', 'utf8');
//
var [A,B,C] = input.split(' ').map(num => parseFloat(num));
    if (A >= (B+C) || B >= (A+C) || C >= (A+B)){
        let value = ((A+B)*C)/2;
        console.log(`Area = ${value.toFixed(1)}`);
    }
    else {
        let value = (A+B+C);
        console.log(`Perimetro = ${value.toFixed(1)}`);
    }