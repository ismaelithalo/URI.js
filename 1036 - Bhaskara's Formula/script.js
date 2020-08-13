var input = require('fs').readFileSync('dev/stdin', 'utf8');
//
var [A,B,C] = input.split(' ').map(num => parseFloat(num));
var delta = (B*B)-(4*A*C);

    if (delta >= 0 && A != 0){
        var R1 = (-B+Math.sqrt(delta))/(2*A);
        var R2 = (-B-Math.sqrt(delta))/(2*A);
        console.log(`R1 = ${ R1.toFixed(5) }\nR2 = ${ R2.toFixed(5) }`);
        }
    else {
        console.log("Impossivel calcular");
        }
