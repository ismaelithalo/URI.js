var input = require('fs').readFileSync('dev/stdin', 'utf8');
//
var [A,B,C,D] = input.split(' ').map(num => parseInt(num));
    
    if (
        (B>C) &&
        (D>A) &&
        ((C+D)>(A+B)) &&
        (D>0) &&
        (C>0) && 
        (A%2===0) 
        ){
        console.log("Valores aceitos");
        }
    else {
        console.log("Valores nao aceitos");
        }
