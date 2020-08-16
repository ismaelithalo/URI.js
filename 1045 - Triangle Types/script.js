var input = require('fs').readFileSync('dev/stdin', 'utf8');
//
var [A,B,C] = input.split(' ').map(num => parseFloat(num));
var list = [A,B,C];
    if (list[0] < list[1]){
        let temp = list[0];
        list[0] = list[1];
        list[1] = temp;
    }
    if (list[1] < list[2]) {
        let temp = list[1];
        list[1] = list[2];
        list[2] = temp;
    }
    if (list[0] < list[1]){
        let temp = list[0];
        list[0] = list[1];
        list[1] = temp;
    }
    [A,B,C] = list;

    if (A >= (B+C))
        console.log("NAO FORMA TRIANGULO");
    else {
        if ((A*A) === (B*B) + (C*C))
            console.log("TRIANGULO RETANGULO");
        else if ((A*A) > (B*B) + (C*C))
            console.log("TRIANGULO OBTUSANGULO");
        else
            console.log("TRIANGULO ACUTANGULO");

        if (A === B && B === C)
            console.log("TRIANGULO EQUILATERO");
        else if (A === B || B === C)
            console.log("TRIANGULO ISOSCELES");
    }
    
